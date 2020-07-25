import React from 'react'
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi'
import { Flex, Image, Box, Text, Stack, Divider } from '@chakra-ui/core'

import footerLogo from '../../images/casa-coyote-logo-footer.png'

function Footer() {
  return (
    <Flex
      as="footer"
      direction="column"
      justify="space-between"
      backgroundColor="black"
      color="white"
      paddingX={{ base: 6, lg: 20 }}
      paddingY={10}
      alignItems="center"
      flexWrap="wrap"
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align="center"
        width="100%"
      >
        <Flex textAlign="center" align="center" direction="column" maxWidth="350px">
          <Box maxWidth="150px" marginBottom={4}>
            <Image src={footerLogo} />
          </Box>
          <Text>
            Amazing experience that will free your mind & touch your soul. Very cozy rooms, 100% ECO
            PRIVATE SUITES. Located at the most exclusive área of Tulum.
          </Text>
        </Flex>

        <Flex marginTop={6} direction="column">
          <Text fontWeight="bold" marginBottom={2}>
            CONTACT US
          </Text>
          <Stack spacing={2}>
            <Stack isInline align="center" spacing={3} shouldWrapChildren>
              <FiMapPin size="1.25rem" />
              <Text>Carretera Tulum Boca Paila km 9.2</Text>
            </Stack>
            <Stack isInline align="center" spacing={3} shouldWrapChildren>
              <FiMail size="1.25rem" />
              <Text wordBreak="break-word" lineHeight="normal">
                reservaciones@hotelcasacoyotetulum.com
              </Text>
            </Stack>
            <Stack isInline align="center" spacing={3} shouldWrapChildren>
              <FiPhone size="1.25rem" />
              <Text>+52 1 951 244 1236</Text>
            </Stack>
          </Stack>
        </Flex>
      </Flex>

      <Divider width="100%" opacity="0.15" marginY={6} />

      <Text fontSize="sm" textAlign="center">
        © Hotel Casa Coyote Tulum. All Rights Reserved. Web design by{' '}
        <a
          href="https://hmnagency.com/"
          target="_blank"
          rel="noreferrer"
          style={{ fontSize: 'inherit', textDecoration: 'underline' }}
        >
          hmnagency
        </a>
        .
      </Text>
    </Flex>
  )
}

export default Footer
