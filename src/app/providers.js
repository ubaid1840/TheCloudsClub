
'use client'

import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import Footer from '@/components/footer'
import './globals.css'
import Header from '@/components/header'
import { Suspense } from 'react'
import Loading from './loading'

export function Providers({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <Suspense fallback={Loading}>
        <Header />
        {children}
        <Footer />
      </Suspense>
    </ChakraProvider>
  )

}