'use client'
import Link from 'next/link'
import { CATEGORIES, FAQS, TEAM, COUPE_SRC } from '@/lib/data'
import Btn from '@/components/ui/Btn'
import SectionHeader from '@/components/ui/SectionHeader'

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateRows: '1fr auto',
        background: 'var(--creme)',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '5rem',
      }}>
        {/* Bg words — plus visibles, plus dramatiques */}
        {['COMPLIQUÉ', 'ORDINAIRE', 'INACCESSIBLE'].map((word, i) => (
          <span key={word} style={{
            position: 'absolute',
            fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif',
            fontSize: 'clamp(6rem, 18vw, 16rem)',
            color: 'var(--noir)',
            opacity: 0,
            letterSpacing: '.03em',
            userSelect: 'none',
            pointerEvents: 'none',
            top: i === 0 ? '8%' : i === 1 ? '38%' : '65%',
            left: i === 0 ? '-1%' : i === 1 ? '12%' : '-3%',
            animation: `bgWordIn 1s ease forwards`,
            animationDelay: `${0.1 + i * 0.12}s`,
            textDecoration: 'line-through',
            textDecorationColor: 'var(--rouge)',
            textDecorationThickness: '6px',
            lineHeight: 1,
          }}>{word}</span>
        ))}

        {/* Ligne rouge verticale décorative */}
        <span style={{
          position: 'absolute', right: '8%', top: '15%', bottom: '15%',
          width: 3, background: 'var(--rouge)', opacity: .15,
          borderRadius: 2,
        }} />

        {/* Contenu principal — left aligned pour plus de punch */}
        <div style={{
          position: 'relative', zIndex: 2,
          maxWidth: 1100, margin: '0 auto', width: '100%',
          padding: '0 2rem',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center',
          paddingTop: 'clamp(4rem, 12vh, 8rem)',
          paddingBottom: '2rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem', animation: 'fadeUp .6s ease both', animationDelay: '.1s' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={COUPE_SRC} alt="" style={{ height: 36, marginTop: '.4rem' }} />
            <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.8rem', letterSpacing: '.4em', color: 'var(--rouge)' }}>
              PRODUCTION CRÉATIVE · MAURICIE
            </p>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif',
            fontSize: 'clamp(4rem, 11vw, 9rem)',
            lineHeight: .95,
            letterSpacing: '.03em',
            color: 'var(--noir)',
            marginBottom: '2rem',
            animation: 'punchIn 1s ease both',
            animationDelay: '.2s',
            maxWidth: 900,
          }}>
            TU CHOISIS.<br />
            TU PAIES.<br />
            <span style={{ color: 'var(--rouge)' }}>ON PRODUIT.</span>
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'var(--gris)',
            maxWidth: 540,
            lineHeight: 1.7,
            marginBottom: '2.5rem',
            animation: 'fadeUp .8s ease both',
            animationDelay: '.5s',
          }}>
            Production créative à la carte pour les PME de la Mauricie. Photo, vidéo, graphisme et web — sans réunion, sans complication, sans surprise sur la facture.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', animation: 'fadeUp .8s ease both', animationDelay: '.7s' }}>
            <Btn href="/menu" variant="primary" size="lg">
              VOIR LE MENU
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={COUPE_SRC} alt="" style={{ height: 18, filter: 'brightness(0) invert(1)' }} />
            </Btn>
            <Btn href="/reserver" variant="secondary" size="lg">RÉSERVER UN CRÉNEAU</Btn>
          </div>
        </div>

        {/* Stat bar — donne de la crédibilité */}
        <div style={{
          position: 'relative', zIndex: 2,
          borderTop: '1px solid rgba(43,43,43,.1)',
          display: 'flex', overflowX: 'auto',
          animation: 'fadeUp .6s ease both', animationDelay: '1s',
        }}>
          {[
            { num: '5', label: 'CATÉGORIES DE SERVICE' },
            { num: '20+', label: 'SERVICES DISPONIBLES' },
            { num: '100%', label: 'PRIX AFFICHÉS' },
            { num: '48H', label: 'TEMPS DE RÉPONSE' },
          ].map((stat, i) => (
            <div key={stat.label} style={{
              flex: 1, minWidth: 140,
              padding: '1.5rem 2rem',
              borderRight: i < 3 ? '1px solid rgba(43,43,43,.1)' : 'none',
            }}>
              <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'var(--rouge)', lineHeight: 1, marginBottom: '.2rem' }}>{stat.num}</p>
              <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.6rem', letterSpacing: '.3em', color: 'var(--gris)' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MENU ─────────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--noir)', padding: '7rem 2rem', overflow: 'hidden', position: 'relative' }}>
        {/* Grosse inscription décorative */}
        <span style={{
          position: 'absolute', right: '-3%', top: '50%', transform: 'translateY(-50%)',
          fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif',
          fontSize: 'clamp(8rem, 22vw, 18rem)',
          color: 'white', opacity: .025,
          letterSpacing: '.02em', userSelect: 'none', lineHeight: 1, pointerEvents: 'none',
        }}>MENU</span>

        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <p className="eyebrow">NOTRE OFFRE</p>
              <h2 className="heading-display-lg" style={{ color: 'var(--creme)' }}>LE MENU</h2>
            </div>
            <Btn href="/menu" variant="ghost-dark" size="sm">TOUT VOIR →</Btn>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }} className="menu-grid">
            {CATEGORIES.map(cat => (
              <Link key={cat.slug} href={`/menu/${cat.slug}`} className="menu-cat-card" style={{
                display: 'flex', flexDirection: 'column',
                padding: '2rem 1.5rem 1.5rem',
                border: '1px solid rgba(255,255,255,.07)',
                borderRadius: 12, textDecoration: 'none',
                transition: 'all .3s ease',
                position: 'relative', overflow: 'hidden',
                minHeight: 220,
                ['--cat-color' as string]: cat.color,
                ['--cat-pale' as string]: cat.colorPale,
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={cat.logoLocal} alt="" style={{ height: 48, marginBottom: 'auto', display: 'block', opacity: .5 }} />
                <div style={{ marginTop: '1.5rem' }}>
                  <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.6rem', letterSpacing: '.35em', color: cat.color, marginBottom: '.4rem' }}>{cat.num} — {cat.type}</p>
                  <h3 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '1.4rem', letterSpacing: '.05em', color: 'var(--creme)', marginBottom: '.8rem', lineHeight: 1.05 }}>{cat.name}</h3>
                  <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.7rem', letterSpacing: '.15em', color: cat.color }}>{cat.startingAt} →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMENT ÇA MARCHE ─────────────────────────────────────────────── */}
      <section style={{ background: 'var(--fond)', padding: '7rem 2rem', overflow: 'hidden', position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="how-grid">
            {/* Left: title */}
            <div>
              <p className="eyebrow">SIMPLE COMME BONJOUR</p>
              <h2 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--noir)', letterSpacing: '.03em', lineHeight: 1, marginBottom: '1.5rem' }}>
                TROIS ÉTAPES.<br /><span style={{ color: 'var(--rouge)' }}>C'EST TOUT.</span>
              </h2>
              <p style={{ fontSize: '.95rem', color: 'var(--gris)', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 420 }}>
                Pas de réunion de 3 heures. Pas de soumission mystère. Tu parles à la personne qui produit ton projet.
              </p>
              <Btn href="/reserver" variant="primary" size="lg">RÉSERVER UN CRÉNEAU</Btn>
            </div>

            {/* Right: steps */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {[
                { num: '01', title: 'TU CHOISIS', desc: 'Tu parcours le menu et tu sélectionnes ce dont ton entreprise a besoin. Un service, plusieurs, ou un forfait complet.' },
                { num: '02', title: 'TU RÉSERVES', desc: "Tu prends un créneau directement dans notre calendrier. Pas de formulaire à 12 champs, pas d'attente." },
                { num: '03', title: 'ON PRODUIT', desc: "On s'occupe du reste. Tu reçois tes livrables dans les délais convenus. Simple, propre, efficace." },
              ].map((step, i) => (
                <div key={step.num} style={{
                  display: 'flex', gap: '1.5rem', alignItems: 'flex-start',
                  padding: '1.8rem 0',
                  borderBottom: i < 2 ? '1px solid var(--ligne)' : 'none',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif',
                    fontSize: '3rem', color: 'var(--rouge)', lineHeight: 1,
                    opacity: .2, flexShrink: 0, width: '3rem', textAlign: 'right',
                  }}>{step.num}</span>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '1.4rem', letterSpacing: '.06em', color: 'var(--noir)', marginBottom: '.5rem' }}>{step.title}</h3>
                    <p style={{ fontSize: '.85rem', color: 'var(--gris)', lineHeight: 1.7 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ÉQUIPE ───────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--noir)', padding: '7rem 2rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="team-home-grid">
            <div>
              <p className="eyebrow">DERRIÈRE LE COMPTOIR</p>
              <h2 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--creme)', letterSpacing: '.03em', lineHeight: 1, marginBottom: '1.5rem' }}>
                TU PARLES À<br /><span style={{ color: 'var(--rouge)' }}>CEUX QUI FONT.</span>
              </h2>
              <p style={{ fontSize: '.95rem', color: 'var(--gris)', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 420 }}>
                Pas d'intermédiaire, pas de gestionnaire de compte. Tu parles directement aux créatifs qui produisent ton projet.
              </p>
              <Btn href="/apropos" variant="ghost-dark" size="md">EN SAVOIR PLUS →</Btn>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {TEAM.map(member => (
                <div key={member.name} style={{ textAlign: 'center' }}>
                  <div style={{ width: '100%', aspectRatio: '1', borderRadius: 16, overflow: 'hidden', marginBottom: '1.2rem', border: '2px solid rgba(255,255,255,.08)' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={member.photo} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '1.1rem', letterSpacing: '.06em', color: 'var(--creme)', marginBottom: '.2rem' }}>{member.name}</h3>
                  <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.6rem', letterSpacing: '.25em', color: 'var(--rouge)' }}>{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--fond)', padding: '7rem 2rem' }}>
        <div className="container faq-home-grid">
          <div style={{ position: 'sticky', top: '7rem' }}>
            <p className="eyebrow">ON RÉPOND</p>
            <h2 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: 'clamp(2.5rem,5vw,3.5rem)', color: 'var(--noir)', letterSpacing: '.03em', lineHeight: 1, marginBottom: '1.5rem' }}>
              TES QUESTIONS,<br /><span style={{ color: 'var(--rouge)' }}>NOS RÉPONSES.</span>
            </h2>
            <p style={{ fontSize: '.88rem', color: 'var(--gris)', lineHeight: 1.7, marginBottom: '2rem' }}>
              Tout ce que tu veux savoir avant de commander.
            </p>
            <Btn href="/faq" variant="secondary" size="sm">VOIR TOUTES LES FAQ →</Btn>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '.8rem' }}>
            {FAQS.slice(0, 5).map(faq => (
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

      {/* ── CTA FINAL ────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--rouge)', padding: '6rem 2rem', position: 'relative', overflow: 'hidden' }}>
        {/* Grosse typo décorative */}
        <span style={{
          position: 'absolute', right: '-2%', top: '50%', transform: 'translateY(-50%)',
          fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif',
          fontSize: 'clamp(6rem, 20vw, 16rem)',
          color: 'white', opacity: .06,
          letterSpacing: '.02em', userSelect: 'none', lineHeight: 1, pointerEvents: 'none',
        }}>GO</span>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: 700 }}>
            <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.8rem', letterSpacing: '.4em', color: 'rgba(255,255,255,.6)', marginBottom: '1rem' }}>
              PRÊT À COMMANDER ?
            </p>
            <h2 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: 'clamp(3rem, 7vw, 6rem)', color: 'white', letterSpacing: '.03em', lineHeight: .95, marginBottom: '1.5rem' }}>
              ARRÊTE DE<br />REMETTRE ÇA<br />À DEMAIN.
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,.75)', marginBottom: '2.5rem', lineHeight: 1.7, maxWidth: 480 }}>
              Consulte le menu, choisis tes services et réserve ton créneau. C&apos;est tout.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Btn href="/menu" variant="white-on-rouge" size="lg">VOIR LE MENU</Btn>
              <Btn href="/reserver" variant="outline-white" size="lg">RÉSERVER</Btn>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .menu-cat-card:hover {
          border-color: var(--cat-color) !important;
          background: rgba(255,255,255,.04) !important;
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,0,0,.3);
        }
        .menu-cat-card:hover img { opacity: .9 !important; }
        @media (max-width: 768px) {
          .how-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .team-home-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .menu-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .menu-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
