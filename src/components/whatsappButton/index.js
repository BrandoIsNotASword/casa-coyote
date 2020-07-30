import React from 'react'
import { Flex, Link } from '@chakra-ui/core'
import { FaWhatsapp } from 'react-icons/fa'

function WhatsappButton() {
  return (
    <Flex
      position="fixed"
      bottom="0"
      right="0"
      backgroundColor="#4dc247"
      borderRadius="100px"
      size="60px"
      justify="center"
      align="center"
      color="white"
      marginBottom={{ base: '70px', xl: '10px' }}
      marginRight="10px"
      boxShadow="0px 0px 6px rgba(0,0,0,0.25)"
    >
      <Link
        href="https://api.whatsapp.com/send?phone=5219841135252&text=%22Hi,%20I%20want%20more%20information%20about...%22"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp size="2.25rem" />
      </Link>
    </Flex>
  )
}

export default WhatsappButton
