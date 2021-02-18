import React from 'react'
import PropTypes from 'prop-types'

import { P } from '../globals'
import { Stack, Box } from '@chakra-ui/react'

export function CategoryItem({ icon, text, ...restProps }) {
  return (
    <Stack flex="0 0 auto" isInline spacing={2} {...restProps} align="center">
      {icon && (
        <Box size="40px" borderRadius="100px" overflow="hidden">
          {icon}
        </Box>
      )}
      <P opacity="0.85">{text}</P>
    </Stack>
  )
}

CategoryItem.propTypes = {
  image: PropTypes.node,
  text: PropTypes.string,
}

CategoryItem.defaultProps = {
  image: null,
  text: '',
}

export function CategoryList({ children, ...restProps }) {
  return (
    <Stack columns={1} align="center" isInline spacing={4} {...restProps} overflowX="auto">
      {children}
    </Stack>
  )
}

CategoryList.propTypes = {
  children: PropTypes.node,
}

CategoryList.defaultProps = {
  children: null,
}
