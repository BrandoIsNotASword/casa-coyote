import React from 'react'
import { Flex, Image, Box, Text, Divider } from '@chakra-ui/core'

import footerLogo from '../../images/casa-coyote-logo-footer.png'

function Footer() {
  return (
    <Flex
      as="footer"
      direction="column"
      justify="space-between"
      backgroundColor="black"
      color="white"
      height={{ base: 'auto', lg: 20 }}
      paddingX={{ base: 6, lg: 20 }}
      paddingY={{ base: 6, lg: 0 }}
      alignItems="center"
      flexWrap="wrap"
    >
      <Flex direction="column">
        <Flex textAlign="center" align="center" direction="column">
          <Box maxWidth="150px" marginBottom={4}>
            <Image src={footerLogo} />
          </Box>
          <Text>
            Amazing experience that will free your mind & touch your soul. Very cozy rooms, 100% ECO
            PRIVATE SUITES. Located at the most exclusive área of Tulum.
          </Text>
        </Flex>

        <Flex marginTop={4} direction="column">
          <Text fontWeight="bold" marginBottom={2}>
            CONTACT US
          </Text>
          <Text>Carretera Tulum Boca Paila km 9.2</Text>
          <Text>reservaciones@hotelcasacoyotetulum.com</Text>
          <Text>+52 1 951 244 1236</Text>
        </Flex>
      </Flex>

      <Divider width="100%" opacity="0.25" marginY={4} />

      <Text fontSize="sm" textAlign="center">
        © Hotel Casa Coyote Tulum - All Rights Reserved. Web by hmnagency.
      </Text>
    </Flex>
  )
}

export default Footer
