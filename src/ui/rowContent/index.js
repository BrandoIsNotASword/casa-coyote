import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player/youtube'

import { Box, Text, Stack, SimpleGrid } from '@chakra-ui/react'

import { H3, P } from '../globals'
import Carousel from '../carousel'

export function ColImage({ image, desc, ...restProps }) {
  return (
    <ColContent
      overflow="hidden"
      position="relative"
      minHeight={{ lg: '400px' }}
      paddingBottom={{ base: '66%', lg: '0%' }}
      borderRadius="15px"
      backgroundColor="gray.200"
      {...restProps}
    >
      {image}
      {desc && (
        <Text
          color="white"
          fontWeight="bold"
          position="absolute"
          bottom="0"
          right="0"
          width="100%"
          background="linear-gradient(0deg,rgba(0,0,0,0.35) 0%,rgba(255,255,255,0) 100%)"
          padding={4}
          textAlign="right"
          textShadow="1px 1px 5px rgba(0,0,0,0.85)"
        >
          {desc}
        </Text>
      )}
    </ColContent>
  )
}

ColImage.propTypes = {
  desc: PropTypes.string,
  image: PropTypes.node,
}

ColImage.defaultProps = {
  desc: '',
  image: null,
}

export function ColVideo({ url, ...restProps }) {
  return (
    <ColContent height={{ base: '200px', sm: '250px', md: '400px' }} {...restProps}>
      <ReactPlayer width="100%" height="100%" url={url} />
    </ColContent>
  )
}

ColVideo.propTypes = {
  url: PropTypes.string,
}

ColVideo.defaultProps = {
  url: '',
}

export function ColCarousel({ children, ...restProps }) {
  return (
    <ColContent overflow="hidden" borderRadius="15px" {...restProps}>
      <Carousel dotColor="black">{children}</Carousel>
    </ColContent>
  )
}

export function ColInfo({ title, subtitle, children, ...restProps }) {
  return (
    <ColContent justify="center" padding={{ base: 6, md: 12 }} {...restProps}>
      <Stack spacing={4}>
        <Box>
          <H3>{title}</H3>
          {subtitle && <P>{subtitle}</P>}
        </Box>
        {children}
      </Stack>
    </ColContent>
  )
}

ColInfo.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
}

ColInfo.defaultProps = {
  title: '',
  subtitle: '',
  children: null,
}

export function ColContent({ children, ...restProps }) {
  return (
    <Stack boxSizing="border-box" {...restProps}>
      {children}
    </Stack>
  )
}

ColContent.propTypes = {
  children: PropTypes.node,
}

ColContent.defaultProps = {
  children: null,
}

const StyledSimpleGrid = styled(SimpleGrid)`
  & > :last-child {
    grid-row: ${(props) => props.reversed && 1};
  }

  @media (min-width: 1024px) {
    & > :last-child {
      grid-row: initial;
    }
  }
`

export function RowContent({ children, reversedInMobile, ...restProps }) {
  return (
    <StyledSimpleGrid
      gridAutoFlow="dense"
      columns={{ base: 1, lg: 2 }}
      spacing={{ base: 6, lg: 10 }}
      reversed={reversedInMobile}
      direction={{ base: 'column', lg: 'row' }}
      {...restProps}
    >
      {children}
    </StyledSimpleGrid>
  )
}

RowContent.propTypes = {
  reversedInMobile: PropTypes.bool,
  children: PropTypes.node,
}

RowContent.defaultProps = {
  reversedInMobile: false,
  children: null,
}
