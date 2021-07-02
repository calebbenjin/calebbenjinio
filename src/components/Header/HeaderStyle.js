import styled from 'styled-components'




export const Header = styled.header`
  background: ${props => props.theme.colors.darkColor};
  padding: 20px 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 15%;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 9;

  @media ${props => props.theme.breakpoints.lg} {
    display: none;
  }
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 1rem auto;
  letter-spacing: 1px;
  font-weight: 400;
  text-transform: uppercase;
  a {
    font-size: 13px;
    transition: all 0.2s ease-in;
    margin: 0 1rem;
    &:hover {
      color: ${props => props.theme.colors.primaryColor}
    }
  }
  /* font-family:  cursive; */
`

export const Toggle = styled.div`
  background: ${props => props.theme.colors.primaryColor};
  width: 35px;
  height: 35px;
  border-radius: 50%;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

