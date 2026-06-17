'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useReducedMotion } from 'motion/react'
import Link from 'next/link'

/* ── SVG path data extracted from the official Cocktail Média coupe logo ── */

// The martini glass body, stem and base (dark paths → white outline)
const GLASS_PATHS = [
  // Main glass body (bowl, stem, base, inner splatter outline)
  "M572.78 194.87c-11.83-5.2-23.97-9.34-36.68-11.57-14.64-2.6-29.35-4.91-44.65-7.36-4.63-.74-6.99-6.01-4.44-9.94.81-1.25 1.59-2.47 2.35-3.7 6.7-10.83 6.16-21.56-.6-32.14-10.72-16.82-26.41-23.16-45.74-21.39-20.32 1.88-36.71 12.5-52.4 24.47-13.8 10.51-24.25 24.42-36.6 36.43-23.23 22.58-52.79 15.86-63.77-14.45-3.68-10.16-6.79-20.53-10.48-30.66-4.77-13.27-10.62-26.09-21.27-35.79-10.66-9.67-23.26-14.06-37.21-9.28-14.23 4.89-21.67 15.93-24.18 30.66-2.23 13.07.6 25.46 3.4 38.1 1.13 5.1 5.52 12.53-.75 15.96-6.26 3.44-11.22-3.11-15.4-7.32-8.42-8.5-16.14-17.74-24.6-26.2-11.83-11.83-25.64-20.15-42.63-22.34-23.58-3.01-41.53 16.85-36.18 39.97 2.26 9.88 8.49 17.17 14.94 24.32 4 4.39 2.97 6.27-2.41 7.12-7.5 1.16-15.01 2.3-22.48 3.57-17.56 2.98-35.26 5.28-51.27 14.09C.05 208.26-5.54 226.84 5.82 246.24c3.36 5.74 7.72 10.98 12 16.11C54.5 306.01 94.15 346.97 132 389.56c41.14 46.31 83.3 91.73 125.01 137.51 3.93 4.32 7.58 8.28 7.44 15.11-1.31 68.08-1.7 136.17-1.1 204.25.03 4.67-.04 9.49-1.24 13.95-1.74 6.58-4.5 12.46-13.24 12.64-22.84.46-45.32 4-67.59 8.78-18.2 3.89-35.33 10.48-50.06 22.12-13.13 10.45-14.05 22.09-3.4 34.77 6.16 7.33 13.6 12.85 22.45 16.36 15.82 6.26 32.29 10.12 49 12.92 50.41 8.46 101.18 9.45 152.06 6.58 30.37-1.73 60.5-5.52 89.5-15.5 11.43-3.93 22.34-8.71 30.51-18.09 11.51-13.18 10.98-24.68-1.52-36.82-11.47-11.16-25.63-16.89-40.78-21-24.68-6.69-50.17-7.58-75.24-11.36-17.59-2.69-19.15-4.75-19.19-22.77-.14-67.8-.03-135.63-.28-203.43-.03-8.25 2.83-14.41 8.39-20.25 54.13-57 108.9-113.4 160.27-172.91 28.43-32.93 58.99-63.97 85.08-99.02 15.01-20.11 8-48.33-15.29-58.53m-464.22-53.81c2.73-5.1 8.18-3.68 12.68-3.36 7.64.56 13.56 5.2 19.5 9.38 12.04 8.46 21.78 19.44 32.08 29.77 7.47 7.51 15.15 14.59 25.38 18.24 18.24 6.48 33.07-4 33.11-23.55 0-8.85-2.55-17.27-4.96-25.7-2.58-8.99-5.17-18.02-3.68-27.58 1.52-10.09 8.81-13.7 17.81-8.57 7.29 4.14 10.65 11.08 13.38 18.77 7.01 19.72 11.51 40.53 24.04 57.99 18.9 26.27 51.55 31.37 78.06 13.03 16.54-11.44 28.36-27.76 43.87-40.15 10.76-8.57 21.56-17.21 35.19-20.68 6.44-1.63 13.35-2.86 19.4 1.67 7.4 5.52 9.14 15.96 2.83 23.04-9.45 10.73-19.75 20.68-29.7 30.98-12.5 13-23.19 27.16-28.08 44.82-1.62 5.92-6.12 5.56-10.4 5.74-26.88 1.13-53.75 1.91-80.65 1.56-37.11-1.17-74.21-2.48-111.31-3.4-8.71-.21-14.02-2.52-17.56-11.61-8.22-20.96-24.33-36.19-40.75-50.81-9.63-8.53-19.16-17.17-26.8-27.65-2.55-3.5-5.84-7.4-3.44-11.93",
  // Decorative circle — top centre (olive / ice?)
  "M436.56 0c-23.2-.03-41.89 20.36-42.44 44.53-.58 25.39 21.98 39.35 42.95 40.78 20.09-.01 44.06-23.13 43.9-42.37C480.79 19.86 460.28.03 436.56 0m1.72 60.67c-10.74 0-21.04-8.86-21.03-18.08.01-9.57 9.57-19.55 18.79-19.61 9.29-.06 20.89 11.54 21.17 21.19.27 8.77-8.6 16.51-18.93 16.5",
  // Decorative circle — top right
  "M567.95 5.55c-16.69.4-32.62 9.4-44.18 26.02-8.32 11.95-16.72 24.01-19.68 38.65-1.66 8.22-.52 8.82 7.2 6.36 8.04-2.56 16.19-4.78 24.32-7.04 14.12-3.93 28.85-4.14 43.13-7.01 16.39-3.3 25.5-12.55 26.22-26.14 1-18.65-11.79-30.51-37.01-30.84m-.14 35.96c-2.46.62-4.94 1.19-7.47 1.72-6.76 1.44-10.87-7.48-5.27-11.53.06-.04.11-.08.16-.12 2.62-1.87 5.31-3.87 8.6-4.09 5.94-.39 13.41-.54 14.72 6.1 1.11 5.68-6.18 6.77-10.74 7.92",
  // Decorative element — upper right
  "M618.94 103.2c-9.78-11.57-22.76-16.4-41.54-16.69q-.45 0-.9.03c-19.44 1.57-36.9 13.41-50.26 31.8-5 6.89-3.51 9.59 5.25 11.74 11.9 2.92 23.59 6.18 34.94 11.04 9.3 3.98 18.86 7.68 29.34 8.18 12.39.6 21.49-3.79 27.08-15.15 5.53-11.26 3.95-21.65-3.91-30.95m-18.74 18.04c-1.23 3.01-4.4 3.94-7.28 3.98-9.55.15-16.8-5.8-24.54-10.15-2.75-1.54-.04-3.53 1.48-4.62 3.47-2.47 7.58-2.72 11.68-2.81 5.77-.21 10.93 1.41 15.18 5.39 2.34 2.19 4.93 4.62 3.48 8.21",
  // Small circle — centre top
  "M351.03 106.57c-.35 11.37-12.45 23.18-23.49 22.93-10.5-.23-22.89-12.84-22.59-23 .34-11.86 11.58-22.89 23.27-22.83 12.34.05 23.18 10.93 22.81 22.9",
  // Small circle — far left
  "M50.86 64.1c-.02 10.41-10.36 19.58-21.8 19.35-11.03-.22-19.28-8.04-19.32-18.3-.04-12.47 8.62-22.18 19.76-22.17C40.61 43 50.88 53.15 50.86 64.1",
  // Small circle — centre-left
  "M206.63 32.86c-.04 9.31-7.4 16.92-16.49 17.06-9.77.16-17.75-7.45-17.56-16.74.22-10.65 7.57-18.72 16.92-18.57 10.03.15 17.17 7.76 17.13 18.25",
]

// Official splash / pour pattern from the logo (rouge paths — hidden initially, fade in at end)
const SPLASH_PATHS = [
  "M457.25 163.36c-9.45 10.73-19.75 20.68-29.7 30.98-12.5 13-23.19 27.16-28.08 44.82-1.62 5.92-6.12 5.56-10.4 5.74-26.88 1.13-53.75 1.91-80.65 1.56-37.11-1.17-74.21-2.48-111.31-3.4-8.71-.21-14.02-2.52-17.56-11.61-8.22-20.96-24.33-36.19-40.75-50.81-9.63-8.53-19.16-17.17-26.8-27.65-2.55-3.5-5.84-7.4-3.44-11.93 2.73-5.1 8.18-3.68 12.68-3.36 7.64.56 13.56 5.2 19.5 9.38 12.04 8.46 21.78 19.44 32.08 29.77 7.47 7.51 15.15 14.59 25.38 18.24 18.24 6.48 33.07-4 33.11-23.55 0-8.85-2.55-17.27-4.96-25.7-2.58-8.99-5.17-18.02-3.68-27.58 1.52-10.09 8.81-13.7 17.81-8.57 7.29 4.14 10.65 11.08 13.38 18.77 7.01 19.72 11.51 40.53 24.04 57.99 18.9 26.27 51.55 31.37 78.06 13.03 16.54-11.44 28.36-27.76 43.87-40.15 10.76-8.57 21.56-17.21 35.19-20.68 6.44-1.63 13.35-2.86 19.4 1.67 7.4 5.52 9.14 15.96 2.83 23.04",
  "M457.21 44.17c.27 8.77-8.6 16.51-18.93 16.5-10.74 0-21.04-8.86-21.03-18.08.01-9.57 9.57-19.55 18.79-19.61 9.29-.06 20.89 11.54 21.17 21.19",
  "M567.81 41.51c-1.27.32-2.56.62-3.86.89-3.5.75-5.63-3.87-2.73-5.96.03-.02.06-.04.08-.06 1.36-.97 2.75-2.01 4.45-2.12 3.07-.2 6.94-.28 7.61 3.16.58 2.93-3.19 3.5-5.55 4.09",
  "M600.2 121.24c-1.23 3.01-4.4 3.94-7.28 3.98-9.55.15-16.8-5.8-24.54-10.15-2.75-1.54-.04-3.53 1.48-4.62 3.47-2.47 7.58-2.72 11.68-2.81 5.77-.21 10.93 1.41 15.18 5.39 2.34 2.19 4.93 4.62 3.48 8.21",
]

export default function HeroCoupe() {
  const sectionRef    = useRef<HTMLElement>(null)
  const coupeRef      = useRef<HTMLDivElement>(null)
  const liquidRectRef = useRef<SVGRectElement>(null)
  const streamRef     = useRef<SVGRectElement>(null)
  const splashRef     = useRef<SVGGElement>(null)
  const textRef       = useRef<HTMLDivElement>(null)
  const ctasRef       = useRef<HTMLDivElement>(null)
  const scrollRef     = useRef<HTMLDivElement>(null)

  const reduce = useReducedMotion()

  useGSAP(() => {
    if (reduce) return

    const tl = gsap.timeline({ delay: 0.3 })

    // 1. Verre contour apparaît
    tl.fromTo(coupeRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.9, ease: 'power2.out' },
      0,
    )

    // 2. Filet depuis le header descend vers l'ouverture du verre
    tl.to(streamRef.current, {
      attr: { height: 360 },
      duration: 0.65,
      ease: 'power2.in',
    }, 0.5)

    // 3. Liquide monte depuis le fond du verre
    tl.to(liquidRectRef.current, {
      attr: { y: 195 },
      duration: 2.8,
      ease: 'power2.inOut',
    }, 1.0)

    // 4. Filet se rétracte
    tl.to(streamRef.current, {
      attr: { height: 0 },
      duration: 0.45,
      ease: 'power1.out',
    }, 2.5)

    // 5. Splash officiel fade in = résultat du logo
    tl.to(splashRef.current, {
      opacity: 1,
      duration: 1.1,
      ease: 'power2.out',
    }, 2.9)

    // 6. Texte entre par la gauche
    tl.fromTo(textRef.current,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 1.2, ease: 'expo.out' },
      1.3,
    )

    // 7. CTAs
    tl.fromTo(ctasRef.current,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'expo.out' },
      2.1,
    )

    // 8. Scroll hint
    tl.fromTo(scrollRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8 },
      3.5,
    )
  }, { scope: sectionRef })

  const reduced = reduce ?? false

  return (
    <section
      ref={sectionRef}
      style={{ minHeight: '100dvh', background: '#111110', position: 'relative', overflow: 'hidden' }}
    >
      <div className="hero-aurora" aria-hidden="true" />

      <div className="container hero-coupe-grid">

        {/* ── Gauche : texte ── */}
        <div ref={textRef} style={{ opacity: reduced ? 1 : 0 }}>
          <p className="hero-coupe-eyebrow">PRODUCTION CRÉATIVE À LA CARTE</p>

          <h1 className="font-bebas hero-coupe-title">
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
            style={{ opacity: reduced ? 1 : 0 }}
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
            style={{ opacity: reduced ? 1 : 0 }}
          >
            <svg
              viewBox="0 0 626.13 876"
              width="100%"
              height="100%"
              style={{ overflow: 'visible' }}
              aria-hidden="true"
            >
              <defs>
                {/* Gradient du liquide — rouge chaud */}
                <radialGradient id="hc-liquid" cx="50%" cy="38%" r="60%">
                  <stop offset="0%"   stopColor="rgba(255,110,60,.95)" />
                  <stop offset="50%"  stopColor="#E83B14" />
                  <stop offset="100%" stopColor="rgba(155,18,5,.9)" />
                </radialGradient>

                {/* Gradient du filet de versement */}
                <linearGradient id="hc-stream" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stopColor="rgba(232,59,20,0)" />
                  <stop offset="40%"  stopColor="rgba(232,59,20,.5)" />
                  <stop offset="100%" stopColor="#E83B14" />
                </linearGradient>

                {/* Masque = silhouette complète du verre (outline + splash) */}
                <mask id="hc-glass-mask">
                  <rect width="626.13" height="876" fill="black" />
                  <g fill="white">
                    {GLASS_PATHS.map((d, i) => <path key={`m${i}`} d={d} />)}
                    {SPLASH_PATHS.map((d, i) => <path key={`ms${i}`} d={d} />)}
                  </g>
                </mask>

                {/* Clip du niveau du liquide — rect animé de bas en haut */}
                <clipPath id="hc-liquid-clip">
                  <rect
                    ref={liquidRectRef}
                    x="0"
                    y={reduced ? 195 : 876}
                    width="626.13"
                    height="876"
                  />
                </clipPath>
              </defs>

              {/* Filet de versement — part de au-dessus du viewBox (overflow:visible) */}
              <rect
                ref={streamRef}
                x="307"
                y="-360"
                width="12"
                rx="6"
                height={reduced ? 0 : 0}
                fill="url(#hc-stream)"
              />

              {/* Contour verre — blanc translucide */}
              <g fill="white" opacity="0.15">
                {GLASS_PATHS.map((d, i) => <path key={`g${i}`} d={d} />)}
              </g>

              {/* Liquide montant — masqué par la silhouette du verre + clipPath niveau */}
              <rect
                x="0"
                y="0"
                width="626.13"
                height="876"
                fill="url(#hc-liquid)"
                mask="url(#hc-glass-mask)"
                clipPath="url(#hc-liquid-clip)"
              />

              {/* Splash officiel du logo — opacity 0 → 1 à la fin */}
              <g
                ref={splashRef}
                opacity={reduced ? 1 : 0}
                fill="#E83B14"
              >
                {SPLASH_PATHS.map((d, i) => <path key={`s${i}`} d={d} />)}
              </g>
            </svg>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="hp-scroll-hint"
        style={{ opacity: reduced ? 1 : 0 }}
        aria-hidden="true"
      >
        <span>↓</span>
      </div>
    </section>
  )
}
