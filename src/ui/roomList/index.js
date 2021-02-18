import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import { SimpleGrid, Flex, Box, Stack, Heading, Text } from '@chakra-ui/react'

import Carousel from '../carousel'
import { P } from '../globals'

export function RoomItem({ images, characteristics, title, desc, cta, ...restProps }) {
  return (
    <Flex direction="column" overflow="hidden" {...restProps}>
      <Carousel borderRadius="15px" flexShrink={0}>
        {images.map((image) => (
          <Box
            key={v4()}
            backgroundImage={`url(${image})`}
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            paddingBottom="66%"
          />
        ))}
      </Carousel>
      <Box marginTop={4}>
        <Heading as="h4" fontWeight="bold" fontSize="xl">
          {title}
        </Heading>
        {characteristics.length !== 0 && (
          <Stack isInline>
            <Text fontSize="md" opacity="0.65">
              {characteristics.join(' · ')}
            </Text>
          </Stack>
        )}
        <P flex="100%" marginTop={2}>
          {desc}
        </P>
        {cta && <Box marginTop={2}>{cta}</Box>}
      </Box>
    </Flex>
  )
}

RoomItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  images: PropTypes.array,
  characteristics: PropTypes.array,
  cta: PropTypes.node,
}

RoomItem.defaultProps = {
  title: '',
  desc: '',
  images: [],
  characteristics: [],
  cta: null,
}

export function RoomList({ children, ...restProps }) {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} minWidth={0} {...restProps}>
      {children}
    </SimpleGrid>
  )
}

RoomList.propTypes = {
  children: PropTypes.node,
}

RoomList.defaultProps = {
  children: null,
}
