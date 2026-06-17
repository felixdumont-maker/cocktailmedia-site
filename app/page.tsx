import HeroCoupe from '@/components/HeroCoupe'
import CategoriesSection from '@/components/CategoriesSection'
import Btn from '@/components/ui/Btn'
import { FAQS, TEAM } from '@/lib/data'

const STEPS = [
  {
    num: '01',
    title: 'TU CHOISIS',
    desc: "Tu parcours le menu et tu sélectionnes ce dont ton entreprise a besoin. Un service, plusieurs, ou un forfait. Pas de réunion de découverte.",
  },
  {
    num: '02',
    title: 'TU PAIES',
    desc: "Prix clairs, affichés d'avance. Tu sais exactement ce que tu paieras avant de confirmer quoi que ce soit.",
  },
  {
    num: '03',
    title: 'ON PRODUIT',
    desc: "On livre dans les délais. Contenu prêt à publier, fichiers organisés, zéro complication.",
  },
]

export default function Home() {
  return (
    <>
      <HeroCoupe />
      <CategoriesSection />

      {/* ── COMMENT ÇA MARCHE ──────────────────────────────────────── */}
      <section style={{ background: 'var(--fond)', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ marginBottom: '4rem' }}>
            <h2
              className="font-bebas"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--creme)', letterSpacing: '.03em', lineHeight: 1 }}
            >
              COMMENT<br />
              <span style={{ color: 'var(--rouge)' }}>ÇA MARCHE</span>
            </h2>
          </div>

          {STEPS.map((step) => (
            <div key={step.num} className="process-step-new">
              <div className="process-bg-num" aria-hidden="true">{step.num}</div>
              <div className="process-step-content">
                <h3 className="process-step-title-new">{step.title}</h3>
                <p className="process-step-desc-new">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ÉQUIPE ─────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--surface)', padding: '7rem 0' }}>
        <div className="container">
          <div style={{ marginBottom: '4rem' }}>
            <h2
              className="font-bebas"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--creme)', letterSpacing: '.03em', lineHeight: 1 }}
            >
              TU PARLES À<br />
              <span style={{ color: 'var(--rouge)' }}>CEUX QUI FONT.</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }} className="team-home-grid">
            {TEAM.map(member => (
              <div key={member.name} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ width: 96, height: 96, borderRadius: 12, overflow: 'hidden', flexShrink: 0, border: '2px solid rgba(255,255,255,.08)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={member.photo} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '1.2rem', letterSpacing: '.06em', color: 'var(--creme)', marginBottom: '.2rem' }}>
                    {member.name}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.6rem', letterSpacing: '.25em', color: 'var(--rouge)', marginBottom: '.6rem' }}>
                    {member.role}
                  </p>
                  <p style={{ fontSize: '.85rem', color: 'var(--gris)', lineHeight: 1.75 }}>
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--fond)', padding: '7rem 0' }}>
        <div className="container faq-home-grid">
          <div style={{ position: 'sticky', top: '7rem' }}>
            <h2
              className="font-bebas"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--creme)', letterSpacing: '.03em', lineHeight: 1, marginBottom: '1.5rem' }}
            >
              TES QUESTIONS,<br />
              <span style={{ color: 'var(--rouge)' }}>NOS RÉPONSES.</span>
            </h2>
            <p style={{ fontSize: '.88rem', color: 'var(--gris)', lineHeight: 1.7, marginBottom: '2rem' }}>
              Tout ce que tu veux savoir avant de commander.
            </p>
            <Btn href="/faq" variant="secondary" size="sm">VOIR TOUTES LES FAQ</Btn>
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

      {/* ── CTA FINALE ─────────────────────────────────────────────── */}
      <section style={{ background: 'var(--rouge)', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
        <span
          aria-hidden="true"
          style={{
            position: 'absolute', right: '-2%', top: '50%', transform: 'translateY(-50%)',
            fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif',
            fontSize: 'clamp(6rem, 20vw, 16rem)',
            color: 'white', opacity: .06,
            letterSpacing: '.02em', userSelect: 'none', lineHeight: 1, pointerEvents: 'none',
          }}
        >
          GO
        </span>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: 700 }}>
            <h2
              className="font-bebas"
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', color: 'white', letterSpacing: '.03em', lineHeight: .95, marginBottom: '1.5rem' }}
            >
              ARRÊTE DE<br />REMETTRE<br />ÇA À DEMAIN.
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,.75)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
              Consulte le menu, choisis tes services, réserve ton créneau.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Btn href="/menu" variant="white-on-rouge" size="lg">VOIR LE MENU</Btn>
              <Btn href="/reserver" variant="outline-white" size="lg">RÉSERVER</Btn>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
