import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Box } from '@chakra-ui/react'

import Modal from '../modal'

function Popup({ children, timeout, ...restProps }) {
  const [isOpen, setIsOpen] = useState()

  useEffect(() => {
    if (!sessionStorage.getItem('isClosed')) {
      const timer = setTimeout(() => setIsOpen(true), timeout)
      return () => clearTimeout(timer)
    }
  }, [])

  const onClose = () => {
    sessionStorage.setItem('isClosed', true)
    setIsOpen(false)
  }

  return (
    <Modal
      isOpen={isOpen}
      display="flex"
      alignItems="center"
      justifyContent="center"
      wrapperStyle={{
        background: 'transparent',
        color: 'white',
      }}
      onClose={() => onClose()}
    >
      <Box
        height={{ base: '300px', md: '400px' }}
        width={{ base: '300px', md: '400px' }}
        boxShadow="0px 0px 5px rgba(0,0,0,0.5)"
        {...restProps}
      >
        {children}
      </Box>
    </Modal>
  )
}

Popup.propTypes = {
  timeout: PropTypes.number,
}

Popup.defaultProps = {
  timeout: 15000,
}

export default Popup
