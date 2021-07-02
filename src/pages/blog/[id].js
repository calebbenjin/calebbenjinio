import { Layout, ImageContainer, MainContainer, Container } from '@/components/Layout/ArticleLayout'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import SmallFooter from '@/components/Footer/SmallFooter'
import { useRouter } from 'next/router'
import { articles } from '@/components/data'
import Logo from '@/components/Logo'
import Image from 'next/image'

export default function SinglePage() {
  const router = useRouter()

  const article = articles[router.query.id]

  console.log(article)


  if(!article) return <p>Page Loading...</p>
  return (


    <Layout>
      <ImageContainer>
        <div className="logo">
          <Logo />
        </div>
        <Image src={article.img} alt="" />
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
