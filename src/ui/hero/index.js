import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box, Stack, background } from '@chakra-ui/react'

import { H1, H2 } from '../globals'

export function HeroBody({ children, ...restProps }) {
  return (
    <Stack
      justify="center"
      maxWidth={{ base: '300px', md: '420px' }}
      spacing={2}
      {...restProps}
      zIndex={1}
    >
      {children}
    </Stack>
  )
}

HeroBody.propTypes = {
  children: PropTypes.node,
}

HeroBody.defaultProps = {
  children: null,
}

export function HeroTitle({ children, ...restProps }) {
  return (
    <H1
      color="white"
      fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
      lineHeight={1.15}
      {...restProps}
    >
      {children}
    </H1>
  )
}

HeroTitle.propTypes = {
  children: PropTypes.node,
}

HeroTitle.defaultProps = {
  children: null,
}

export function HeroSubtitle({ children, ...restProps }) {
  return (
    <H2
      color="white"
      fontWeight="light"
      fontSize={{ base: 'xl', md: '2xl' }}
      marginTop={0}
      {...restProps}
    >
      {children}
    </H2>
  )
}

HeroSubtitle.propTypes = {
  children: PropTypes.node,
}

HeroSubtitle.defaultProps = {
  children: null,
}

export function HeroCta({ children, ...restProps }) {
  return (
    <Box marginTop={5} width={{ sm: 'fit-content' }} {...restProps}>
      {children}
    </Box>
  )
}

HeroCta.propTypes = {
  children: PropTypes.node,
}

HeroCta.defaultProps = {
  children: null,
}

export function Hero({ children, image, objectPosition, ...restProps }) {
  return (
    <Flex
      backgroundColor="gray.900"
      paddingX={{ base: 6, md: 10, lg: 16, xl: 24, xx: 40 }}
      height={{ base: '300px', md: '400px', lg: '500px', xl: '600px' }}
      width="100%"
      position="relative"
      overflow="hidden"
      {...restProps}
    >
      {image}
      {children}
    </Flex>
  )
}

Hero.propTypes = {
  image: PropTypes.node,
  children: PropTypes.node,
}

Hero.defaultProps = {
  image: null,
  children: null,
}
