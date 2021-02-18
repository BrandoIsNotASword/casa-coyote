import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box, Stack } from '@chakra-ui/react'

import { flexPositions } from '../utils'

function Nav({ children, ...restProps }) {
  return (
    <Stack
      as="nav"
      isInline
      spacing={4}
      alignItems="center"
      overflowX="auto"
      height="100%"
      flex={{ base: '0 0 100%', md: 'auto' }}
      {...restProps}
    >
      {children}
    </Stack>
  )
}

function Menu({ children, logo, rightButton, navPosition, ...restProps }) {
  return (
    <Flex
      justify="space-between"
      width="100%"
      minHeight={{ base: 'auto', lg: '65px' }}
      paddingX={{ base: 6, lg: 20 }}
      paddingTop={{ base: 6, lg: 0 }}
      paddingBottom={{ base: 0, md: 3, lg: 0 }}
      alignItems="center"
      flexWrap="wrap"
      {...restProps}
    >
      {logo}
      {rightButton && (
        <Box marginLeft={4} order={{ base: 0, md: 1 }}>
          {rightButton}
        </Box>
      )}
      <Nav
        order={{ base: 1, md: 0 }}
        justify={{ base: 'flex-start', md: flexPositions[navPosition] }}
      >
        {children}
      </Nav>
    </Flex>
  )
}

Menu.propTypes = {
  navPosition: PropTypes.oneOf(['left', 'center', 'right']),
  logo: PropTypes.node,
  children: PropTypes.node,
  rightButton: PropTypes.node,
}

Menu.defaultProps = {
  logo: '',
  children: '',
  rightButton: null,
  navPosition: 'right',
}

export default Menu
