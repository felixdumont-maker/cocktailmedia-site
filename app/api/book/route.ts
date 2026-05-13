import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, company, category, service, message, date } = body

    if (!name || !email || !category) {
      return NextResponse.json({ error: 'Champs obligatoires manquants.' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Adresse courriel invalide.' }, { status: 400 })
    }

    const calendarId = process.env.GOOGLE_CALENDAR_ID
    const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')

    if (!calendarId || !serviceAccountEmail || !privateKey) {
      console.error('Missing Google Calendar env vars')
      await sendFallbackEmail({ name, email, phone, company, category, service, message, date })
      return NextResponse.json({ ok: true })
    }

    const token = await getServiceAccountToken(serviceAccountEmail, privateKey)

    const startDate = date || new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    const startDateTime = `${startDate}T10:00:00`
    const endDateTime = `${startDate}T11:00:00`

    const event = {
      summary: `[COCKTAIL MÉDIA] ${service || category} — ${name}${company ? ` (${company})` : ''}`,
      description: [
        `Client : ${name}`,
        company ? `Entreprise : ${company}` : '',
        `Courriel : ${email}`,
        phone ? `Téléphone : ${phone}` : '',
        `Catégorie : ${category}`,
        service ? `Service : ${service}` : '',
        message ? `\nMessage :\n${message}` : '',
      ].filter(Boolean).join('\n'),
      start: { dateTime: `${startDateTime}:00`, timeZone: 'America/Toronto' },
      end: { dateTime: `${endDateTime}:00`, timeZone: 'America/Toronto' },
      attendees: [{ email }],
    }

    const calRes = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?sendUpdates=all`,
      {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(event),
      }
    )

    if (!calRes.ok) {
      const err = await calRes.text()
      console.error('Google Calendar error:', err)
      await sendFallbackEmail({ name, email, phone, company, category, service, message, date })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Book API error:', err)
    return NextResponse.json({ error: 'Erreur serveur. Réessaie ou contacte-nous directement.' }, { status: 500 })
  }
}

async function getServiceAccountToken(clientEmail: string, privateKey: string): Promise<string> {
  const now = Math.floor(Date.now() / 1000)
  const header = btoa(JSON.stringify({ alg: 'RS256', typ: 'JWT' }))
  const payload = btoa(JSON.stringify({
    iss: clientEmail,
    scope: 'https://www.googleapis.com/auth/calendar',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  }))

  const signingInput = `${header}.${payload}`

  const keyData = privateKey
    .replace(/-----BEGIN PRIVATE KEY-----/, '')
    .replace(/-----END PRIVATE KEY-----/, '')
    .replace(/\s/g, '')

  const binaryKey = Uint8Array.from(atob(keyData), c => c.charCodeAt(0))

  const cryptoKey = await crypto.subtle.importKey(
    'pkcs8', binaryKey,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false, ['sign']
  )

  const signature = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    cryptoKey,
    new TextEncoder().encode(signingInput)
  )

  const signatureB64 = btoa(String.fromCharCode(...new Uint8Array(signature)))
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')

  const jwt = `${signingInput}.${signatureB64}`

  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  })

  const tokenData = await tokenRes.json()
  return tokenData.access_token
}

async function sendFallbackEmail(data: Record<string, string>) {
  const notifyEmail = process.env.NOTIFY_EMAIL || 'info@cocktailmedia.ca'
  console.log(`[FALLBACK] Booking from ${data.name} <${data.email}> — ${data.service || data.category} — notify: ${notifyEmail}`)
}
