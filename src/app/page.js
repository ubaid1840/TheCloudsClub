'use client'
import './globals.css'
import Link from "next/link";
import {
  Button, Stack, Image, Img, useDisclosure, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex,
  useDimensions,
} from "@chakra-ui/react";
import { useEffect, useState } from 'react';
import Footer from '@/components/footer';
import Heading from '@/components/Heading';
import MyDrawer from '@/components/myDrawer';
import { useRouter } from 'next/navigation'

export default function Home() {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const router = useRouter()

  const [containHeight, setContainerHeight] = useState('1000px')
  const [imgWidth, setImgWidth] = useState('1000px')
  const [stackMargin, setStackMargin] = useState('1000px')
  const [loading, setLoading] = useState(false);

  

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const minHeight = 80;
      const minWidth = 100;
      const newHeight = Math.max(minHeight, 1000 - position * 6);
      const newWidth = Math.max(minWidth, 1000 - position * 6);
      setContainerHeight(`${newHeight}px`);
      setStackMargin(`${newHeight + 220}px`)
      setImgWidth(`${newWidth}px`);
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up: Remove scroll event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
  useEffect(() => {
    onOpen()
  }, [])

  return (
    <>
      <div style={{ height: containHeight, maxHeight: '100vh', alignItems: 'center', justifyContent: 'center', display: 'flex', marginTop: '40px', backgroundColor: 'black', width: '100vw', position: 'fixed', }}>
        <Img style={{ maxWidth: '85%', width: imgWidth }} src='/logo.jpg' alt='The cloud club logo' />
      </div>
      <Stack style={{ width: '100%', display: 'flex', backgroundColor: 'black', alignItems: 'center', gap: 0, paddingTop: stackMargin, paddingRight:'10px', paddingLeft:'10px' }}>
        <Heading />
      </Stack>

      <Modal isOpen={isOpen} onClose={onClose} size={{base : 'sm', md : 'md', lg : 'md'}} closeOnOverlayClick={false} >
        <ModalOverlay bg='whiteAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)' />
        <ModalContent style={{ borderRadius: '10px' }} >
          <ModalBody style={{ backgroundColor: 'black', color: 'white', padding: 30, borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
              <Img style={{ height: 120, width: 220, marginTop: 20, marginBottom: 20 }} src='/logo.jpg' alt='The cloud club logo' />
              <div style={{ fontSize: '24px', fontWeight: 'bold', margin: 10 }}>
                SIND SIE 21 ODER ÄLTER?
              </div>
              <div style={{ textAlign: 'center', fontWeight: '500', fontSize: '16px' }}>
                Ich stimme den Allgemeinen Geschäftsbedingungen und der Datenschutzerklärung zu.
              </div>
              <div style={{ textAlign: 'center', display: 'flex', fontWeight: '500', fontSize: '16px', marginTop: 10, marginBottom: 10 }}>
                Diese Website sammelt Cookies, um ein besseres Benutzererlebnis zu bieten. Wir sammeln Cookies, um den Datenverkehr und die Leistung unserer Website zu analysieren. Wir sammeln niemals personenbezogene Daten und sorgen dafür, dass Sie ein tolles Einkaufserlebnis haben.
              </div>
            </div>


          </ModalBody>

          <ModalFooter style={{ padding: 0, margin: 0, width: '100%', justifyContent: 'space-between', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
            <button className='modal-btn' style={{ zIndex: 1, borderBottomLeftRadius: '10px', }} onClick={() => window.open('https://www.google.com', '_blank')}>
              No
            </button>
            <button className='modal-btn' style={{ borderWidth: 0, borderStyle: 'none', borderBottomRightRadius: '10px' }} onClick={onClose}>Yes</button>

          </ModalFooter>
        </ModalContent>
      </Modal>
    </>

  )
}


