import { ChakraProvider } from '@chakra-ui/react'

import theme from '../styles/theme'
import { AppProps } from 'next/app'
import { HeaderLayout } from '../Layouts/header'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <HeaderLayout/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp