'use client'

import { motion } from 'motion/react'
import { CATEGORIES } from '@/lib/data'
import Btn from '@/components/ui/Btn'

function stripHtml(s: string) {
  return s.replace(/<[^>]*>/g, '')
}

const reveal = {
  initial:     { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0  },
  viewport:    { once: true, amount: 0.2 } as const,
  transition:  { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const },
}

const revealLeft = {
  initial:     { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0   },
  viewport:    { once: true, amount: 0.2 } as const,
  transition:  { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const },
}

const revealRight = {
  initial:     { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0  },
  viewport:    { once: true, amount: 0.2 } as const,
  transition:  { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay: 0.1 },
}

export default function CategoriesSection() {
  return (
    <>
      {CATEGORIES.map((cat, i) => {
        const desc = stripHtml(cat.tagline)

        /* ── 0 · L'APÉRO — Split logo gauche ─────────────────────── */
        if (i === 0) return (
          <section key={cat.slug} style={{ background: 'var(--fond)', minHeight: '100dvh', display: 'flex' }}>
            <div
              style={{ display: 'grid', gridTemplateColumns: '45% 55%', width: '100%' }}
              className="cat-split-left"
            >
              <motion.div
                {...revealLeft}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: cat.colorPale,
                  borderRight: '1px solid var(--ligne)',
                  padding: '4rem',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cat.logoLocal} alt=""
                  style={{ width: 'clamp(160px, 24vw, 320px)', height: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.9 }}
                />
              </motion.div>

              <motion.div
                {...revealRight}
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '4rem clamp(2rem, 5vw, 5rem)' }}
              >
                <p className="cat-num">{cat.num}</p>
                <h2 className="cat-name-display">{cat.name}</h2>
                <p className="cat-type-tag">{cat.type.toUpperCase()}</p>
                <p className="cat-desc-text">{desc}</p>
                <p className="cat-price">{cat.startingAt}</p>
                <Btn href={`/menu/${cat.slug}`} variant="primary" size="lg">VOIR L'OFFRE</Btn>
              </motion.div>
            </div>
          </section>
        )

        /* ── 1 · LES ROSÉS — Watermark centré ────────────────────── */
        if (i === 1) return (
          <section key={cat.slug} style={{ background: 'var(--surface)', minHeight: '100dvh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={cat.logoLocal} alt=""
                style={{ width: 'min(80vw, 600px)', height: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.04 }}
              />
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '6rem 2rem' }}>
              <motion.div {...reveal}>
                <p className="cat-num">{cat.num}</p>
                <h2 className="cat-name-display">{cat.name}</h2>
                <p className="cat-type-tag">{cat.type.toUpperCase()}</p>
                <p className="cat-desc-text" style={{ maxWidth: 520, margin: '0 auto 1.5rem' }}>{desc}</p>
                <p className="cat-price">{cat.startingAt}</p>
                <Btn href={`/menu/${cat.slug}`} variant="primary" size="lg">VOIR L'OFFRE</Btn>
              </motion.div>
            </div>
          </section>
        )

        /* ── 2 · LES BLANCS — Split logo droite ──────────────────── */
        if (i === 2) return (
          <section key={cat.slug} style={{ background: 'var(--fond)', minHeight: '100dvh', display: 'flex' }}>
            <div
              style={{ display: 'grid', gridTemplateColumns: '55% 45%', width: '100%' }}
              className="cat-split-right"
            >
              <motion.div
                {...revealLeft}
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '4rem clamp(2rem, 5vw, 5rem)' }}
              >
                <p className="cat-num">{cat.num}</p>
                <h2 className="cat-name-display">{cat.name}</h2>
                <p className="cat-type-tag">{cat.type.toUpperCase()}</p>
                <p className="cat-desc-text">{desc}</p>
                <p className="cat-price">{cat.startingAt}</p>
                <Btn href={`/menu/${cat.slug}`} variant="primary" size="lg">VOIR L'OFFRE</Btn>
              </motion.div>

              <motion.div
                {...revealRight}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: cat.colorPale,
                  borderLeft: '1px solid var(--ligne)',
                  padding: '4rem',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cat.logoLocal} alt=""
                  style={{ width: 'clamp(160px, 24vw, 320px)', height: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.9 }}
                />
              </motion.div>
            </div>
          </section>
        )

        /* ── 3 · LES ROUGES — Numéro géant en fond + logo right ──── */
        if (i === 3) return (
          <section key={cat.slug} style={{ background: 'var(--surface)', minHeight: '100dvh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
            <div className="cat-bg-num" aria-hidden="true">{cat.num}</div>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cat.logoLocal} alt=""
              style={{
                position: 'absolute', right: '-4%', top: '50%', transform: 'translateY(-50%)',
                width: 'clamp(200px, 36vw, 500px)', height: 'auto',
                filter: 'brightness(0) invert(1)', opacity: 0.09,
                pointerEvents: 'none',
              }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
              <motion.div style={{ maxWidth: 560 }} {...reveal}>
                <p className="cat-num">{cat.num}</p>
                <h2 className="cat-name-display">{cat.name}</h2>
                <p className="cat-type-tag">{cat.type.toUpperCase()}</p>
                <p className="cat-desc-text">{desc}</p>
                <p className="cat-price">{cat.startingAt}</p>
                <Btn href={`/menu/${cat.slug}`} variant="primary" size="lg">VOIR L'OFFRE</Btn>
              </motion.div>
            </div>
          </section>
        )

        /* ── 4 · LES DIGESTIFS — Stack centré, logo en haut ──────── */
        if (i === 4) return (
          <section key={cat.slug} style={{ background: 'var(--fond)', minHeight: '100dvh', display: 'flex', alignItems: 'center', padding: '6rem 0' }}>
            <div className="container" style={{ textAlign: 'center' }}>
              <motion.div {...reveal}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cat.logoLocal} alt=""
                  style={{ width: 'clamp(120px, 16vw, 200px)', height: 'auto', filter: 'brightness(0) invert(1)', margin: '0 auto 3rem', display: 'block' }}
                />
                <p className="cat-num">{cat.num}</p>
                <h2 className="cat-name-display">{cat.name}</h2>
                <p className="cat-type-tag">{cat.type.toUpperCase()}</p>
                <p className="cat-desc-text" style={{ maxWidth: 520, margin: '0 auto 1.5rem' }}>{desc}</p>
                <p className="cat-price">{cat.startingAt}</p>
                <Btn href={`/menu/${cat.slug}`} variant="primary" size="lg">VOIR L'OFFRE</Btn>
              </motion.div>
            </div>
          </section>
        )

        return null
      })}
    </>
  )
}
