import { Layout, ImageContainer, MainContainer, Container } from './LayoutStyle'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import SmallFooter from '@/components/Footer/SmallFooter'
import Logo from '../Logo'
import Slide from 'react-reveal/Slide'
import MobileFooter from '../Footer/MobileFooter'

export default function LayoutPage({ children }) {
  return (
    <Layout>
      <ImageContainer className='sliderImg'>
        <Logo />
      </ImageContainer>
      <MainContainer>
        <Slide left>
          <Header />
          <Container>
            {children}
            <SmallFooter />
          </Container>
        </Slide>
          <MobileFooter />
        <Footer />
      </MainContainer>
    </Layout>
  )
}
