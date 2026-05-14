'use client'
import Link from 'next/link'
import { CATEGORIES } from '@/lib/data'
import Btn from '@/components/ui/Btn'
import SectionHeader from '@/components/ui/SectionHeader'

export default function CategoryPage({ slug }: { slug: string }) {
  const cat = CATEGORIES.find(c => c.slug === slug)!

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{
        background: 'var(--noir)', minHeight: '55vh',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '10rem 2rem 4rem', position: 'relative', overflow: 'hidden',
      }}>
        <span style={{
          position: 'absolute', left: '-2%', top: '5%',
          fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif',
          fontSize: 'clamp(5rem,16vw,13rem)', color: cat.color, opacity: .06,
          letterSpacing: '.04em', userSelect: 'none', lineHeight: 1,
        }}>{cat.bgWord1}</span>
        <span style={{
          position: 'absolute', right: '-2%', bottom: '8%',
          fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif',
          fontSize: 'clamp(5rem,16vw,13rem)', color: cat.color, opacity: .06,
          letterSpacing: '.04em', userSelect: 'none', lineHeight: 1,
        }}>{cat.bgWord2}</span>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={cat.logoSrc} alt="" style={{ height: 56, marginBottom: '1.5rem', display: 'block', filter: 'brightness(0) invert(1)', opacity: .7 }} />
          <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.75rem', letterSpacing: '.4em', color: cat.color, marginBottom: '.8rem' }}>
            {cat.num} — {cat.type}
          </p>
          <h1 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: 'clamp(3rem,8vw,5.5rem)', color: 'var(--creme)', letterSpacing: '.04em', lineHeight: 1, marginBottom: '1.2rem' }}>
            {cat.name}
          </h1>
          <p style={{ fontSize: '.95rem', color: 'var(--gris)', maxWidth: 540, lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: cat.tagline }} />
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--fond)', padding: '5rem 2rem' }}>
        <div className="container">
          <SectionHeader
            eyebrow="NOS SERVICES"
            heading="CE QU'ON OFFRE"
            align="left"
            size="md"
            eyebrowColor={cat.color}
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {cat.services.map(svc => (
              <Link key={svc.slug} href={`/menu/${cat.slug}/${svc.slug}`} className="svc-card" style={{
                display: 'flex', flexDirection: 'column',
                padding: '2rem', background: 'white', borderRadius: 16,
                border: '1px solid var(--ligne)',
                transition: 'all .3s ease', textDecoration: 'none',
                ['--cat-color' as string]: cat.color,
                ['--cat-pale' as string]: cat.colorPale,
              }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--noir)', marginBottom: '.6rem', lineHeight: 1.3 }}>{svc.name}</h3>
                  <p style={{ fontSize: '.82rem', color: 'var(--gris)', lineHeight: 1.6, marginBottom: '1.5rem' }}>{svc.desc}</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '1.1rem', letterSpacing: '.08em', color: cat.color }}>{svc.price}</span>
                  <span style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.7rem', letterSpacing: '.2em', color: 'var(--gris)' }}>DÉTAILS →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CE QUI EST INCLUS ─────────────────────────────────────────────── */}
      <section style={{ background: 'var(--noir)', padding: '5rem 2rem' }}>
        <div className="container">
          <SectionHeader
            eyebrow="TOUJOURS COMPRIS"
            heading="CE QUI EST INCLUS"
            theme="dark"
            size="md"
            eyebrowColor={cat.color}
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.2rem' }}>
            {cat.inclus.map(item => (
              <div key={item.title} className="card-dark" style={{ padding: '1.5rem' }}>
                <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.75rem', letterSpacing: '.25em', color: cat.color, marginBottom: '.6rem' }}>✓ {item.title}</p>
                <p style={{ fontSize: '.82rem', color: 'var(--gris)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      {cat.faqs.length > 0 && (
        <section style={{ background: 'var(--creme)', padding: '5rem 2rem' }}>
          <div className="container-sm">
            <SectionHeader
              eyebrow="QUESTIONS FRÉQUENTES"
              heading="ON RÉPOND"
              size="md"
              eyebrowColor={cat.color}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {cat.faqs.map(faq => (
                <div key={faq.q} className="faq-item" style={{ cursor: 'default' }}>
                  <p style={{ fontWeight: 700, color: 'var(--noir)', fontSize: '.9rem', marginBottom: '.6rem' }}>{faq.q}</p>
                  <p style={{ fontSize: '.85rem', color: 'var(--gris)', lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section style={{ background: cat.color, padding: '5rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: 'clamp(2rem,5vw,3rem)', color: 'white', letterSpacing: '.04em', marginBottom: '1rem' }}>
            PRÊT À COMMANDER ?
          </h2>
          <p style={{ fontSize: '.9rem', color: 'rgba(255,255,255,.8)', marginBottom: '2.5rem' }}>
            Choisis ton service et réserve un créneau. C&apos;est tout.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Btn href="/reserver" variant="white-on-rouge" size="lg">RÉSERVER</Btn>
            <Btn href="/menu" variant="outline-white" size="lg">← RETOUR AU MENU</Btn>
          </div>
        </div>
      </section>

      <style>{`
        .svc-card:hover {
          border-color: var(--cat-color) !important;
          transform: translateY(-4px);
          box-shadow: 0 12px 32px var(--cat-pale);
        }
      `}</style>
    </>
  )
}
