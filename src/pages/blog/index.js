import LayoutPage from '@/components/Layout/Layout'
import SectionTitle from '@/components/SectionTitle'
import CardList from '@/components/CardList'
import { articles } from '@/components/data'


export default function BlogPage() {
  return (
    <LayoutPage>
      <SectionTitle title="LATEST POST" sub="Blog" />

      <CardList articles={ articles } />
    </LayoutPage>
  )
}
