import ServicePage from '@/components/ServicePage'
import { CATEGORIES } from '@/lib/data'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  const cat = CATEGORIES.find(c => c.slug === 'les-digestifs')!
  return cat.services.map(s => ({ service: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params
  const cat = CATEGORIES.find(c => c.slug === 'les-digestifs')!
  const svc = cat.services.find(s => s.slug === service)
  if (!svc) return {}
  return { title: `${svc.name} | Cocktail Média`, description: svc.desc }
}

export default async function LesDigestifsServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params
  const cat = CATEGORIES.find(c => c.slug === 'les-digestifs')!
  if (!cat.services.find(s => s.slug === service)) notFound()
  return <ServicePage catSlug="les-digestifs" serviceSlug={service} />
}
