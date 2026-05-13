import CategoryPage from '@/components/CategoryPage'
import { CATEGORIES } from '@/lib/data'

const cat = CATEGORIES.find(c => c.slug === 'les-digestifs')!

export const metadata = {
  title: `${cat.name} — ${cat.type} | Cocktail Média`,
  description: cat.tagline.replace(/<[^>]+>/g, ''),
}

export default function LesDigestifsPage() {
  return <CategoryPage slug="les-digestifs" />
}
