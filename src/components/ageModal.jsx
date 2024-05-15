import { Img, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay } from '@chakra-ui/react'
import React from 'react'

function AgeModal({ isOpen, onClose, onYesClick }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={{ base: 'sm', md: 'md', lg: 'md' }} closeOnOverlayClick={false} >
    <ModalOverlay bg='whiteAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)' />
    <ModalContent style={{ borderRadius: '10px' }} >
      <ModalBody style={{ backgroundColor: 'black', color: 'white', padding: 30, borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <Img style={{ height: 120, width: 120, marginTop: 20, marginBottom: 20 }} src='/logo.png' alt='The cloud club logo' />
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
        Ablehnen
        </button>
        <button className='modal-btn' style={{ borderWidth: 0, borderStyle: 'none', borderBottomRightRadius: '10px' }} onClick={onYesClick}>Annehmen</button>

      </ModalFooter>
    </ModalContent>
  </Modal>
  )
}

export default AgeModal