import Link from 'next/link'
import { FAQS, CATEGORIES, COUPE_SRC } from '@/lib/data'

export const metadata = {
  title: 'FAQ | Cocktail Média',
  description: 'Questions fréquentes sur Cocktail Média — comment ça marche, les prix, les délais, le déplacement.',
}

export default function FAQPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{
        background: 'var(--noir)', minHeight: '40vh',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '10rem 2rem 4rem', position: 'relative', overflow: 'hidden',
      }}>
        <span style={{
          position: 'absolute', right: '-2%', top: '8%',
          fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif',
          fontSize: 'clamp(5rem,16vw,13rem)', color: 'white', opacity: .04,
          letterSpacing: '.04em', userSelect: 'none', lineHeight: 1,
        }}>FAQ</span>
        <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%' }}>
          <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.8rem', letterSpacing: '.4em', color: 'var(--rouge)', marginBottom: '.8rem' }}>ON RÉPOND</p>
          <h1 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: 'clamp(3rem,8vw,5.5rem)', color: 'var(--creme)', letterSpacing: '.04em', lineHeight: 1, marginBottom: '1rem' }}>
            QUESTIONS<br /><span style={{ color: 'var(--rouge)' }}>FRÉQUENTES</span>
          </h1>
          <p style={{ fontSize: '.95rem', color: 'var(--gris)', maxWidth: 480 }}>Tout ce que tu veux savoir sur comment on travaille, nos prix et nos délais.</p>
        </div>
      </section>

      {/* ── FAQ GÉNÉRALES ─────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--fond)', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.75rem', letterSpacing: '.4em', color: 'var(--rouge)', marginBottom: '1rem' }}>GÉNÉRAL</p>
          <h2 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: 'clamp(1.8rem,4vw,2.5rem)', color: 'var(--noir)', letterSpacing: '.03em', marginBottom: '2.5rem' }}>
            COMMENT ÇA MARCHE
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {FAQS.map(faq => (
              <details key={faq.q} style={{ padding: '1.5rem', background: 'white', borderRadius: 12, border: '1px solid var(--ligne)', cursor: 'pointer' }}>
                <summary style={{ fontWeight: 700, color: 'var(--noir)', fontSize: '.9rem', lineHeight: 1.4, listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                  <span>{faq.q}</span>
                  <span style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', color: 'var(--rouge)', fontSize: '1.2rem', flexShrink: 0 }}>+</span>
                </summary>
                <p style={{ fontSize: '.85rem', color: 'var(--gris)', lineHeight: 1.8, marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--ligne)' }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ PAR CATÉGORIE ─────────────────────────────────────────────── */}
      {CATEGORIES.map(cat => cat.faqs.length > 0 && (
        <section key={cat.slug} style={{ background: cat.slug === 'les-roses' || cat.slug === 'les-digestifs' ? 'var(--creme)' : 'var(--fond)', padding: '4rem 2rem', borderTop: '1px solid var(--ligne)' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ width: 6, height: 32, background: cat.color, borderRadius: 3 }} />
              <div>
                <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.65rem', letterSpacing: '.3em', color: cat.color }}>{cat.num} — {cat.type}</p>
                <h2 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '1.5rem', letterSpacing: '.06em', color: 'var(--noir)' }}>{cat.name}</h2>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.8rem' }}>
              {cat.faqs.map(faq => (
                <details key={faq.q} style={{ padding: '1.2rem 1.5rem', background: 'white', borderRadius: 10, border: '1px solid var(--ligne)', cursor: 'pointer' }}>
                  <summary style={{ fontWeight: 600, color: 'var(--noir)', fontSize: '.88rem', lineHeight: 1.4, listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                    <span>{faq.q}</span>
                    <span style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', color: cat.color, fontSize: '1.1rem', flexShrink: 0 }}>+</span>
                  </summary>
                  <p style={{ fontSize: '.83rem', color: 'var(--gris)', lineHeight: 1.8, marginTop: '.8rem', paddingTop: '.8rem', borderTop: '1px solid var(--ligne)' }}>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--rouge)', padding: '5rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={COUPE_SRC} alt="" style={{ height: 44, marginBottom: '1.5rem', filter: 'brightness(0) invert(1)', opacity: .7 }} />
          <h2 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: 'clamp(2rem,5vw,3rem)', color: 'white', letterSpacing: '.04em', marginBottom: '1rem' }}>
            T&apos;AS ENCORE DES QUESTIONS ?
          </h2>
          <p style={{ fontSize: '.9rem', color: 'rgba(255,255,255,.8)', marginBottom: '2rem' }}>Écris-nous directement. On répond vite.</p>
          <a href="mailto:info@cocktailmedia.ca" className="btn-email-cta" style={{
            fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif',
            fontSize: '1rem', letterSpacing: '.14em',
            color: 'var(--rouge)', background: 'white',
            padding: '.8rem 2.5rem', borderRadius: 100,
            display: 'inline-block', transition: 'all .3s ease',
          }}>
            INFO@COCKTAILMEDIA.CA
          </a>
          <style>{`.btn-email-cta:hover { background: var(--noir) !important; color: white !important; }`}</style>
        </div>
      </section>
    </>
  )
}
