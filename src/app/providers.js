'use client'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import Footer from '@/components/footer'
import './globals.css'
import Header from '@/components/header'
import { useEffect, useState } from 'react'
import Loader from './loading'
import AuthContextProvider from '@/store/context/AuthContext'


export function Providers(props) {
  const [visible, setVisible] = useState(false)


  useEffect(() => {
    if (!visible) {
      setVisible(true)
    }
  }, [visible])

  const { children, ...rest } = props

  return (
    <ChakraProvider theme={theme}>
      <AuthContextProvider>
        {!visible ? <Loader /> :
          children}
      </AuthContextProvider>
    </ChakraProvider>
  )

}