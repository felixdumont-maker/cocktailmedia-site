'use client'
import Link from 'next/link'
import { COUPE_SRC } from '@/lib/data'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--noir)', color: 'var(--fond)', padding: '4rem 3rem 2rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <div style={{ textAlign: 'center', paddingBottom: '3rem', marginBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,.08)' }}>
          <h2 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: 'clamp(1.8rem,4vw,3rem)', letterSpacing: '.03em', marginBottom: '.8rem' }}>
            BESOIN D&apos;UN COUP DE MAIN <span style={{ color: 'var(--rouge)' }}>CRÉATIF</span> ?
          </h2>
          <p style={{ fontSize: '.88rem', color: 'var(--gris)', marginBottom: '2rem' }}>On est à un clic. Pas de formulaire à 12 champs, promis.</p>
          <Link href="/menu" style={{
            display: 'inline-flex', alignItems: 'center', gap: '.6rem',
            fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '1.1rem', letterSpacing: '.14em',
            color: 'var(--noir)', background: 'var(--creme)', padding: '.85rem 2.5rem', borderRadius: 100,
            transition: 'all .3s ease',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--rouge)'; e.currentTarget.style.color = 'white' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--creme)'; e.currentTarget.style.color = 'var(--noir)' }}
          >
            VOIR LE MENU
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={COUPE_SRC} alt="" style={{ height: 20 }} />
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '3rem', marginBottom: '3rem' }} className="footer-grid">
          <div>
            <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.8rem', letterSpacing: '.25em', color: 'var(--rouge)', marginBottom: '1.2rem' }}>NAVIGATION</p>
            {[['/', 'Accueil'], ['/menu', 'Menu'], ['/apropos', 'À propos'], ['/faq', 'FAQ'], ['/reserver', 'Réserver'], ['/politiques', 'Politiques']].map(([href, label]) => (
              <Link key={href} href={href} style={{ display: 'block', fontSize: '.82rem', color: 'var(--gris)', padding: '.35rem 0', transition: 'all .2s ease' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--fond)'; e.currentTarget.style.paddingLeft = '.5rem' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--gris)'; e.currentTarget.style.paddingLeft = '0' }}
              >{label}</Link>
            ))}
          </div>

          <div>
            <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.8rem', letterSpacing: '.25em', color: 'var(--rouge)', marginBottom: '1.2rem' }}>CONTACT</p>
            <p style={{ fontSize: '.82rem', color: 'var(--gris)', marginBottom: '.6rem' }}><a href="mailto:info@cocktailmedia.ca" style={{ color: 'var(--gris)', transition: 'color .2s' }}>info@cocktailmedia.ca</a></p>
            <p style={{ fontSize: '.82rem', color: 'var(--gris)', marginBottom: '.6rem' }}><a href="tel:+18195314803" style={{ color: 'var(--gris)', transition: 'color .2s' }}>819-531-4803</a></p>
            <p style={{ fontSize: '.82rem', color: 'var(--gris)', marginBottom: '.6rem' }}>Trois-Rivières, QC</p>
            <p style={{ fontSize: '.72rem', color: 'var(--gris)', fontStyle: 'italic', marginTop: '.8rem' }}>Disponible en Mauricie</p>
          </div>

          <div>
            <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.8rem', letterSpacing: '.25em', color: 'var(--rouge)', marginBottom: '1.2rem' }}>RÉSEAUX</p>
            <div style={{ display: 'flex', gap: '.8rem', flexWrap: 'wrap' }}>
              {[['https://www.facebook.com/cocktailmedia', 'FB'], ['https://www.instagram.com/cocktailmedia', 'IG'], ['https://www.tiktok.com/@cocktailmedia', 'TK'], ['https://www.linkedin.com/company/cocktailmedia', 'IN']].map(([href, label]) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,.06)',
                  color: 'var(--gris)', fontSize: '.8rem', fontWeight: 600, transition: 'all .3s ease',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--rouge)'; e.currentTarget.style.color = 'white'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.06)'; e.currentTarget.style.color = 'var(--gris)'; e.currentTarget.style.transform = 'translateY(0)' }}
                >{label}</a>
              ))}
            </div>
            <div style={{ marginTop: '1.5rem' }}>
              <Link href="/reserver" style={{
                display: 'inline-block', fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif',
                fontSize: '.85rem', letterSpacing: '.12em', color: 'white', background: 'var(--rouge)',
                padding: '.5rem 1.4rem', borderRadius: 100, transition: 'all .3s ease',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--creme)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--rouge)')}
              >MON ESPACE CLIENT →</Link>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,.06)' }} className="footer-bottom">
          <span style={{ fontSize: '.7rem', color: 'var(--gris)' }}>© {new Date().getFullYear()} Cocktail Média. Tous droits réservés.</span>
          <span style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.7rem', letterSpacing: '.3em', color: 'var(--gris)' }}>ACCESSIBILITÉ · CRÉATIVITÉ · SIMPLICITÉ</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .footer-bottom { flex-direction: column !important; gap: .5rem !important; text-align: center !important; }
          footer { padding: 3rem 1.5rem 1.5rem !important; }
        }
      `}</style>
    </footer>
  )
}
