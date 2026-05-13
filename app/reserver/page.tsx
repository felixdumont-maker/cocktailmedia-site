'use client'
import { useState } from 'react'
import { CATEGORIES, COUPE_SRC } from '@/lib/data'

export default function ReserverPage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '',
    category: '', service: '', message: '', date: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  const selectedCat = CATEGORIES.find(c => c.slug === form.category)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setError('')
    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Erreur serveur')
      }
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Une erreur est survenue')
    }
  }

  if (status === 'success') {
    return (
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--creme)', padding: '8rem 2rem 4rem' }}>
        <div style={{ textAlign: 'center', maxWidth: 500 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={COUPE_SRC} alt="" style={{ height: 64, marginBottom: '2rem' }} />
          <h1 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: 'clamp(2.5rem,6vw,4rem)', color: 'var(--noir)', letterSpacing: '.04em', marginBottom: '1rem' }}>
            DEMANDE ENVOYÉE !
          </h1>
          <p style={{ fontSize: '.95rem', color: 'var(--gris)', lineHeight: 1.8, marginBottom: '2rem' }}>
            On a reçu ta demande. On te confirme le créneau par courriel sous peu. Si tu n&apos;as pas de nouvelles dans les 24h, écris-nous à <a href="mailto:info@cocktailmedia.ca" style={{ color: 'var(--rouge)' }}>info@cocktailmedia.ca</a>.
          </p>
          <a href="/" style={{
            fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif',
            fontSize: '1rem', letterSpacing: '.14em',
            color: 'white', background: 'var(--rouge)',
            padding: '.8rem 2.5rem', borderRadius: 100, display: 'inline-block',
          }}>RETOUR À L&apos;ACCUEIL</a>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{
        background: 'var(--noir)', minHeight: '42vh',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '10rem 2rem 4rem', position: 'relative', overflow: 'hidden',
      }}>
        <span style={{
          position: 'absolute', right: '-2%', top: '8%',
          fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif',
          fontSize: 'clamp(5rem,16vw,13rem)', color: 'var(--rouge)', opacity: .06,
          letterSpacing: '.04em', userSelect: 'none', lineHeight: 1,
        }}>RÉSERVER</span>
        <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%' }}>
          <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.8rem', letterSpacing: '.4em', color: 'var(--rouge)', marginBottom: '.8rem' }}>PAS DE FORMULAIRE À 12 CHAMPS</p>
          <h1 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: 'clamp(3rem,8vw,5rem)', color: 'var(--creme)', letterSpacing: '.04em', lineHeight: 1, marginBottom: '1rem' }}>
            RÉSERVER<br /><span style={{ color: 'var(--rouge)' }}>UN CRÉNEAU</span>
          </h1>
          <p style={{ fontSize: '.95rem', color: 'var(--gris)', maxWidth: 480 }}>Dis-nous ce dont tu as besoin. On te confirme la date et on s&apos;en occupe.</p>
        </div>
      </section>

      {/* ── FORMULAIRE ───────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--fond)', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
              {[
                { key: 'name', label: 'Ton nom *', type: 'text', required: true, placeholder: 'Jean Tremblay' },
                { key: 'company', label: 'Entreprise', type: 'text', required: false, placeholder: 'Tremblay & Co.' },
              ].map(f => (
                <div key={f.key}>
                  <label style={{ display: 'block', fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.7rem', letterSpacing: '.25em', color: 'var(--gris)', marginBottom: '.4rem' }}>{f.label}</label>
                  <input
                    type={f.type} required={f.required} placeholder={f.placeholder}
                    value={(form as Record<string, string>)[f.key]}
                    onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                    style={{ width: '100%', padding: '.85rem 1rem', border: '1px solid var(--ligne)', borderRadius: 8, fontSize: '.9rem', background: 'white', fontFamily: 'inherit', outline: 'none', transition: 'border-color .2s' }}
                    onFocus={e => (e.target.style.borderColor = 'var(--rouge)')}
                    onBlur={e => (e.target.style.borderColor = 'var(--ligne)')}
                  />
                </div>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
              {[
                { key: 'email', label: 'Courriel *', type: 'email', required: true, placeholder: 'jean@exemple.ca' },
                { key: 'phone', label: 'Téléphone', type: 'tel', required: false, placeholder: '819-555-0000' },
              ].map(f => (
                <div key={f.key}>
                  <label style={{ display: 'block', fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.7rem', letterSpacing: '.25em', color: 'var(--gris)', marginBottom: '.4rem' }}>{f.label}</label>
                  <input
                    type={f.type} required={f.required} placeholder={f.placeholder}
                    value={(form as Record<string, string>)[f.key]}
                    onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                    style={{ width: '100%', padding: '.85rem 1rem', border: '1px solid var(--ligne)', borderRadius: 8, fontSize: '.9rem', background: 'white', fontFamily: 'inherit', outline: 'none', transition: 'border-color .2s' }}
                    onFocus={e => (e.target.style.borderColor = 'var(--rouge)')}
                    onBlur={e => (e.target.style.borderColor = 'var(--ligne)')}
                  />
                </div>
              ))}
            </div>

            <div>
              <label style={{ display: 'block', fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.7rem', letterSpacing: '.25em', color: 'var(--gris)', marginBottom: '.4rem' }}>CATÉGORIE DE SERVICE *</label>
              <select required value={form.category} onChange={e => setForm(p => ({ ...p, category: e.target.value, service: '' }))}
                style={{ width: '100%', padding: '.85rem 1rem', border: '1px solid var(--ligne)', borderRadius: 8, fontSize: '.9rem', background: 'white', fontFamily: 'inherit', outline: 'none', appearance: 'none', cursor: 'pointer' }}>
                <option value="">Choisir une catégorie…</option>
                {CATEGORIES.map(cat => <option key={cat.slug} value={cat.slug}>{cat.name} — {cat.type}</option>)}
              </select>
            </div>

            {selectedCat && (
              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.7rem', letterSpacing: '.25em', color: 'var(--gris)', marginBottom: '.4rem' }}>SERVICE SPÉCIFIQUE *</label>
                <select required value={form.service} onChange={e => setForm(p => ({ ...p, service: e.target.value }))}
                  style={{ width: '100%', padding: '.85rem 1rem', border: '1px solid var(--ligne)', borderRadius: 8, fontSize: '.9rem', background: 'white', fontFamily: 'inherit', outline: 'none', appearance: 'none', cursor: 'pointer' }}>
                  <option value="">Choisir un service…</option>
                  {selectedCat.services.map(svc => <option key={svc.slug} value={svc.slug}>{svc.name} — {svc.price}</option>)}
                </select>
              </div>
            )}

            <div>
              <label style={{ display: 'block', fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.7rem', letterSpacing: '.25em', color: 'var(--gris)', marginBottom: '.4rem' }}>DATE SOUHAITÉE</label>
              <input type="date" value={form.date} onChange={e => setForm(p => ({ ...p, date: e.target.value }))}
                min={new Date().toISOString().split('T')[0]}
                style={{ width: '100%', padding: '.85rem 1rem', border: '1px solid var(--ligne)', borderRadius: 8, fontSize: '.9rem', background: 'white', fontFamily: 'inherit', outline: 'none', transition: 'border-color .2s' }}
                onFocus={e => (e.target.style.borderColor = 'var(--rouge)')}
                onBlur={e => (e.target.style.borderColor = 'var(--ligne)')}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.7rem', letterSpacing: '.25em', color: 'var(--gris)', marginBottom: '.4rem' }}>MESSAGE / PRÉCISIONS</label>
              <textarea rows={4} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                placeholder="Décris ton projet en quelques mots — contexte, ambiance, attentes…"
                style={{ width: '100%', padding: '.85rem 1rem', border: '1px solid var(--ligne)', borderRadius: 8, fontSize: '.9rem', background: 'white', fontFamily: 'inherit', outline: 'none', resize: 'vertical', transition: 'border-color .2s' }}
                onFocus={e => (e.target.style.borderColor = 'var(--rouge)')}
                onBlur={e => (e.target.style.borderColor = 'var(--ligne)')}
              />
            </div>

            {status === 'error' && (
              <p style={{ fontSize: '.85rem', color: 'var(--rouge)', padding: '.8rem 1rem', background: 'var(--rouge-pale)', borderRadius: 8 }}>
                {error}
              </p>
            )}

            <button type="submit" disabled={status === 'loading'} style={{
              fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif',
              fontSize: '1.05rem', letterSpacing: '.14em',
              color: 'white', background: status === 'loading' ? 'var(--gris)' : 'var(--rouge)',
              padding: '1rem 3rem', borderRadius: 100,
              border: 'none', cursor: status === 'loading' ? 'not-allowed' : 'pointer',
              transition: 'all .3s ease', alignSelf: 'flex-start',
            }}>
              {status === 'loading' ? 'ENVOI EN COURS…' : 'ENVOYER LA DEMANDE'}
            </button>

            <p style={{ fontSize: '.78rem', color: 'var(--gris)', lineHeight: 1.6 }}>
              On confirme les créneaux par courriel sous 24h ouvrables. Aucune carte de crédit requise pour réserver.
            </p>
          </form>
        </div>
      </section>

      {/* ── INFO CONTACT ─────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--creme)', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.7rem', letterSpacing: '.3em', color: 'var(--rouge)', marginBottom: '.5rem' }}>COURRIEL</p>
            <a href="mailto:info@cocktailmedia.ca" style={{ fontSize: '.9rem', color: 'var(--noir)', fontWeight: 500 }}>info@cocktailmedia.ca</a>
          </div>
          <div>
            <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.7rem', letterSpacing: '.3em', color: 'var(--rouge)', marginBottom: '.5rem' }}>TÉLÉPHONE</p>
            <a href="tel:+18195314803" style={{ fontSize: '.9rem', color: 'var(--noir)', fontWeight: 500 }}>819-531-4803</a>
          </div>
          <div>
            <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.7rem', letterSpacing: '.3em', color: 'var(--rouge)', marginBottom: '.5rem' }}>ZONE</p>
            <p style={{ fontSize: '.9rem', color: 'var(--noir)', fontWeight: 500 }}>Mauricie & environs</p>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
