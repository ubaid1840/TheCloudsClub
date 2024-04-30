
'use client'

import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import Footer from '@/components/footer'
import './globals.css'
import Header from '@/components/header'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export function Providers({ children }) {

  const pathName = usePathname()
  useEffect(()=>{
    console.log(pathName)
  },[pathName])

  
  return (
    <ChakraProvider theme={theme}>
      <Header />
      {children}
      <Footer />
    </ChakraProvider>
  )

}