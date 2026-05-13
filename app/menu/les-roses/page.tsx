import CategoryPage from '@/components/CategoryPage'
import { CATEGORIES } from '@/lib/data'

const cat = CATEGORIES.find(c => c.slug === 'les-roses')!

export const metadata = {
  title: `${cat.name} — ${cat.type} | Cocktail Média`,
  description: cat.tagline.replace(/<[^>]+>/g, ''),
}

export default function LesRosesPage() {
  return <CategoryPage slug="les-roses" />
}
