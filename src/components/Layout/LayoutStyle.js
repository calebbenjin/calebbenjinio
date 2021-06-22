import styled from 'styled-components'



export const Layout = styled.div`
  color: #fff;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: row;
  

  @media ${props => props.theme.breakpoints.lg} {
    display: flex;
    flex-flow: column;

  }
`


export const ImageContainer = styled.div`
  font-size: 2rem;
  width: 35%;
  background: #eee;
  padding: 2rem;
  @media ${props => props.theme.breakpoints.lg} {
    width: 100%;
    height: 20vh;
  }
`
export const MainContainer = styled.div`
  font-size: 2rem;
  width: 65%;
  position: relative;
  overflow-y: scroll;
  /* padding: 3rem; */
  @media ${props => props.theme.breakpoints.lg} {
    width: 100%;
    height: 80vh;
  }
`

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`