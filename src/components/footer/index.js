import React from 'react'
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next'

import { FiMapPin, FiMail, FiPhone, FiInstagram, FiGlobe } from 'react-icons/fi'
import { Flex, Image, Text, Stack, Divider, Link, Button } from '@chakra-ui/core'

import footerLogo from '../../images/casa-coyote-logo-footer.png'

function Footer() {
  const { t } = useTranslation()
  const { changeLanguage, language } = useI18next()

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
          <Link href="/" maxWidth="150px" marginBottom={4}>
            <Image src={footerLogo} />
          </Link>
          <Text>{t('footer.desc')}</Text>
          <Button
            variant="outline"
            rightIcon={FiGlobe}
            marginTop={4}
            _hover={{ color: 'inherit' }}
            onClick={() => changeLanguage(language === 'es' ? 'en' : 'es')}
          >
            {language === 'es' ? 'English' : 'Español'}
          </Button>
        </Flex>

        <Flex marginTop={6} direction="column">
          <Text fontWeight="bold" marginBottom={2}>
            {t('footer.contact')}
          </Text>
          <Stack spacing={3}>
            <Stack isInline align="center" spacing={3} shouldWrapChildren>
              <FiMapPin size="1.25rem" />
              <Text>Carretera Tulum Boca Paila km 9.2</Text>
            </Stack>
            <Link href="mailto:reservaciones@hotelcasacoyotetulum.com">
              <Stack isInline align="center" spacing={3} shouldWrapChildren>
                <FiMail size="1.25rem" />
                <Text wordBreak="break-word" lineHeight="normal">
                  admongrupomanifesto@gmail.com
                </Text>
              </Stack>
            </Link>
            <Link href="tel:+5219841135252">
              <Stack isInline align="center" spacing={3} shouldWrapChildren>
                <FiPhone size="1.25rem" />
                <Text>+52 1 984 113 5252</Text>
              </Stack>
            </Link>
            <Link href="https://www.instagram.com/casa_coyote/" target="_blank" rel="noreferrer">
              <Stack isInline align="center" spacing={3} shouldWrapChildren>
                <FiInstagram size="1.25rem" />
                <Text>casa_coyote</Text>
              </Stack>
            </Link>
          </Stack>
        </Flex>
      </Flex>

      <Divider width="100%" opacity="0.15" marginY={6} />

      <Text fontSize="sm" textAlign="center">
        {t('footer.terms')}{' '}
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
