import React from 'react'
import { Heading } from '@chakra-ui/core'

export const H1 = ({ children, ...restProps }) => (
  <Heading as="h1" {...restProps}>
    {children}
  </Heading>
)

export const H2 = ({ children, ...restProps }) => (
  <Heading as="h2" fontWeight="light" fontSize="2xl" {...restProps}>
    {children}
  </Heading>
)

export const H3 = ({ children, ...restProps }) => (
  <Heading as="h3" fontSize="4xl" {...restProps}>
    {children}
  </Heading>
)

export const H4 = ({ children, ...restProps }) => (
  <Heading as="h4" fontWeight="bold" opacity="0.85" fontSize="md" {...restProps}>
    {children}
  </Heading>
)
