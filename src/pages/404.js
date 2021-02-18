import React from 'react'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { Link } from 'gatsby-plugin-react-i18next'

import Layout from '../components/layout'

import { Flex, Button } from '@chakra-ui/react'
import { Article, Section } from '../ui'

function NotFoundPage() {
  const { t } = useTranslation()

  return (
    <Layout title={t('404:title')} variantHeader="solid">
      <Article>
        <Section title={t('404:title')} subtitle={t('404:subtitle')} titleAlign="center">
          <Flex justifyContent="center">
            <Button as={Link} to="/">
              {t('404:button')}
            </Button>
          </Flex>
        </Section>
      </Article>
    </Layout>
  )
}

export default NotFoundPage
