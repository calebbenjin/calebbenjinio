import styled from 'styled-components'


export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  right: 0;
  height: 14%;
  width: 80%;
  background: ${props => props.theme.colors.darkColor};
  display: flex;
  justify-content: space-between;
  border-top-left-radius: 4px;
`

export const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  font-family: ${props => props.theme.fonts.mainFont};
  h6 {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 1.5rem;
  }
  p {
    /* letter-spacing: 1px; */
    font-weight: 700;
    color: ${props => props.theme.colors.primaryColor};
    margin: 0;
    display: flex;
    font-size: 1.2rem;
    align-items: center;
  }
`;