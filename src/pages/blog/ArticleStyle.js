import styled from 'styled-components'
import userImg from '@/assets/slider.jpg'



export const Layout = styled.div`
  color: #fff;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: row;
  

  @media ${props => props.theme.breakpoints.lg} {
    display: flex;
    flex-flow: column;
    height: 100%;
    overflow-y: scroll;
  }
`


export const ImageContainer = styled.div`
  font-size: 2rem;
  width: 30%;
  padding: 0 3rem;
  overflow: hidden;
  object-fit: cover;
  position: relative;
  img {
    height: 100vh;
    width: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
  @media ${props => props.theme.breakpoints.lg} {
    width: 100%;
    height: 30%;
    overflow: hidden;
    padding: 0 3rem;
    img {
      height: 10%;
      width: 100%;
      object-fit: cover;
    }
  }
`
export const MainContainer = styled.div`
  font-size: 2rem;
  width: 70%;
  position: relative;
  overflow-y: scroll;
  /* padding: 3rem; */

  h3 {
    margin: 2rem 0;
  }
  @media ${props => props.theme.breakpoints.lg} {
    width: 100%;
    height: 80vh;
    overflow-y: hidden;
  }
`

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`