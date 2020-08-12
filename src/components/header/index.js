import React from 'react'
import styled from '@emotion/styled'
import { Link as GatsbyLink } from 'gatsby'
import { Flex } from '@chakra-ui/core'

import Nav from '../nav'
import BookButton from '../bookButton'

import logo from '../../images/casa-coyote-logo.png'

const Logo = styled.img`
  height: 50px;
  width: auto;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    height: 65px;
  }
`

const Link = styled(GatsbyLink)`
  flex-shrink: 0;
`

function Header() {
  return (
    <Flex
      as="header"
      justify="space-between"
      backgroundColor="black"
      minHeight={{ base: 'auto', lg: 20 }}
      paddingX={{ base: 4, lg: 20 }}
      paddingTop={{ base: 3, lg: 0 }}
      paddingBottom={{ sm: 3, lg: 0 }}
      alignItems="center"
      flexWrap="wrap"
    >
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <BookButton flexShrink={0} variantColor="gray" order={{ base: 0, md: 1 }} />
      <Nav order={{ base: 1, md: 0 }} />
    </Flex>
  )
}

export default Header
