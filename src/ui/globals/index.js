import React from 'react'
import { Text, Heading } from '@chakra-ui/react'

export const LIS_GAP = 3
export const COL_GAP = 8
export const ROW_GAP = 10
export const GAP = 6

export function H1({ children, ...restProps }) {
  return (
    <Heading as="h1" {...restProps}>
      {children}
    </Heading>
  )
}

export function H2({ children, ...restProps }) {
  return (
    <Heading as="h2" opacity="0.85" fontWeight="light" fontSize={{ base: 'xl' }} {...restProps}>
      {children}
    </Heading>
  )
}

export function H3({ children, ...restProps }) {
  return (
    <Heading as="h3" fontSize="2xl" {...restProps}>
      {children}
    </Heading>
  )
}

export function H4({ children, ...restProps }) {
  return (
    <Heading
      as="h4"
      fontSize="sm"
      letterSpacing="wide"
      textTransform="uppercase"
      fontWeight="light"
      {...restProps}
    >
      {children}
    </Heading>
  )
}

export function P({ children, ...restProps }) {
  return (
    <Text maxW opacity="0.85" {...restProps}>
      {children}
    </Text>
  )
}
