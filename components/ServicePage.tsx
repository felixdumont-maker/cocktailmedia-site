'use client'
import Link from 'next/link'
import { CATEGORIES } from '@/lib/data'
import Btn from '@/components/ui/Btn'

export default function ServicePage({ catSlug, serviceSlug }: { catSlug: string; serviceSlug: string }) {
  const cat = CATEGORIES.find(c => c.slug === catSlug)!
  const svc = cat.services.find(s => s.slug === serviceSlug)!

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{
        background: 'var(--noir)', minHeight: '60vh',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: 'clamp(8rem,15vh,12rem) 2rem 5rem', position: 'relative', overflow: 'hidden',
      }}>
        <span style={{
          position: 'absolute', right: '-2%', top: '8%',
          fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif',
          fontSize: 'clamp(5rem,14vw,11rem)', color: cat.color, opacity: .06,
          letterSpacing: '.04em', userSelect: 'none', lineHeight: 1,
        }}>{cat.bgWord1}</span>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
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
        <div className="container">
          <div className="svc-layout" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem', alignItems: 'start' }}>
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
                <Btn href="/reserver" variant="primary" size="md" style={{ display: 'block', textAlign: 'center', width: '100%', marginBottom: '.8rem', justifyContent: 'center', background: cat.color }}>
                  RÉSERVER CE SERVICE
                </Btn>
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
        </div>
      </section>

      {/* ── FAQ CATÉGORIE ────────────────────────────────────────────────── */}
      {cat.faqs.length > 0 && (
        <section style={{ background: 'var(--creme)', padding: '5rem 2rem' }}>
          <div className="container-sm">
            <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.75rem', letterSpacing: '.4em', color: cat.color, marginBottom: '.6rem' }}>QUESTIONS FRÉQUENTES</p>
            <h2 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: 'clamp(1.8rem,3vw,2.5rem)', color: 'var(--noir)', letterSpacing: '.03em', marginBottom: '2.5rem' }}>ON RÉPOND</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.8rem' }}>
              {cat.faqs.map(faq => (
                <details key={faq.q} className="faq-item">
                  <summary>
                    <span>{faq.q}</span>
                    <span className="faq-toggle" style={{ color: cat.color }}>+</span>
                  </summary>
                  <p className="faq-answer">{faq.a}</p>
                </details>
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
