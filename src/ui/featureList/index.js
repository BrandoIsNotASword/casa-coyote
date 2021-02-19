import React from 'react'
import PropTypes from 'prop-types'
import { SimpleGrid, Box, Heading, Stack, Flex } from '@chakra-ui/react'

import { LIS_GAP, COL_GAP, P } from '../globals'

export function FeatureItem({ title, desc, image, icon, button, ...restProps }) {
  return (
    <Stack direction="column" width="100%" spacing={LIS_GAP} {...restProps}>
      {image && (
        <Box
          borderRadius="15px"
          position="relative"
          paddingBottom="66%"
          overflow="hidden"
          marginBottom={1}
        >
          {image}
        </Box>
      )}
      {icon && icon}
      <Heading as="h4" fontWeight="bold" fontSize="xl">
        {title}
      </Heading>
      {desc && typeof desc === 'string' ? <P>{desc}</P> : desc}
      {button && (
        <Flex alignItems="flex-end" height="100%" width="100%">
          {button}
        </Flex>
      )}
    </Stack>
  )
}

FeatureItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.node,
  image: PropTypes.node,
  icon: PropTypes.node,
  button: PropTypes.node,
}

FeatureItem.defaultProps = {
  title: '',
  desc: null,
  image: null,
  icon: null,
  button: null,
}

export function FeatureList({ children, columns, ...restProps }) {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: columns }} spacing={COL_GAP} {...restProps}>
      {children}
    </SimpleGrid>
  )
}

FeatureList.propTypes = {
  columns: PropTypes.node,
  children: PropTypes.node,
}

FeatureList.defaultProps = {
  columns: 3,
  children: null,
}
