import React from 'react'
import PropTypes from 'prop-types'
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
} from '@chakra-ui/react'

function Modal({ children, isOpen, onClose, wrapperStyle, ...restProps }) {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
      <ModalOverlay />
      <ModalContent marginY={0} marginX="auto" minHeight="100vh" maxWidth="100%" {...wrapperStyle}>
        <ModalHeader />
        <ModalCloseButton />
        <ModalBody {...restProps}>{children}</ModalBody>
      </ModalContent>
    </ChakraModal>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  wrapperStyle: PropTypes.object,
  onClose: PropTypes.func,
}

Modal.defaultProps = {
  isOpen: false,
  wrapperStyle: {},
  onClose: () => {},
}

export default Modal
