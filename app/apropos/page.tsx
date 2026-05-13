import Link from 'next/link'
import { TEAM, COUPE_SRC } from '@/lib/data'

export const metadata = {
  title: 'À propos | Cocktail Média',
  description: 'Deux créatifs. Une vision. Cocktail Média, c\'est une production créative à la carte basée en Mauricie.',
}

export default function AProposPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{
        background: 'var(--creme)', minHeight: '55vh',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '10rem 2rem 4rem', position: 'relative', overflow: 'hidden',
      }}>
        <span style={{
          position: 'absolute', right: '-2%', top: '5%',
          fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif',
          fontSize: 'clamp(5rem,16vw,13rem)', color: 'var(--rouge)', opacity: .05,
          letterSpacing: '.04em', userSelect: 'none', lineHeight: 1,
        }}>HUMAIN</span>
        <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%' }}>
          <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.8rem', letterSpacing: '.4em', color: 'var(--rouge)', marginBottom: '.8rem' }}>DERRIÈRE LE COMPTOIR</p>
          <h1 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: 'clamp(3rem,8vw,6rem)', color: 'var(--noir)', letterSpacing: '.04em', lineHeight: 1, marginBottom: '1.2rem' }}>
            À PROPOS
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--gris)', maxWidth: 540, lineHeight: 1.8 }}>
            Pas une agence. Deux créatifs qui aiment leur métier, qui travaillent directement avec toi et qui livrent ce qu&apos;ils promettent.
          </p>
        </div>
      </section>

      {/* ── MANIFESTE ────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--fond)', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.8rem', letterSpacing: '.4em', color: 'var(--rouge)', marginBottom: '1rem' }}>NOTRE PHILOSOPHIE</p>
          <h2 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: 'clamp(2rem,5vw,3.5rem)', color: 'var(--noir)', letterSpacing: '.04em', marginBottom: '2rem', lineHeight: 1 }}>
            ON CROIT QUE LA CRÉATIVITÉ<br />
            <span style={{ color: 'var(--rouge)' }}>DEVRAIT ÊTRE ACCESSIBLE.</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '.95rem', color: 'var(--gris)', lineHeight: 1.8 }}>
            <p>Cocktail Média, c&apos;est né d&apos;un constat simple : les PME ont besoin de contenu professionnel, mais les agences traditionnelles sont trop compliquées, trop chères et trop lentes. Des réunions à n&apos;en plus finir. Des soumissions mystères. Des délais interminables.</p>
            <p>On a décidé de faire autrement. Un menu clair. Des prix affichés. Tu choisis ce dont tu as besoin, tu paies ce prix-là, on produit et on livre. Pas de comité. Pas de surprise.</p>
            <p>On travaille avec les PME de la Mauricie qui veulent du contenu qui <strong style={{ color: 'var(--noir)' }}>ressemble à leur business</strong> — pas à un template générique. On est accessibles, directs et on aime ce qu&apos;on fait.</p>
          </div>
        </div>
      </section>

      {/* ── VALEURS ──────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--noir)', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.8rem', letterSpacing: '.4em', color: 'var(--rouge)', marginBottom: '.8rem' }}>CE QUI NOUS GUIDE</p>
            <h2 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: 'clamp(2rem,5vw,3rem)', color: 'var(--creme)', letterSpacing: '.03em' }}>NOS VALEURS</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="values-grid">
            {[
              { word: 'ACCESSIBILITÉ', desc: 'Des prix clairs et affichés. On croit que le contenu professionnel devrait être à la portée des PME, pas seulement des grandes entreprises.' },
              { word: 'CRÉATIVITÉ', desc: 'Chaque projet est traité avec soin. On ne livre pas des livrables génériques — on crée du contenu qui te ressemble et qui parle à ton audience.' },
              { word: 'SIMPLICITÉ', desc: 'Pas de processus compliqué. Tu choisis, tu paies, on produit. La relation client est directe, simple et sans intermédiaire.' },
            ].map(v => (
              <div key={v.word} style={{ padding: '2rem', border: '1px solid rgba(255,255,255,.06)', borderRadius: 16 }}>
                <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '1.6rem', letterSpacing: '.08em', color: 'var(--rouge)', marginBottom: '.8rem' }}>{v.word}</p>
                <p style={{ fontSize: '.85rem', color: 'var(--gris)', lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ÉQUIPE ───────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--creme)', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.8rem', letterSpacing: '.4em', color: 'var(--rouge)', marginBottom: '.8rem' }}>LES PERSONNES</p>
            <h2 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: 'clamp(2rem,5vw,3rem)', color: 'var(--noir)', letterSpacing: '.03em' }}>L&apos;ÉQUIPE</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', maxWidth: 750, margin: '0 auto' }} className="team-grid">
            {TEAM.map(member => (
              <div key={member.name}>
                <div style={{ width: '100%', aspectRatio: '1', borderRadius: 20, overflow: 'hidden', marginBottom: '1.5rem', border: '3px solid var(--rouge)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={member.photo} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '1.5rem', letterSpacing: '.06em', color: 'var(--noir)', marginBottom: '.3rem' }}>{member.name}</h3>
                <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.7rem', letterSpacing: '.25em', color: 'var(--rouge)', marginBottom: '1rem' }}>{member.role}</p>
                <p style={{ fontSize: '.88rem', color: 'var(--gris)', lineHeight: 1.8 }}>{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ZONE ─────────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--fond)', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.8rem', letterSpacing: '.4em', color: 'var(--rouge)', marginBottom: '.8rem' }}>OÙ ON TRAVAILLE</p>
          <h2 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: 'clamp(2rem,5vw,3rem)', color: 'var(--noir)', letterSpacing: '.03em', marginBottom: '1.5rem' }}>LA MAURICIE & ENVIRONS</h2>
          <p style={{ fontSize: '.92rem', color: 'var(--gris)', lineHeight: 1.8, marginBottom: '2rem' }}>
            On est basés à <strong style={{ color: 'var(--noir)' }}>Trois-Rivières</strong>. Le déplacement est inclus partout en Mauricie — Shawinigan, Louiseville, Bécancour, Victoriaville et les villes environnantes. Pour les projets hors Mauricie, le déplacement est gratuit pour toute commande de 500$ et plus.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/reserver" className="btn-reserver" style={{
              fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif',
              fontSize: '1rem', letterSpacing: '.14em',
              color: 'white', background: 'var(--rouge)',
              padding: '.8rem 2.5rem', borderRadius: 100,
              display: 'inline-flex', alignItems: 'center', gap: '.5rem',
              transition: 'all .3s ease',
            }}>
              RÉSERVER UN CRÉNEAU
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={COUPE_SRC} alt="" style={{ height: 16, filter: 'brightness(0) invert(1)' }} />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .btn-reserver:hover { background: var(--noir) !important; transform: translateY(-2px) !important; }
        @media (max-width: 768px) {
          .values-grid { grid-template-columns: 1fr !important; }
          .team-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </>
  )
}
