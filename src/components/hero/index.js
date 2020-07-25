import React from 'react'
import { Flex, Image, Text, Box } from '@chakra-ui/core'

import bg from '../../images/background-casa-coyote.jpg'
import heroLogo from '../../images/hero-logo.png'

function Hero() {
  return (
    <Flex
      background={`linear-gradient(rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5) 100%), url(${bg})`}
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundColor="gray.800"
      padding={{ base: 6, md: 10, lg: 16, xl: 24, xx: 40 }}
      height={{ base: '300px', md: '400px', lg: '500px', xl: '600px' }}
      justify="center"
      align="center"
      direction="column"
    >
      <Box width="100%" maxWidth={{ base: '250px', md: '350px', lg: '500px' }}>
        <Image src={heroLogo} alt="Hotel Casa Coyote Tulum" />
      </Box>
      <Box textAlign="center" marginTop={4}>
        <Text
          opacity="0.85"
          color="white"
          fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
          maxWidth={{ md: '400px', lg: '500px' }}
        >
          100% eco-hotel with private suites in Tulum, México.
        </Text>
      </Box>
    </Flex>
  )
}

export default Hero
