import React from 'react'
import PropTypes from 'prop-types'
import { Flex, SimpleGrid, Text, Box } from '@chakra-ui/core'

export function FeatureItem({ icon, title, desc }) {
  return (
    <Flex align="center" direction="column">
      <Box>{icon}</Box>
      <Text fontWeight="bold" fontSize="lg" marginTop={4} marginBottom={2}>
        {title}
      </Text>
      <Text>{desc}</Text>
    </Flex>
  )
}

FeatureItem.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  desc: PropTypes.string,
}

export function FeatureList({ children }) {
  return (
    <SimpleGrid spacing={10} columns={{ md: 2, xl: 4 }}>
      {children}
    </SimpleGrid>
  )
}

FeatureList.propTypes = {
  children: PropTypes.node,
}

export default FeatureList
