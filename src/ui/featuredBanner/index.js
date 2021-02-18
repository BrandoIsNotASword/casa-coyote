import React from 'react'
import PropTypes from 'prop-types'

import { Box, Flex } from '@chakra-ui/react'

function FeaturedBanner({ children, image, opacity, ...restProps }) {
  return (
    <Flex
      backgroundColor="gray.800"
      direction="column"
      padding={4}
      align="center"
      justify="center"
      height={{ base: '350px', lg: '400px' }}
      {...restProps}
    >
      <Box opacity={opacity}>{image}</Box>
      <Box zIndex={1}>{children}</Box>
    </Flex>
  )
}

FeaturedBanner.propTypes = {
  opacity: PropTypes.string,
  image: PropTypes.node,
  children: PropTypes.node,
}

FeaturedBanner.defaultProps = {
  opacity: '0.65',
  image: null,
  children: null,
}

export default FeaturedBanner
