import React from 'react'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { Flex, Link } from '@chakra-ui/react'

import { Menu } from '../ui'

import ButtonBook from './buttonBook'

import logoCoyote from '../images/casa-coyote-logo.png'
import logoXaman from '../images/casa-xaman-logo.png'

const NavLink = styled.a`
  opacity: 0.85;
  padding: 10px 0;
  display: block;
  cursor: pointer;
  color: white;
  font-weight: bold;
  letter-spacing: 0.85px;

  &:hover {
    opacity: 1;
  }
`

function Header({ variantHeader, ...restProps }) {
  const isCoyote = process.env.GATSBY_HOTEL_VAR === 'casa-coyote'
  const { t } = useTranslation()

  return (
    <Menu
      logo={
        <Link to="/">
          <Flex height={{ base: '40px', md: '50px' }}>
            <img
              style={{ height: '100%', width: 'auto' }}
              src={isCoyote ? logoCoyote : logoXaman}
            />
          </Flex>
        </Link>
      }
      zIndex={2}
      rightButton={<ButtonBook />}
      position={{ base: 'relative', md: variantHeader === 'solid' ? 'initial' : 'fixed' }}
      {...restProps}
    >
      <NavLink href="#hotel">{t('common:nav.hotel')}</NavLink>
      <NavLink href="#rooms">{t('common:nav.rooms')}</NavLink>
      <NavLink href="#experience">{t('common:nav.experience')}</NavLink>
      <NavLink href="#restaurant">{t('common:nav.restaurant')}</NavLink>
      <NavLink href="#contact">{t('common:nav.contact')}</NavLink>
    </Menu>
  )
}

Header.propTypes = {
  variantHeader: PropTypes.oneOf(['solid', 'transparent']),
}

Header.defaultProps = {
  variantHeader: 'solid',
}

export default Header
