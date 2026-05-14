import Link from 'next/link'
import { CATEGORIES, EXTRAS, COUPE_SRC } from '@/lib/data'
import Btn from '@/components/ui/Btn'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata = {
  title: 'Le Menu | Cocktail Média',
  description: 'Tous nos services de photo, vidéo, graphisme et web — avec les prix affichés. Pas de soumission mystère.',
}

export default function MenuPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{
        background: 'var(--noir)', minHeight: '45vh',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '10rem 2rem 4rem', position: 'relative', overflow: 'hidden',
      }}>
        <span style={{
          position: 'absolute', right: '-2%', top: '10%',
          fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif',
          fontSize: 'clamp(6rem,18vw,14rem)', color: 'white', opacity: .04,
          letterSpacing: '.04em', userSelect: 'none', lineHeight: 1,
        }}>MENU</span>
        <div className="container">
          <p className="eyebrow">NOTRE OFFRE COMPLÈTE</p>
          <h1 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: 'clamp(2.5rem,7vw,5rem)', color: 'var(--creme)', letterSpacing: '.04em', lineHeight: 1, marginBottom: '1rem' }}>
            LE MENU<br /><span style={{ color: 'var(--rouge)' }}>COCKTAIL MÉDIA</span>
          </h1>
          <p style={{ fontSize: '.95rem', color: 'var(--gris)', maxWidth: 520 }}>Cinq catégories. Des services clairs. Des prix affichés. Tu choisis ce dont tu as besoin — rien de plus.</p>
        </div>
      </section>

      {/* ── CATEGORIES ───────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--fond)', padding: '5rem 2rem' }}>
        <div className="container">
          {CATEGORIES.map((cat, i) => (
            <div key={cat.slug} style={{
              display: 'grid', gridTemplateColumns: '1fr 2fr',
              gap: '3rem', alignItems: 'start',
              paddingBottom: '4rem', marginBottom: '4rem',
              borderBottom: i < CATEGORIES.length - 1 ? '1px solid var(--ligne)' : 'none',
            }} className="cat-row">
              <div style={{ position: 'sticky', top: '6rem' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={cat.logoSrc} alt="" style={{ height: 64, marginBottom: '1.5rem', display: 'block' }} />
                <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.7rem', letterSpacing: '.35em', color: cat.color, marginBottom: '.5rem' }}>{cat.num} — {cat.type}</p>
                <h2 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: 'clamp(2rem,4vw,2.8rem)', color: 'var(--noir)', letterSpacing: '.04em', lineHeight: 1, marginBottom: '1rem' }}>{cat.name}</h2>
                <p style={{ fontSize: '.85rem', color: 'var(--gris)', lineHeight: 1.7, marginBottom: '1.5rem' }} dangerouslySetInnerHTML={{ __html: cat.tagline }} />
                <Btn href={`/menu/${cat.slug}`} variant="primary" size="sm" style={{ background: cat.color }}>
                  EXPLORER →
                </Btn>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                {cat.services.map(svc => (
                  <Link
                    key={svc.slug}
                    href={`/menu/${cat.slug}/${svc.slug}`}
                    className="svc-preview-card"
                    style={{
                      display: 'block', padding: '1.5rem',
                      background: 'white', borderRadius: 12,
                      border: '1px solid var(--ligne)',
                      transition: 'all .25s ease', textDecoration: 'none',
                    }}
                  >
                    <p style={{ fontSize: '.82rem', color: 'var(--noir)', fontWeight: 600, marginBottom: '.4rem', lineHeight: 1.3 }}>{svc.name}</p>
                    <p style={{ fontSize: '.76rem', color: 'var(--gris)', lineHeight: 1.5, marginBottom: '1rem' }}>{svc.desc}</p>
                    <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.9rem', letterSpacing: '.08em', color: cat.color }}>{svc.price}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── EXTRAS ───────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--creme)', padding: '5rem 2rem' }}>
        <div className="container">
          <SectionHeader
            eyebrow="À LA CARTE"
            heading="LES EXTRAS"
            subtitle="Ajouts disponibles à n'importe quel service."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {EXTRAS.map(e => (
              <div key={e.name} className="card" style={{ padding: '1.4rem' }}>
                <p style={{ fontSize: '.85rem', fontWeight: 600, color: 'var(--noir)', marginBottom: '.5rem' }}>{e.name}</p>
                <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.9rem', letterSpacing: '.08em', color: 'var(--rouge)' }}>{e.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--noir)', padding: '5rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={COUPE_SRC} alt="" style={{ height: 48, marginBottom: '2rem', filter: 'brightness(0) invert(1)', opacity: .5 }} />
          <h2 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: 'clamp(2rem,5vw,3rem)', color: 'var(--creme)', letterSpacing: '.04em', marginBottom: '1rem' }}>
            PRÊT À COMMANDER ?
          </h2>
          <p style={{ fontSize: '.9rem', color: 'var(--gris)', marginBottom: '2.5rem' }}>
            Choisis ton service et réserve un créneau. On s&apos;occupe du reste.
          </p>
          <Btn href="/reserver" variant="creme-on-dark" size="lg">RÉSERVER UN CRÉNEAU</Btn>
        </div>
      </section>

      <style>{`
        .svc-preview-card:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,.08); border-color: var(--noir) !important; }
      `}</style>
    </>
  )
}
