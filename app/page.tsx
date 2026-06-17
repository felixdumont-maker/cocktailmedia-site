'use client'
import Link from 'next/link'
import { FAQS, TEAM, COUPE_SRC } from '@/lib/data'
import Btn from '@/components/ui/Btn'

const SERVICES = [
  {
    num: '01',
    slug: 'apero',
    logo: '/logos/apero.svg',
    name: `L'APÉRO`,
    desc: `Présentations PowerPoint et plans d'affaires — clairs, pros, prêts à livrer.`,
    tag: 'INFOGRAPHIE',
  },
  {
    num: '02',
    slug: 'les-roses',
    logo: '/logos/les-roses.svg',
    name: 'LES ROSÉS',
    desc: `Logo, identité visuelle, supports imprimés et numériques — tout ce qui fait qu'on te reconnaît.`,
    tag: 'GRAPHISME',
  },
  {
    num: '03',
    slug: 'les-blancs',
    logo: '/logos/les-blancs.svg',
    name: 'LES BLANCS',
    desc: `Vidéo corporatif, événements, drone et réels — pour toutes les plateformes.`,
    tag: 'VIDÉO',
  },
  {
    num: '04',
    slug: 'les-rouges',
    logo: '/logos/les-rouges.svg',
    name: 'LES ROUGES',
    desc: `Portraits, produits, événements et immobilier — des photos qui valent mille mots.`,
    tag: 'PHOTO',
  },
  {
    num: '05',
    slug: 'les-digestifs',
    logo: '/logos/les-digestifs.svg',
    name: 'LES DIGESTIFS',
    desc: `Site vitrine, boutique en ligne et refonte — ta présence web, clé en main.`,
    tag: 'CRÉATION WEB',
  },
]

const STEPS = [
  {
    num: '01',
    title: 'TU CHOISIS',
    desc: `Tu parcours le menu et tu sélectionnes ce dont ton entreprise a besoin. Un service, plusieurs, ou un forfait.`,
  },
  {
    num: '02',
    title: 'TU RÉSERVES',
    desc: `Quelques infos de base, un dépôt, et c'est confirmé. On te répond en 48 heures.`,
  },
  {
    num: '03',
    title: 'ON PRODUIT',
    desc: `On fait le travail. Tu reçois ton livrable. Propre, rapide, sans complications.`,
  },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{
        minHeight: '100dvh',
        background: 'var(--fond)',
        display: 'flex',
        alignItems: 'center',
        padding: '9rem 0 5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Ligne décorative rouge verticale */}
        <span style={{
          position: 'absolute', right: '7%', top: '18%', bottom: '18%',
          width: 2, background: 'var(--rouge)', opacity: .12, borderRadius: 2,
          pointerEvents: 'none',
        }} />

        <div className="container">
          {/* Eyebrow */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '.75rem',
            marginBottom: '2rem',
            opacity: 0, animation: 'fadeUp .5s var(--ease-out) 3.7s forwards',
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={COUPE_SRC} alt="" style={{ height: 28, opacity: .7 }} />
            <p style={{
              fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif',
              fontSize: '.72rem', letterSpacing: '.45em', color: 'var(--rouge)',
            }}>
              PRODUCTION CRÉATIVE · MAURICIE
            </p>
          </div>

          {/* Animated words */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.1rem', marginBottom: '2.8rem' }}>
            {[
              { word: 'COMPLIQUÉ',    cls: 'w1', scls: 's1' },
              { word: 'ORDINAIRE',    cls: 'w2', scls: 's2' },
              { word: 'INACCESSIBLE', cls: 'w3', scls: 's3' },
            ].map(({ word, cls, scls }) => (
              <div key={word} className="hero-word-wrap">
                <span className={`hero-word ${cls}`}>{word}</span>
                <span className={`hero-strike ${scls}`} />
              </div>
            ))}
          </div>

          {/* Tagline */}
          <p style={{
            fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif',
            fontSize: 'clamp(1.4rem, 3.5vw, 2.4rem)',
            letterSpacing: '.1em',
            color: 'var(--rouge)',
            marginBottom: '.7rem',
            opacity: 0, animation: 'fadeUp .5s var(--ease-out) 3.75s forwards',
          }}>
            TU CHOISIS. TU PAIES. ON PRODUIT.
          </p>

          {/* Sub */}
          <p style={{
            fontSize: 'clamp(.9rem, 1.5vw, 1.05rem)',
            color: 'var(--gris)',
            maxWidth: 480, lineHeight: 1.75,
            marginBottom: '2.4rem',
            opacity: 0, animation: 'fadeUp .5s var(--ease-out) 3.95s forwards',
          }}>
            Production créative à la carte pour les PME de la Mauricie. Photo, vidéo, graphisme et web — sans réunion, sans complication, sans surprise sur la facture.
          </p>

          {/* CTAs */}
          <div style={{
            display: 'flex', gap: '1rem', flexWrap: 'wrap',
            opacity: 0, animation: 'fadeUp .5s var(--ease-out) 4.15s forwards',
          }}>
            <Btn href="/menu" variant="primary" size="lg">
              VOIR LE MENU
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={COUPE_SRC} alt="" style={{ height: 18, filter: 'brightness(0) invert(1)' }} />
            </Btn>
            <Btn href="/reserver" variant="secondary" size="lg">RÉSERVER UN CRÉNEAU</Btn>
          </div>
        </div>

        {/* Stat bar */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          borderTop: '1px solid var(--ligne)',
          display: 'flex', overflowX: 'auto',
          opacity: 0, animation: 'fadeUp .5s var(--ease-out) 4.4s forwards',
        }} className="stat-bar">
          {[
            { num: '5',    label: 'CATÉGORIES' },
            { num: '20+',  label: 'SERVICES' },
            { num: '100%', label: 'PRIX AFFICHÉS' },
            { num: '48H',  label: 'RÉPONSE' },
          ].map((stat, i) => (
            <div key={stat.label} style={{
              flex: 1, minWidth: 130,
              padding: '1.4rem 2rem',
              borderRight: i < 3 ? '1px solid var(--ligne)' : 'none',
            }}>
              <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--rouge)', lineHeight: 1, marginBottom: '.2rem' }}>{stat.num}</p>
              <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.58rem', letterSpacing: '.28em', color: 'var(--gris)' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── LA CARTE ─────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--surface)', padding: '7rem 0', overflow: 'hidden', position: 'relative' }}>
        {/* Watermark décoratif */}
        <span aria-hidden style={{
          position: 'absolute', right: '-2%', top: '50%', transform: 'translateY(-50%)',
          fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif',
          fontSize: 'clamp(8rem, 22vw, 18rem)',
          color: 'white', opacity: .025,
          letterSpacing: '.02em', userSelect: 'none', lineHeight: 1, pointerEvents: 'none',
        }}>MENU</span>

        <div className="container">
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <p className="eyebrow">NOTRE OFFRE</p>
              <h2 className="heading-display-lg">LA CARTE</h2>
            </div>
            <Btn href="/menu" variant="ghost-dark" size="sm">TOUT VOIR →</Btn>
          </div>

          {/* Liste services */}
          <div>
            {SERVICES.map(svc => (
              <Link key={svc.slug} href={`/menu/${svc.slug}`} className="carte-row">
                <span style={{
                  fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif',
                  fontSize: '.9rem', letterSpacing: '.1em', color: 'var(--gris)',
                }}>{svc.num}</span>

                <span style={{ width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={svc.logo} alt="" width={40} height={40} className="carte-logo-img" style={{ objectFit: 'contain' }} />
                </span>

                <span style={{ display: 'flex', flexDirection: 'column', gap: '.25rem' }}>
                  <span style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.6rem', letterSpacing: '.22em', color: 'var(--rouge)' }}>{svc.tag}</span>
                  <span className="carte-name">{svc.name}</span>
                </span>

                <span className="carte-desc-col" style={{ fontSize: '.82rem', color: 'var(--gris)', lineHeight: 1.6, maxWidth: 300 }}>{svc.desc}</span>

                <span className="carte-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMENT ÇA MARCHE ─────────────────────────────────────────────── */}
      <section style={{ background: 'var(--fond)', padding: '7rem 0', overflow: 'hidden', position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="how-grid">
            <div>
              <p className="eyebrow">SIMPLE COMME BONJOUR</p>
              <h2 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--creme)', letterSpacing: '.03em', lineHeight: 1, marginBottom: '1.5rem' }}>
                TROIS ÉTAPES.<br /><span style={{ color: 'var(--rouge)' }}>C&apos;EST TOUT.</span>
              </h2>
              <p style={{ fontSize: '.95rem', color: 'var(--gris)', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 420 }}>
                Pas de réunion de 3 heures. Pas de soumission mystère. Tu parles à la personne qui produit ton projet.
              </p>
              <Btn href="/reserver" variant="primary" size="lg">RÉSERVER UN CRÉNEAU</Btn>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {STEPS.map((step, i) => (
                <div key={step.num} style={{
                  display: 'flex', gap: '1.5rem', alignItems: 'flex-start',
                  padding: '1.8rem 0',
                  borderBottom: i < STEPS.length - 1 ? '1px solid var(--ligne)' : 'none',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif',
                    fontSize: '3rem', color: 'var(--rouge)', lineHeight: 1,
                    opacity: .2, flexShrink: 0, width: '3rem', textAlign: 'right',
                  }}>{step.num}</span>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '1.4rem', letterSpacing: '.06em', color: 'var(--creme)', marginBottom: '.5rem' }}>{step.title}</h3>
                    <p style={{ fontSize: '.85rem', color: 'var(--gris)', lineHeight: 1.7 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ÉQUIPE ───────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--surface)', padding: '7rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="team-home-grid">
            <div>
              <p className="eyebrow">DERRIÈRE LE COMPTOIR</p>
              <h2 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--creme)', letterSpacing: '.03em', lineHeight: 1, marginBottom: '1.5rem' }}>
                TU PARLES À<br /><span style={{ color: 'var(--rouge)' }}>CEUX QUI FONT.</span>
              </h2>
              <p style={{ fontSize: '.95rem', color: 'var(--gris)', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 420 }}>
                Pas d&apos;intermédiaire, pas de gestionnaire de compte. Tu parles directement aux créatifs qui produisent ton projet.
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
      <section style={{ background: 'var(--fond)', padding: '7rem 0' }}>
        <div className="container faq-home-grid">
          <div style={{ position: 'sticky', top: '7rem' }}>
            <p className="eyebrow">ON RÉPOND</p>
            <h2 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: 'clamp(2.5rem,5vw,3.5rem)', color: 'var(--creme)', letterSpacing: '.03em', lineHeight: 1, marginBottom: '1.5rem' }}>
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
      <section style={{ background: 'var(--rouge)', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
        <span aria-hidden style={{
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
        @media (max-width: 768px) {
          .how-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .team-home-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </>
  )
}
