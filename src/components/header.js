import React from 'react'
import { Link, useTranslation } from 'gatsby-plugin-react-i18next'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { Flex } from '@chakra-ui/react'

import { Menu } from '../ui'

import ButtonBook from './buttonBook'

import logo from '../images/casa-coyote-logo.png'

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
  const { t } = useTranslation()

  return (
    <Menu
      logo={
        <Link to="/">
          <Flex height={{ base: '40px', md: '50px' }}>
            <img style={{ height: '100%', width: 'auto' }} src={logo} />
          </Flex>
        </Link>
      }
      zIndex={2}
      rightButton={<ButtonBook />}
      position={{ base: 'absolute', md: variantHeader === 'solid' ? 'initial' : 'fixed' }}
      {...restProps}
    >
      <Link href="#hotel" passHref>
        <NavLink>{t('common:nav.hotel')}</NavLink>
      </Link>
      <Link href="#rooms" passHref>
        <NavLink>{t('common:nav.rooms')}</NavLink>
      </Link>
      <Link href="#experience" passHref>
        <NavLink>{t('common:nav.experience')}</NavLink>
      </Link>
      <Link href="#restaurant" passHref>
        <NavLink>{t('common:nav.restaurant')}</NavLink>
      </Link>
      <Link href="#contact" passHref>
        <NavLink>{t('common:nav.contact')}</NavLink>
      </Link>
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
