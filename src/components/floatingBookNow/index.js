import React from 'react'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { Flex, Text, useTheme, Box } from '@chakra-ui/core'

import BookButton from '../bookButton'

function FloatingBookNow() {
  const { t } = useTranslation()
  const theme = useTheme()

  return (
    <Flex
      display={{ base: 'flex', xl: 'none' }}
      position="fixed"
      zIndex="1"
      bottom="0"
      backgroundColor="white"
      borderTop={`1px solid ${theme.colors.gray[100]}`}
      width="100%"
      paddingX={4}
      paddingY={2}
      justify="space-between"
      align="center"
    >
      <Box>
        <Text fontWeight="bold">{t('footer.floatingBookNow.subtitle')}</Text>
        <Text>{t('footer.floatingBookNow.title')}</Text>
      </Box>
      <BookButton />
    </Flex>
  )
}

export default FloatingBookNow
