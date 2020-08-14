import React from 'react'
import { useTranslation } from 'gatsby-plugin-react-i18next'
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
  const { t } = useTranslation()

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
      <Link to="#hotel">{t('nav.hotel')}</Link>
      <Link to="#rooms">{t('nav.rooms')}</Link>
      <Link to="#experience">{t('nav.experience')}</Link>
      <Link to="#restaurant">{t('nav.restaurant')}</Link>
      <Link to="#contact">{t('nav.contact')}</Link>
    </Stack>
  )
}

export default Nav
