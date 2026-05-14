import Link from 'next/link'
import { FAQS, CATEGORIES, COUPE_SRC } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'

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
        <div className="container">
          <p className="eyebrow">ON RÉPOND</p>
          <h1 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: 'clamp(3rem,8vw,5.5rem)', color: 'var(--creme)', letterSpacing: '.04em', lineHeight: 1, marginBottom: '1rem' }}>
            QUESTIONS<br /><span style={{ color: 'var(--rouge)' }}>FRÉQUENTES</span>
          </h1>
          <p style={{ fontSize: '.95rem', color: 'var(--gris)', maxWidth: 480 }}>Tout ce que tu veux savoir sur comment on travaille, nos prix et nos délais.</p>
        </div>
      </section>

      {/* ── FAQ GÉNÉRALES ─────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--fond)', padding: '5rem 2rem' }}>
        <div className="container-sm">
          <SectionHeader eyebrow="GÉNÉRAL" heading="COMMENT ÇA MARCHE" align="left" size="md" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {FAQS.map(faq => (
              <details key={faq.q} className="faq-item">
                <summary>
                  <span>{faq.q}</span>
                  <span className="faq-toggle">+</span>
                </summary>
                <p className="faq-answer">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ PAR CATÉGORIE ─────────────────────────────────────────────── */}
      {CATEGORIES.map(cat => cat.faqs.length > 0 && (
        <section key={cat.slug} style={{ background: cat.slug === 'les-roses' || cat.slug === 'les-digestifs' ? 'var(--creme)' : 'var(--fond)', padding: '4rem 2rem', borderTop: '1px solid var(--ligne)' }}>
          <div className="container-sm">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <span style={{
                fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif',
                fontSize: '1.4rem', letterSpacing: '.06em',
                color: cat.color, lineHeight: 1,
                flexShrink: 0,
              }}>{cat.num}</span>
              <div>
                <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.65rem', letterSpacing: '.3em', color: cat.color }}>{cat.type}</p>
                <h2 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '1.5rem', letterSpacing: '.06em', color: 'var(--noir)' }}>{cat.name}</h2>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.8rem' }}>
              {cat.faqs.map(faq => (
                <details key={faq.q} className="faq-item" style={{ padding: '1.2rem 1.5rem' }}>
                  <summary style={{ fontSize: '.88rem' }}>
                    <span>{faq.q}</span>
                    <span className="faq-toggle" style={{ color: cat.color, fontSize: '1.1rem' }}>+</span>
                  </summary>
                  <p className="faq-answer" style={{ fontSize: '.83rem', marginTop: '.8rem', paddingTop: '.8rem' }}>{faq.a}</p>
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
          <a href="mailto:info@cocktailmedia.ca" className="btn btn-white-on-rouge btn-md">
            INFO@COCKTAILMEDIA.CA
          </a>
        </div>
      </section>
    </>
  )
}
