import { Layout, ImageContainer, MainContainer, Container } from './ArticleStyle'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import SmallFooter from '@/components/Footer/SmallFooter'
import { useRouter } from 'next/router'
import { articles } from '@/components/data'

export default function SinglePage() {
  const router = useRouter()

  const article = articles[router.query.id]

  console.log(article)


  if(!article) return <p>Page Loading...</p>
  return (


    <Layout>
      <ImageContainer>
        <img src={article.img} alt="" />
      </ImageContainer>
      <MainContainer>
        <Header />
        <Container>
          <h3>{article.title} &rarr;</h3>
          <p>{article.body}</p>
          <SmallFooter />
        </Container>
        <Footer />
      </MainContainer>
    </Layout>
  )
}
