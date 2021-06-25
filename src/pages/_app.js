import { ThemeProvider } from 'styled-components'
import theme from '@/styles/theme'
import '../styles/global.css'
import GlobalStyle from '@/styles/globalStyles'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
