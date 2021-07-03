import styled, { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize};


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html { 
    font-size: 70%;
    -webkit-font-smoothing: antialiased; 
    scroll-behavior: smooth;
    cursor: default;
    letter-spacing: 1.5px;
  }

  .btnIcon {
    font-size: 3rem;
    margin-right: 1rem;
  }
  .infoIcon {
    margin-right: 0.5rem;
    font-size: 2rem;
  }

  ul {
    margin: 1rem 0;
  }

  li{
    ${'' /* list-style: none; */}
    font-size: 1.5rem;
    line-height: 1.7;
    color: ${props => props.theme.colors.textColor}
  }

  a {
      color: ${props => props.theme.colors.textColor};
      text-decoration: none;
      font-family: ${props => props.theme.fonts.heading};
      font-weight: 400;
    }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.heading}
  }

  .selected {
    color: ${props => props.theme.colors.primaryColor};
    border-bottom: solid 2px ${(props) => props.theme.colors.primaryColor};
  }

  p {
      line-height: 1.5;
      font-weight: 400;
      color: ${props => props.theme.colors.textColor};
      margin: 0 0 20px;
    }

  body {
    font-family: ${props => props.theme.fonts.text};
    color: ${props => props.theme.colors.textColor};
    background: ${props => props.theme.colors.darkColor};
  }
;
`

export default GlobalStyle;
