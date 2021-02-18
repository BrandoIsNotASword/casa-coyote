import React from 'react'
import { Flex } from '@chakra-ui/react'
import PropTypes from 'prop-types'

function Main({ children, ...restProps }) {
  return (
    <Flex direction="column" flex={1} {...restProps}>
      {children}
    </Flex>
  )
}

Main.propTypes = {
  children: PropTypes.node,
}

Main.defaultProps = {
  children: null,
}

export default Main
