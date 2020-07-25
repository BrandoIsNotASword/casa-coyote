import React from 'react'
import styled from '@emotion/styled'
import { Link as GatsbyLink } from 'gatsby'
import { Stack } from '@chakra-ui/core'

const Link = styled(GatsbyLink)`
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  opacity: 0.95;
  padding: 15px 0;

  &:hover {
    opacity: 1;
  }
`

function Nav(props) {
  return (
    <Stack
      as="nav"
      isInline
      spacing={4}
      alignItems="center"
      marginY={{ base: '15px', md: 0 }}
      shouldWrapChildren
      {...props}
    >
      <Link to="#">Home</Link>
      <Link to="#the-hotel">The Hotel</Link>
      <Link to="#our-rooms">Our Rooms</Link>
      <Link to="#contact">Contact</Link>
    </Stack>
  )
}

export default Nav
