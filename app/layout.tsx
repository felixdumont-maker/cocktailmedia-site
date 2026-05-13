import type { Metadata } from 'next'
import { Bebas_Neue, Montserrat } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Cocktail Média | Photographe, vidéaste et graphiste en Mauricie',
  description: 'Production créative à la carte en Mauricie. Photo, vidéo, graphisme et création de site web pour les PME. Sans réunion, sans complication. Tu commandes, on produit.',
  keywords: ['photographe Mauricie', 'vidéaste Trois-Rivières', 'graphiste PME', 'production créative Québec'],
  openGraph: {
    title: 'Cocktail Média',
    description: 'Production créative à la carte. Tu choisis. Tu paies. On produit.',
    url: 'https://www.cocktailmedia.ca',
    siteName: 'Cocktail Média',
    locale: 'fr_CA',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${bebasNeue.variable} ${montserrat.variable}`}>
      <body style={{ fontFamily: 'var(--font-montserrat, Montserrat), system-ui, sans-serif' }}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
