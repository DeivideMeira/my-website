import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/theme'
import { AppProps } from 'next/app'
import Header from '../components/Header'
import { ContainerLayout } from '../components/Container'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Header/>
      <ContainerLayout>
        <Component {...pageProps} />
      </ContainerLayout>
    </ChakraProvider>
  )
}

export default MyApp

