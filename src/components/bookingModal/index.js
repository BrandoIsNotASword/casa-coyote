import React, { useEffect } from 'react'
import { Modal, ModalOverlay, ModalContent, Button, useDisclosure, useTheme } from '@chakra-ui/core'

function BookingModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const theme = useTheme()

  useEffect(() => {
    window.addEventListener('message', onMessage, false)
    return () => window.removeEventListener('message', onMessage, false)
  })

  const onMessage = (e) => {
    if (e.data.func === 'zbeCloseBooking') onClose()
  }

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent marginY={0} marginX="auto" minHeight="100vh" maxWidth={theme.breakpoints.lg}>
          <iframe
            title="Booking Engine"
            style={{ height: '100vh', width: '100%' }}
            src="https://rbe.zaviaerp.com/?zbe_hotel_id=259&lng=en"
          />
        </ModalContent>
      </Modal>
    </>
  )
}

export default BookingModal
