import React from 'react'
import styled from '@emotion/styled'
import { FaFacebook, FaInstagram, FaYoutube, FaMapMarkedAlt } from 'react-icons/fa'
import { Stack, IconButton, Button, Box, Flex } from '@chakra-ui/react'

import { P } from '../ui'

import manifesto from '../images/grupo-manifesto-logo.png'

const A = styled.a`
  font-size: inherit;
  text-decoration: underline;
`

const SocialLink = ({ icon, to }) => (
  <IconButton as="a" href={to} target="_blank" variant="outline" colorScheme="white" icon={icon} />
)

function SocialLinks(props) {
  return (
    <Stack spacing={2} {...props}>
      <P>
        Email: <A href="mailto:admon.grupomanifesto@gmail.com">admon.grupomanifesto@gmail.com</A>
      </P>
      <P>Tel: +52 1 998 349 7125</P>
      <P>Carretera Tulum Boca Paila km 9.2</P>
      <Stack isInline shouldWrapChildren>
        <SocialLink to="https://www.instagram.com/casa_coyote/" icon={<FaInstagram />} />
        <SocialLink
          to="https://www.google.com/maps/place/Casa+Coyote+Tulum/@20.1379311,-87.4637522,15z/data=!4m8!3m7!1s0x0:0x905609cdd99ba908!5m2!4m1!1i2!8m2!3d20.1379311!4d-87.4637522?hl=en"
          icon={<FaMapMarkedAlt />}
        />
      </Stack>
      <Flex>
        <Box
          display="block"
          marginX="auto"
          height="100px"
          width="100px"
          borderRadius="100px"
          overflow="hidden"
        >
          <img src={manifesto} />
        </Box>
      </Flex>
    </Stack>
  )
}

export default SocialLinks
