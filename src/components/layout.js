import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Global, css } from '@emotion/react'
import { Link, useTranslation, useI18next } from 'gatsby-plugin-react-i18next'
import { useRecoilState } from 'recoil'
import { MdLanguage } from 'react-icons/md'

import { Flex, Button } from '@chakra-ui/react'

import {
  Footer,
  FooterBody,
  FooterColumn,
  FooterDivider,
  FooterBottom,
  Main,
  P,
  BookingModal,
  WhatsappButton,
} from '../ui'

import SocialLinks from './socialLinks'
import Header from './header'
import FloatingBook from './floatingBook'

import { bookingModalState } from '../store'
import SEO from './seo'

import logoFooter from '../images/casa-coyote-logo-footer.png'

const globalStyles = css`
  @font-face {
    font-family: Roboto;
    font-style: normal;
    font-display: swap;
    font-weight: 300;
  }

  @font-face {
    font-family: Roboto;
    font-style: normal;
    font-display: swap;
    font-weight: 400;
  }

  @font-face {
    font-family: Roboto;
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  * {
    font-size: 14px;
    font-family: Roboto, Arial, Helvetica, sans-serif !important;
    font-weight: 300;

    @media (min-width: 1024px) {
      font-size: 16px;
    }
  }

  p,
  span {
    font-size: 16px;
    max-height: 999999px;
    opacity: 0.85;
  }
`

function Layout({
  children,
  title,
  variantHeader,
  disableHeader,
  disableWhatsapp,
  disablePopup,
  disableFloatingBanner,
}) {
  const { t } = useTranslation()
  const { language, changeLanguage } = useI18next()
  const [bookingModal, setBookingModal] = useRecoilState(bookingModalState)

  return (
    <>
      <Global styles={globalStyles} />
      <SEO title={`${title} | ${t('common:title')}`} />

      {!disableHeader && (
        <Header
          variantHeader={variantHeader}
          backgroundColor={variantHeader === 'solid' ? 'primary.900' : 'rgba(0,0,0,0.6)'}
          style={{ backdropFilter: 'blur(4px)' }}
        />
      )}
      <Flex direction="column" minHeight="100vh">
        <Main>{children}</Main>
      </Flex>
      <Footer backgroundColor="gray.900" color="white">
        <FooterBody>
          <FooterColumn align="center">
            <Link to="/">
              <Flex width={{ base: '200px', md: '250px' }} marginX="auto">
                <img style={{ height: 'auto', width: '100%' }} src={logoFooter} />
              </Flex>
            </Link>
            <P textAlign="center">{t('common:footer.desc')}</P>
            <Flex justify="center">
              <Button
                variant="outline"
                leftIcon={<MdLanguage />}
                onClick={() => changeLanguage(language === 'es' ? 'en' : 'es')}
                _hover={{ background: 'transparent' }}
              >
                {language === 'es' ? 'Change to English' : 'Cambiar a Español'}
              </Button>
            </Flex>
          </FooterColumn>

          <FooterColumn />

          <FooterColumn title={t('common:footer.contact')}>
            <SocialLinks />
          </FooterColumn>
        </FooterBody>
        <FooterDivider backgroundColor="red.800" />
        <FooterBottom direction={{ base: 'column', md: 'row' }} justify="space-between">
          <P fontSize="sm" lineHeight="shorter" textAlign={{ base: 'center', lg: 'left' }}>
            © Hotel Casa Coyote Tulum
          </P>
          <P fontSize="sm" lineHeight="shorter" textAlign={{ base: 'center', lg: 'left' }}>
            Developed by{' '}
            <P
              fontSize="sm"
              as="a"
              href="https://www.hmnagency.com"
              textDecoration="underline"
              target="_blank"
            >
              hmnagency.com
            </P>
          </P>
        </FooterBottom>
      </Footer>

      {!disableWhatsapp && (
        <WhatsappButton
          bottom="65px"
          href={`https://api.whatsapp.com/send?phone=5219841135252&text=${t(
            'common:whatsappText'
          )}`}
        />
      )}

      {!disableFloatingBanner && (
        <FloatingBook
          title={t('common:floatingBanner.title')}
          desc={t('common:floatingBanner.desc')}
          colorScheme="red"
        />
      )}

      <BookingModal
        isOpen={bookingModal.isOpen}
        onClose={() => setBookingModal((obj) => ({ ...obj, isOpen: false }))}
        url={`https://rbe.zaviaerp.com/${bookingModal.promotion}?hotel=casacoyote&arrival=${
          bookingModal.arrival
        }&departure=${bookingModal.departure}&lng=${language === 'es' ? 'es' : 'en'}&currency=${
          language === 'es' ? 'mxn' : 'usd'
        }`}
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  disableHeader: PropTypes.bool,
  disableWhatsapp: PropTypes.bool,
  disablePopup: PropTypes.bool,
  disableFloatingBanner: PropTypes.bool,
  title: PropTypes.string,
  variantHeader: PropTypes.oneOf(['solid', 'transparent']),
}

Layout.defaultProps = {
  disableHeader: false,
  disableWhatsapp: false,
  disablePopup: false,
  disableFloatingBanner: false,
  title: '',
  variantHeader: 'transparent',
}

export const query = graphql`
  fragment fixedImage on File {
    childImageSharp {
      fixed(width: 680, quality: 65) {
        ...GatsbyImageSharpFixed
      }
    }
  }

  fragment bannerSectionImage on File {
    childImageSharp {
      fluid(maxWidth: 1270, quality: 65) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  fragment multipleFixedImage on FileConnection {
    edges {
      node {
        childImageSharp {
          fixed(width: 680, quality: 65) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`

export default Layout
