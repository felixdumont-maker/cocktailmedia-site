'use client'
import Link from 'next/link'
import { CATEGORIES, TEAM, COUPE_SRC } from '@/lib/data'

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center', textAlign: 'center',
        background: 'var(--creme)', position: 'relative', overflow: 'hidden',
        padding: '8rem 2rem 4rem',
      }}>
        {/* Animated background words */}
        {['COMPLIQUÉ', 'ORDINAIRE', 'INACCESSIBLE'].map((word, i) => (
          <span key={word} style={{
            position: 'absolute',
            fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif',
            fontSize: 'clamp(5rem, 15vw, 12rem)',
            color: 'var(--noir)',
            opacity: 0,
            letterSpacing: '.04em',
            userSelect: 'none',
            pointerEvents: 'none',
            top: i === 0 ? '10%' : i === 1 ? '42%' : '68%',
            left: i === 0 ? '-2%' : i === 1 ? '15%' : '-5%',
            animation: `bgWordIn 1.2s ease forwards`,
            animationDelay: `${0.2 + i * 0.15}s`,
            textDecoration: 'line-through',
            textDecorationColor: 'var(--rouge)',
          }}>{word}</span>
        ))}

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 800 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={COUPE_SRC} alt="" style={{ height: 56, marginBottom: '2rem', animation: 'fadeUp .8s ease both', animationDelay: '.1s' }} />

          <h1 style={{
            fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif',
            fontSize: 'clamp(3rem, 9vw, 7rem)',
            lineHeight: 1,
            letterSpacing: '.04em',
            color: 'var(--noir)',
            marginBottom: '1.5rem',
            animation: 'punchIn 1s ease both',
            animationDelay: '.3s',
          }}>
            TU CHOISIS.<br />
            TU PAIES.<br />
            <span style={{ color: 'var(--rouge)' }}>ON PRODUIT.</span>
          </h1>

          <p style={{
            fontSize: 'clamp(.95rem, 2vw, 1.15rem)',
            color: 'var(--gris)',
            maxWidth: 520,
            margin: '0 auto 2.5rem',
            lineHeight: 1.7,
            animation: 'fadeUp .8s ease both',
            animationDelay: '.6s',
          }}>
            Production créative à la carte en Mauricie. Photo, vidéo, graphisme et web — sans réunion, sans complication. Tu choisis ce dont tu as besoin, tu paies ce prix-là, on livre.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', animation: 'fadeUp .8s ease both', animationDelay: '.8s' }}>
            <Link href="/menu" style={{
              fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif',
              fontSize: '1.05rem', letterSpacing: '.14em',
              color: 'white', background: 'var(--rouge)',
              padding: '.85rem 2.8rem', borderRadius: 100,
              display: 'inline-flex', alignItems: 'center', gap: '.5rem',
              transition: 'all .3s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--noir)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--rouge)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              VOIR LE MENU
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={COUPE_SRC} alt="" style={{ height: 18, filter: 'brightness(0) invert(1)' }} />
            </Link>
            <Link href="/apropos" style={{
              fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif',
              fontSize: '1.05rem', letterSpacing: '.14em',
              color: 'var(--noir)', border: '2px solid var(--noir)',
              padding: '.85rem 2.8rem', borderRadius: 100,
              transition: 'all .3s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--noir)'; e.currentTarget.style.color = 'white' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--noir)' }}
            >
              QUI SOMMES-NOUS
            </Link>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', animation: 'bounce 1.5s ease infinite', zIndex: 2 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gris)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </section>

      {/* ── MENU ABRÉGÉ ──────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--noir)', padding: '6rem 2rem', overflow: 'hidden', position: 'relative' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.8rem', letterSpacing: '.4em', color: 'var(--rouge)', marginBottom: '.8rem' }}>NOTRE OFFRE</p>
            <h2 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: 'clamp(2rem,5vw,3.5rem)', color: 'var(--creme)', letterSpacing: '.03em' }}>
              LE MENU COCKTAIL MÉDIA
            </h2>
            <p style={{ fontSize: '.9rem', color: 'var(--gris)', marginTop: '1rem', maxWidth: 480, margin: '1rem auto 0' }}>Cinq catégories. Des services clairs. Des prix affichés.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '1.5rem' }} className="menu-grid">
            {CATEGORIES.map(cat => (
              <Link key={cat.slug} href={`/menu/${cat.slug}`} style={{
                display: 'block', padding: '2rem 1.5rem',
                border: '1px solid rgba(255,255,255,.08)',
                borderRadius: 16, textDecoration: 'none',
                transition: 'all .3s ease', position: 'relative', overflow: 'hidden',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = cat.color
                  e.currentTarget.style.background = `${cat.colorPale}`
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)'
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.65rem', letterSpacing: '.35em', color: cat.color, marginBottom: '.8rem' }}>{cat.num}</p>
                <h3 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '1.5rem', letterSpacing: '.06em', color: 'var(--creme)', marginBottom: '.5rem', lineHeight: 1.1 }}>{cat.name}</h3>
                <p style={{ fontSize: '.75rem', color: 'var(--gris)', lineHeight: 1.5, marginBottom: '1.2rem' }}>{cat.tagline}</p>
                <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.75rem', letterSpacing: '.15em', color: cat.color }}>À PARTIR DE {cat.startingAt} →</p>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/menu" style={{
              fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif',
              fontSize: '.95rem', letterSpacing: '.15em',
              color: 'var(--creme)', border: '1px solid rgba(255,255,255,.2)',
              padding: '.8rem 2.4rem', borderRadius: 100,
              display: 'inline-block', transition: 'all .3s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--rouge)'; e.currentTarget.style.color = 'var(--rouge)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.2)'; e.currentTarget.style.color = 'var(--creme)' }}
            >
              TOUT VOIR
            </Link>
          </div>
        </div>
      </section>

      {/* ── COMMENT ÇA MARCHE ─────────────────────────────────────────────── */}
      <section style={{ background: 'var(--fond)', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.8rem', letterSpacing: '.4em', color: 'var(--rouge)', marginBottom: '.8rem' }}>SIMPLE COMME BONJOUR</p>
            <h2 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: 'clamp(2rem,5vw,3.5rem)', color: 'var(--noir)', letterSpacing: '.03em' }}>
              COMMENT ÇA MARCHE ?
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="steps-grid">
            {[
              { num: '01', title: 'TU CHOISIS', desc: 'Tu parcours le menu et tu sélectionnes ce dont ton entreprise a besoin. Un service, plusieurs, ou un forfait complet.' },
              { num: '02', title: 'TU RÉSERVES', desc: 'Tu prends un créneau directement dans notre calendrier. Pas de formulaire à 12 champs, pas d\'attente.' },
              { num: '03', title: 'ON PRODUIT', desc: 'On s\'occupe du reste. Tu reçois tes livrables dans les délais convenus. Simple, propre, efficace.' },
            ].map(step => (
              <div key={step.num} style={{ padding: '2.5rem', background: 'white', borderRadius: 16, border: '1px solid var(--ligne)', position: 'relative' }}>
                <span style={{
                  fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif',
                  fontSize: '4rem', color: 'var(--rouge)', opacity: .15,
                  position: 'absolute', top: '1rem', right: '1.5rem', lineHeight: 1,
                }}>{step.num}</span>
                <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.7rem', letterSpacing: '.35em', color: 'var(--rouge)', marginBottom: '.8rem' }}>ÉTAPE {step.num}</p>
                <h3 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '1.6rem', letterSpacing: '.06em', color: 'var(--noir)', marginBottom: '1rem' }}>{step.title}</h3>
                <p style={{ fontSize: '.88rem', color: 'var(--gris)', lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link href="/reserver" style={{
              fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif',
              fontSize: '1.05rem', letterSpacing: '.14em',
              color: 'white', background: 'var(--rouge)',
              padding: '.85rem 2.8rem', borderRadius: 100,
              display: 'inline-block', transition: 'all .3s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--noir)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--rouge)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              RÉSERVER UN CRÉNEAU
            </Link>
          </div>
        </div>
      </section>

      {/* ── ÉQUIPE ───────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--creme)', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.8rem', letterSpacing: '.4em', color: 'var(--rouge)', marginBottom: '.8rem' }}>DERRIÈRE LE COMPTOIR</p>
            <h2 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: 'clamp(2rem,5vw,3.5rem)', color: 'var(--noir)', letterSpacing: '.03em' }}>
              L&apos;ÉQUIPE
            </h2>
            <p style={{ fontSize: '.9rem', color: 'var(--gris)', marginTop: '1rem', maxWidth: 480, margin: '1rem auto 0' }}>Deux créatifs. Une vision. Des résultats concrets.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', maxWidth: 700, margin: '0 auto' }} className="team-grid">
            {TEAM.map(member => (
              <div key={member.name} style={{ textAlign: 'center' }}>
                <div style={{ width: 140, height: 140, borderRadius: '50%', overflow: 'hidden', margin: '0 auto 1.5rem', border: '3px solid var(--rouge)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={member.photo} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '1.4rem', letterSpacing: '.06em', color: 'var(--noir)', marginBottom: '.3rem' }}>{member.name}</h3>
                <p style={{ fontSize: '.78rem', letterSpacing: '.2em', color: 'var(--rouge)', fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', marginBottom: '.8rem' }}>{member.role}</p>
                <p style={{ fontSize: '.82rem', color: 'var(--gris)', lineHeight: 1.7 }}>{member.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link href="/apropos" style={{
              fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif',
              fontSize: '.95rem', letterSpacing: '.15em',
              color: 'var(--noir)', border: '2px solid var(--noir)',
              padding: '.8rem 2.4rem', borderRadius: 100,
              display: 'inline-block', transition: 'all .3s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--noir)'; e.currentTarget.style.color = 'white' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--noir)' }}
            >
              EN SAVOIR PLUS
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--rouge)', padding: '5rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: 'clamp(2rem,5vw,3.5rem)', color: 'white', letterSpacing: '.04em', marginBottom: '1rem' }}>
            PRÊT À COMMANDER ?
          </h2>
          <p style={{ fontSize: '.95rem', color: 'rgba(255,255,255,.8)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            Consulte le menu, choisis tes services et réserve ton créneau. C&apos;est tout.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/menu" style={{
              fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif',
              fontSize: '1.05rem', letterSpacing: '.14em',
              color: 'var(--rouge)', background: 'white',
              padding: '.85rem 2.8rem', borderRadius: 100,
              transition: 'all .3s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--noir)'; e.currentTarget.style.color = 'white' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = 'var(--rouge)' }}
            >
              VOIR LE MENU
            </Link>
            <Link href="/reserver" style={{
              fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif',
              fontSize: '1.05rem', letterSpacing: '.14em',
              color: 'white', border: '2px solid white',
              padding: '.85rem 2.8rem', borderRadius: 100,
              transition: 'all .3s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = 'var(--rouge)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'white' }}
            >
              RÉSERVER
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: 1fr !important; }
          .team-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .menu-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .menu-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
