import ServicePage from '@/components/ServicePage'
import { CATEGORIES } from '@/lib/data'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  const cat = CATEGORIES.find(c => c.slug === 'les-blancs')!
  return cat.services.map(s => ({ service: s.slug }))
}

export function generateMetadata({ params }: { params: { service: string } }) {
  const cat = CATEGORIES.find(c => c.slug === 'les-blancs')!
  const svc = cat.services.find(s => s.slug === params.service)
  if (!svc) return {}
  return { title: `${svc.name} | Cocktail Média`, description: svc.desc }
}

export default function LesBlancsServicePage({ params }: { params: { service: string } }) {
  const cat = CATEGORIES.find(c => c.slug === 'les-blancs')!
  if (!cat.services.find(s => s.slug === params.service)) notFound()
  return <ServicePage catSlug="les-blancs" serviceSlug={params.service} />
}
