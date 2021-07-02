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
    overflow-y: scroll;
    height: 100%;
  }
`


export const ImageContainer = styled.div`
  /* font-size: 2rem; */
  width: 30%;
  padding: 0 2rem;
  @media ${props => props.theme.breakpoints.lg} {
    width: 100%;
    height: 100%;
    padding-bottom: 25rem;
    padding-top: 1rem;
  }
`
export const MainContainer = styled.div`
  font-size: 2rem;
  width: 70%;
  position: relative;
  overflow-y: scroll;
  /* padding: 3rem; */
  @media ${props => props.theme.breakpoints.lg} {
    width: 100%;
    height: 100%;
  }
`

export const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
`