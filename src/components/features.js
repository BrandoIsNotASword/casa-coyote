import React from 'react'
import { useTheme } from '@chakra-ui/react'
import { GiCutDiamond, GiOakLeaf, GiStarsStack, GiAirtightHatch } from 'react-icons/gi'
import { useTranslation } from 'gatsby-plugin-react-i18next'

import { FeatureItem, FeatureList, P } from '../ui'

function Features() {
  const { t } = useTranslation()
  const theme = useTheme()

  return (
    <FeatureList columns={4}>
      <FeatureItem
        icon={<GiCutDiamond color={theme.colors.gray[800]} size="3rem" />}
        title={t('index:intro.features.location.title')}
        desc={<P>{t('index:intro.features.location.desc')}</P>}
      />
      <FeatureItem
        icon={<GiOakLeaf color={theme.colors.gray[800]} size="3rem" />}
        title={t('index:intro.features.nature.title')}
        desc={<P>{t('index:intro.features.nature.desc')}</P>}
      />
      <FeatureItem
        icon={<GiStarsStack color={theme.colors.gray[800]} size="3rem" />}
        title={t('index:intro.features.ammenities.title')}
        desc={<P>{t('index:intro.features.ammenities.desc')}</P>}
      />
      <FeatureItem
        icon={<GiAirtightHatch color={theme.colors.gray[800]} size="3rem" />}
        title={t('index:intro.features.private.title')}
        desc={<P>{t('index:intro.features.private.desc')}</P>}
      />
    </FeatureList>
  )
}

export default Features
