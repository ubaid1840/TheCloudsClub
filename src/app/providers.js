'use client'

import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import Footer from '@/components/footer'
import './globals.css'
import Header from '@/components/header'


export function Providers(props) {
  const { children, ...rest } = props
 
  return (
    <ChakraProvider theme={theme}>
          {children}
    </ChakraProvider>
  )

}