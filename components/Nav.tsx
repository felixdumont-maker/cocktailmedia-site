'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { LOGO_SRC, COUPE_SRC } from '@/lib/data'
import Btn from '@/components/ui/Btn'

const LINKS = [
  { href: '/', label: 'ACCUEIL' },
  { href: '/menu', label: 'MENU' },
  { href: '/apropos', label: 'À PROPOS' },
  { href: '/faq', label: 'FAQ' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      <header style={{
        padding: '1.2rem 3rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: 0, left: 0, right: 0,
        zIndex: 100,
      }}>
        <Link href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO_SRC} alt="Cocktail Média" style={{ height: 40, width: 'auto', transition: 'transform .3s ease' }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '.3rem' }} className="nav-desktop">
          {LINKS.map(l => {
            const active = pathname === l.href || (l.href !== '/' && pathname.startsWith(l.href))
            return (
              <Link key={l.href} href={l.href} className={`nav-link${active ? ' active' : ''}`}>
                {l.label}
                {active && <span style={{ position: 'absolute', bottom: 6, left: '50%', transform: 'translateX(-50%)', width: 4, height: 4, borderRadius: '50%', background: 'var(--rouge)' }} />}
              </Link>
            )
          })}
          <Btn href="/reserver" variant="primary" size="sm" style={{ marginLeft: '.5rem' }}>
            RÉSERVER
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={COUPE_SRC} alt="" style={{ height: 16, filter: 'brightness(0) invert(1)' }} />
          </Btn>
        </nav>

        <button
          className="nav-hamburger"
          aria-label="Menu"
          onClick={() => setOpen(o => !o)}
          style={{ display: 'none', flexDirection: 'column', gap: 5, padding: 8, border: 'none', background: 'none', zIndex: 200 }}
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block', width: 24, height: 2,
              background: 'var(--noir)',
              borderRadius: 2,
              transition: 'all .3s ease',
              transform: open ? (i === 0 ? 'rotate(45deg) translate(5px,5px)' : i === 2 ? 'rotate(-45deg) translate(5px,-5px)' : 'none') : 'none',
              opacity: open && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </header>

      {open && (
        <div style={{
          position: 'fixed', inset: 0, background: 'var(--creme)', zIndex: 150,
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1rem',
        }}>
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif',
              fontSize: 'clamp(2rem,6vw,3rem)',
              letterSpacing: '.08em',
              color: 'var(--noir)',
              padding: '.3rem 0',
              transition: 'color .2s ease',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--rouge)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--noir)')}
            >
              {l.label}
            </Link>
          ))}
          <Btn href="/reserver" variant="primary" size="md" style={{ marginTop: '1.5rem', fontSize: '1.2rem' }} onClick={() => setOpen(false)}>
            RÉSERVER
          </Btn>
          <p style={{ fontFamily: 'var(--font-bebas, "Bebas Neue"), sans-serif', fontSize: '.7rem', letterSpacing: '.3em', color: 'var(--gris-clair)', marginTop: '2rem' }}>
            ACCESSIBILITÉ · CRÉATIVITÉ · SIMPLICITÉ
          </p>
        </div>
      )}
    </>
  )
}
