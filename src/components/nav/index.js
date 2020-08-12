import React from 'react'
import styled from '@emotion/styled'
import { Link as GatsbyLink } from 'gatsby'
import { Stack } from '@chakra-ui/core'

const Link = styled(GatsbyLink)`
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  opacity: 0.95;
  padding: 15px 0;
  display: block;

  &:hover {
    opacity: 1;
  }
`

function Nav(props) {
  return (
    <Stack
      as="nav"
      isInline
      spacing={6}
      alignItems="center"
      shouldWrapChildren
      overflowX="auto"
      {...props}
    >
      <Link to="#hotel">Hotel</Link>
      <Link to="#rooms">Rooms</Link>
      <Link to="#experience">Experience</Link>
      <Link to="#restaurant">Restaurant</Link>
      <Link to="#contact">Contact</Link>
    </Stack>
  )
}

export default Nav
