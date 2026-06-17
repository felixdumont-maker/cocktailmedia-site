'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useReducedMotion } from 'motion/react'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

const LOGOS = [
  { src: '/logos/apero.svg',        top: '20%', left: '8%'            },
  { src: '/logos/les-roses.svg',    top: '13%', right: '16%'          },
  { src: '/logos/les-blancs.svg',   top: '60%', left: '13%'           },
  { src: '/logos/les-rouges.svg',   top: '66%', right: '22%'          },
  { src: '/logos/les-digestifs.svg',top: '42%', right: '40%'          },
]

export default function HeroPorte() {
  const outerRef      = useRef<HTMLDivElement>(null)
  const lightRef      = useRef<HTMLDivElement>(null)
  const taglineRef    = useRef<HTMLDivElement>(null)
  const ctasRef       = useRef<HTMLDivElement>(null)
  const scrollHintRef = useRef<HTMLDivElement>(null)

  const l0 = useRef<HTMLDivElement>(null)
  const l1 = useRef<HTMLDivElement>(null)
  const l2 = useRef<HTMLDivElement>(null)
  const l3 = useRef<HTMLDivElement>(null)
  const l4 = useRef<HTMLDivElement>(null)
  const logoRefs = [l0, l1, l2, l3, l4]

  const reduce = useReducedMotion()

  useGSAP(() => {
    if (reduce || !outerRef.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: outerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.2,
      },
    })

    tl.to(scrollHintRef.current, { opacity: 0, duration: 0.8 }, 0)

    tl.to(lightRef.current, {
      height: '65vh',
      filter: 'blur(90px)',
      opacity: 0.2,
      duration: 4,
    }, 0)

    logoRefs.forEach((ref, i) => {
      if (!ref.current) return
      tl.fromTo(
        ref.current,
        { opacity: 0, y: -18 },
        { opacity: 0.55, y: 0, duration: 1.8 },
        1.4 + i * 0.5,
      )
    })

    tl.fromTo(
      taglineRef.current,
      { opacity: 0, y: 38 },
      { opacity: 1, y: 0, duration: 2.5 },
      6,
    )

    tl.fromTo(
      ctasRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
      8,
    )
  }, { scope: outerRef })

  return (
    <div ref={outerRef} style={{ height: '450vh' }}>
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100dvh',
          overflow: 'hidden',
          background: '#111110',
        }}
      >
        <div ref={lightRef} className="hp-light" />

        {LOGOS.map((pos, i) => {
          const ref = logoRefs[i]
          const posStyle: React.CSSProperties = {
            top: pos.top,
            ...(pos.left  ? { left:  pos.left  } : {}),
            ...(pos.right ? { right: pos.right } : {}),
          }
          return (
            <div key={i} ref={ref} className="hp-logo" style={posStyle}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={pos.src} alt="" width={64} height={64} />
            </div>
          )
        })}

        <div className="hp-spine" aria-hidden="true">COCKTAIL MÉDIA</div>

        <div
          ref={taglineRef}
          className="hp-tagline-block"
          style={{ opacity: reduce ? 1 : 0 }}
        >
          <p className="hp-tagline-main">TU CHOISIS. TU PAIES. ON PRODUIT.</p>
          <p className="hp-tagline-sub">
            Production créative à la carte pour les PME de la Mauricie.
          </p>
          <div
            ref={ctasRef}
            className="hp-ctas"
            style={{ opacity: reduce ? 1 : 0 }}
          >
            <Link href="/menu" className="btn btn-primary btn-lg">VOIR LE MENU</Link>
            <Link href="/reserver" className="btn btn-secondary btn-lg">RÉSERVER</Link>
          </div>
        </div>

        <div ref={scrollHintRef} className="hp-scroll-hint">
          <span>DÉFILER</span>
          <div className="hp-scroll-line" />
        </div>
      </div>
    </div>
  )
}
