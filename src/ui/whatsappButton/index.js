import React from 'react'
import PropTypes from 'prop-types'

import { Flex, Link } from '@chakra-ui/react'
import { FaWhatsapp } from 'react-icons/fa'

function WhatsappButton({ bottom, right, href, ...restProps }) {
  return (
    <Flex
      bottom={bottom}
      right={right}
      zIndex="1"
      position="fixed"
      backgroundColor="#4dc247"
      borderRadius="100px"
      justify="center"
      align="center"
      color="white"
      boxShadow="0px 0px 6px rgba(0,0,0,0.25)"
      {...restProps}
    >
      <Link
        padding={3}
        href={href}
        width="100%"
        height="100%"
        display="inline-grid"
        alignItems="center"
        justifyItems="center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size="2.35rem" />
      </Link>
    </Flex>
  )
}

WhatsappButton.propTypes = {
  bottom: PropTypes.string,
  right: PropTypes.string,
  href: PropTypes.string,
}

WhatsappButton.defaultProps = {
  bottom: '20px',
  right: '20px',
  href: '',
}

export default WhatsappButton
