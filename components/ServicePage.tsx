'use client'
import Link from 'next/link'
import { CATEGORIES } from '@/lib/data'

export default function ServicePage({ catSlug, serviceSlug }: { catSlug: string; serviceSlug: string }) {
  const cat = CATEGORIES.find(c => c.slug === catSlug)!
  const svc = cat.services.find(s => s.slug === serviceSlug)!

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{
        background: 'var(--noir)', minHeight: '50vh',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '10rem 2rem 4rem', position: 'relative', overflow: 'hidden',
      }}>
        <span style={{
          position: 'absolute', right: '-2%', top: '8%',
          fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif',
          fontSize: 'clamp(5rem,14vw,11rem)', color: cat.color, opacity: .06,
          letterSpacing: '.04em', userSelect: 'none', lineHeight: 1,
        }}>{cat.bgWord1}</span>

        <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%', position: 'relative', zIndex: 2 }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <Link href="/menu" style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.7rem', letterSpacing: '.2em', color: 'var(--gris)', transition: 'color .2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--creme)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--gris)')}
            >MENU</Link>
            <span style={{ color: 'var(--gris)', fontSize: '.7rem' }}>›</span>
            <Link href={`/menu/${cat.slug}`} style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.7rem', letterSpacing: '.2em', color: cat.color, transition: 'color .2s' }}>
              {cat.name}
            </Link>
            <span style={{ color: 'var(--gris)', fontSize: '.7rem' }}>›</span>
            <span style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.7rem', letterSpacing: '.2em', color: 'var(--creme)' }}>{svc.name.toUpperCase()}</span>
          </div>

          <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.75rem', letterSpacing: '.4em', color: cat.color, marginBottom: '.8rem' }}>{cat.num} — {cat.type}</p>
          <h1 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: 'clamp(2.5rem,7vw,5rem)', color: 'var(--creme)', letterSpacing: '.04em', lineHeight: 1, marginBottom: '1rem' }}>
            {svc.name.toUpperCase()}
          </h1>
          <p style={{ fontSize: '.95rem', color: 'var(--gris)', maxWidth: 500, lineHeight: 1.7 }}>{svc.desc}</p>
        </div>
      </section>

      {/* ── DÉTAILS + CTA ─────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--fond)', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem', alignItems: 'start' }} className="svc-layout">

          {/* Left: inclus */}
          <div>
            <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.75rem', letterSpacing: '.4em', color: cat.color, marginBottom: '1rem' }}>CE QUI EST INCLUS</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {cat.inclus.map(item => (
                <div key={item.title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1.2rem', background: 'white', borderRadius: 10, border: '1px solid var(--ligne)' }}>
                  <span style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', color: cat.color, fontSize: '1rem', flexShrink: 0 }}>✓</span>
                  <div>
                    <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.75rem', letterSpacing: '.2em', color: 'var(--noir)', marginBottom: '.3rem' }}>{item.title}</p>
                    <p style={{ fontSize: '.8rem', color: 'var(--gris)', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: price card */}
          <div style={{ position: 'sticky', top: '6rem' }}>
            <div style={{ padding: '2rem', background: 'white', borderRadius: 16, border: `2px solid ${cat.color}`, boxShadow: `0 12px 40px ${cat.colorPale}` }}>
              <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.7rem', letterSpacing: '.3em', color: 'var(--gris)', marginBottom: '.5rem' }}>PRIX</p>
              <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '2.5rem', color: cat.color, letterSpacing: '.04em', lineHeight: 1, marginBottom: '1.5rem' }}>
                {svc.price}
              </p>
              <p style={{ fontSize: '.78rem', color: 'var(--gris)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Taxes non incluses. Les prix affichés sont fixes — pas de surprise à la fin.
              </p>
              <Link href="/reserver" style={{
                display: 'block', textAlign: 'center',
                fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif',
                fontSize: '1rem', letterSpacing: '.14em',
                color: 'white', background: cat.color,
                padding: '.85rem 1.5rem', borderRadius: 100,
                marginBottom: '.8rem', transition: 'all .3s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '.85'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                RÉSERVER CE SERVICE
              </Link>
              <Link href={`/menu/${cat.slug}`} style={{
                display: 'block', textAlign: 'center',
                fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif',
                fontSize: '.8rem', letterSpacing: '.14em',
                color: 'var(--gris)', padding: '.5rem',
                transition: 'color .2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--noir)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--gris)')}
              >
                ← VOIR TOUS LES SERVICES
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ CATÉGORIE ────────────────────────────────────────────────── */}
      {cat.faqs.length > 0 && (
        <section style={{ background: 'var(--creme)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.75rem', letterSpacing: '.4em', color: cat.color, marginBottom: '.6rem' }}>QUESTIONS FRÉQUENTES</p>
            <h2 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: 'clamp(1.5rem,3vw,2rem)', color: 'var(--noir)', letterSpacing: '.03em', marginBottom: '2rem' }}>ON RÉPOND</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {cat.faqs.map(faq => (
                <div key={faq.q} style={{ padding: '1.5rem', background: 'white', borderRadius: 12, border: '1px solid var(--ligne)' }}>
                  <p style={{ fontWeight: 700, color: 'var(--noir)', fontSize: '.9rem', marginBottom: '.6rem' }}>{faq.q}</p>
                  <p style={{ fontSize: '.85rem', color: 'var(--gris)', lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <style>{`
        @media (max-width: 768px) {
          .svc-layout { grid-template-columns: 1fr !important; }
          .svc-layout > div:last-child { position: static !important; }
        }
      `}</style>
    </>
  )
}
