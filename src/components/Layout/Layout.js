import { Layout, ImageContainer, MainContainer, Container } from './LayoutStyle'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { DownloadBtn } from '@/components/Button/Button'
import SmallFooter from '@/components/Footer/SmallFooter'
import Logo from '../Logo'
import Slide from 'react-reveal/Slide'
import MobileFooter from '../Footer/MobileFooter'

export default function LayoutPage({ children }) {
  return (
    <Layout>
      <ImageContainer className='sliderImg'>
        <Logo />
        <DownloadBtn title="Download CV" />
      </ImageContainer>
      <MainContainer>
          <Header />
        <Slide left>
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
