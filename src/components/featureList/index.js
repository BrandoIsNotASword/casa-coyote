import React from 'react'
import PropTypes from 'prop-types'
import { GiCutDiamond, GiOakLeaf, GiStarsStack, GiAirtightHatch } from 'react-icons/gi'
import { Flex, SimpleGrid, Text, Box } from '@chakra-ui/core'

function FeatureItem({ icon, title, desc }) {
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

function FeatureList() {
  return (
    <SimpleGrid spacing={10} columns={{ md: 2, xl: 4 }}>
      <FeatureItem
        icon={<GiCutDiamond size="3rem" />}
        title="BEST LOCATION"
        desc="Located next to Be Tulum, Casa Malca & Nomade, 5 minute walking distance from the best restaurants, beach clubs, bars & shopping area."
      />
      <FeatureItem
        icon={<GiOakLeaf size="3rem" />}
        title="EXPERIENCE NATURE"
        desc="We offer a unique experience inside the magic energy of Tulum, ideal for couples, families, yogis & solo adventures."
      />
      <FeatureItem
        icon={<GiStarsStack size="3rem" />}
        title="AMMENITIES"
        desc="For the spa lovers, “Yáan Wellness Spa” is next to us. The property has 4 suites and a complete luxury Loft. 1 minute from the taxi station & Free Wifi."
      />
      <FeatureItem
        icon={<GiAirtightHatch size="3rem" />}
        title="PRIVATE ROOM"
        desc="You will feel like home. The property has 4 private rooms, and a complete Luxury Loft with a complete kitchen, fridge, stove, sofa, living room and center table."
      />
    </SimpleGrid>
  )
}

export default FeatureList
