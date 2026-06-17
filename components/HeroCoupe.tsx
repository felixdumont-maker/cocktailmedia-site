'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useReducedMotion } from 'motion/react'
import Link from 'next/link'

export default function HeroCoupe() {
  const sectionRef   = useRef<HTMLElement>(null)
  const coupeRef     = useRef<HTMLDivElement>(null)
  const liquidRef    = useRef<HTMLDivElement>(null)
  const textRef      = useRef<HTMLDivElement>(null)
  const ctasRef      = useRef<HTMLDivElement>(null)
  const scrollRef    = useRef<HTMLDivElement>(null)

  const reduce = useReducedMotion()

  useGSAP(() => {
    if (reduce) return

    const tl = gsap.timeline({ delay: 0.3 })

    // Coupe materialise
    tl.fromTo(coupeRef.current,
      { opacity: 0, scale: 0.94 },
      { opacity: 1, scale: 1, duration: 1.6, ease: 'expo.out' },
      0,
    )

    // Liquide monte depuis le bas (inset = clip depuis le haut)
    tl.fromTo(liquidRef.current,
      { clipPath: 'inset(100% 0 0 0)' },
      { clipPath: 'inset(28% 0 0 0)', duration: 3.2, ease: 'power3.inOut' },
      0.5,
    )

    // Texte entre par la gauche
    tl.fromTo(textRef.current,
      { opacity: 0, x: -28 },
      { opacity: 1, x: 0, duration: 1.3, ease: 'expo.out' },
      1.2,
    )

    // CTAs
    tl.fromTo(ctasRef.current,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 1, ease: 'expo.out' },
      2.0,
    )

    // Scroll hint
    tl.fromTo(scrollRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8 },
      2.8,
    )
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      style={{ minHeight: '100dvh', background: '#111110', position: 'relative', overflow: 'hidden' }}
    >
      {/* Aurora */}
      <div className="hero-aurora" aria-hidden="true" />

      {/* Layout */}
      <div className="container hero-coupe-grid">

        {/* ── Gauche : texte ── */}
        <div
          ref={textRef}
          style={{ opacity: reduce ? 1 : 0 }}
        >
          <p className="hero-coupe-eyebrow">PRODUCTION CRÉATIVE À LA CARTE</p>

          <h1
            className="font-bebas hero-coupe-title"
          >
            COCKTAIL<br />
            <span style={{ color: 'var(--rouge)' }}>MÉDIA</span>
          </h1>

          <p className="hero-coupe-tagline">TU CHOISIS. TU PAIES. ON PRODUIT.</p>

          <p className="hero-coupe-sub">
            Production créative à la carte pour les PME de la Mauricie.
            Photo, vidéo, graphisme et sites web.
          </p>

          <div
            ref={ctasRef}
            className="hero-coupe-ctas"
            style={{ opacity: reduce ? 1 : 0 }}
          >
            <Link href="/menu" className="btn btn-primary btn-lg">VOIR LE MENU</Link>
            <Link href="/reserver" className="btn btn-secondary btn-lg">RÉSERVER</Link>
          </div>
        </div>

        {/* ── Droite : coupe ── */}
        <div className="hero-coupe-right">
          <div
            ref={coupeRef}
            className="hero-coupe-wrap"
            style={{ opacity: reduce ? 1 : 0 }}
          >
            {/* Contour verre — blanc translucide */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logos/coupe.svg"
              alt=""
              className="hero-coupe-outline"
            />

            {/* Liquide rouge — monte de bas en haut */}
            <div
              ref={liquidRef}
              className="hero-coupe-liquid"
              style={{ clipPath: reduce ? 'inset(28% 0 0 0)' : 'inset(100% 0 0 0)' }}
            />

            {/* Glow derrière le verre */}
            <div className="hero-coupe-glow" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        ref={scrollRef}
        className="hp-scroll-hint"
        style={{ opacity: reduce ? 1 : 0 }}
        aria-hidden="true"
      >
        <span>↓</span>
      </div>
    </section>
  )
}
