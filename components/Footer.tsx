'use client'
import Link from 'next/link'
import { COUPE_SRC } from '@/lib/data'
import Btn from '@/components/ui/Btn'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--noir)', color: 'var(--fond)', padding: '4rem 3rem 2rem' }}>
      <div className="container">

        <div style={{ textAlign: 'center', paddingBottom: '3rem', marginBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,.08)' }}>
          <h2 style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: 'clamp(1.8rem,4vw,3rem)', letterSpacing: '.03em', marginBottom: '.8rem' }}>
            BESOIN D&apos;UN COUP DE MAIN <span style={{ color: 'var(--rouge)' }}>CRÉATIF</span> ?
          </h2>
          <p style={{ fontSize: '.88rem', color: 'var(--gris)', marginBottom: '2rem' }}>On est à un clic. Pas de formulaire à 12 champs, promis.</p>
          <Btn href="/menu" variant="creme-on-dark" size="md">
            VOIR LE MENU
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={COUPE_SRC} alt="" style={{ height: 20 }} />
          </Btn>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '3rem', marginBottom: '3rem' }} className="footer-grid">
          <div>
            <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.8rem', letterSpacing: '.25em', color: 'var(--rouge)', marginBottom: '1.2rem' }}>NAVIGATION</p>
            {[['/', 'Accueil'], ['/menu', 'Menu'], ['/apropos', 'À propos'], ['/faq', 'FAQ'], ['/reserver', 'Réserver'], ['/politiques', 'Politiques']].map(([href, label]) => (
              <Link key={href} href={href} className="footer-link">{label}</Link>
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
              {[
                ['https://www.facebook.com/cocktailmedia', 'FB'],
                ['https://www.instagram.com/cocktailmedia', 'IG'],
                ['https://www.tiktok.com/@cocktailmedia', 'TK'],
                ['https://www.linkedin.com/company/cocktailmedia', 'IN'],
              ].map(([href, label]) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social-btn">
                  {label}
                </a>
              ))}
            </div>
            <div style={{ marginTop: '1.5rem' }}>
              <Btn href="/reserver" variant="primary" size="sm">MON ESPACE CLIENT →</Btn>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,.06)' }} className="footer-bottom">
          <span style={{ fontSize: '.7rem', color: 'var(--gris)' }}>© {new Date().getFullYear()} Cocktail Média. Tous droits réservés.</span>
          <span style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.7rem', letterSpacing: '.3em', color: 'var(--gris)' }}>ACCESSIBILITÉ · CRÉATIVITÉ · SIMPLICITÉ</span>
        </div>
      </div>
    </footer>
  )
}
