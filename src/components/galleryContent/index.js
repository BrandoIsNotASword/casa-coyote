import React from 'react'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { v4 } from 'uuid'
import PropTypes from 'prop-types'
import { Flex, Box } from '@chakra-ui/core'

import Carousel from '../../components/carousel'

function GalleryContent({ children, images, reversed }) {
  const { t } = useTranslation()

  return (
    <Flex direction={{ base: 'column', lg: 'row' }} minHeight={{ lg: '500px' }}>
      <Flex
        order={{ base: 1, lg: reversed && 1 }}
        direction="column"
        flexShrink={0}
        flexBasis="50%"
        paddingRight={{ lg: reversed ? 0 : 10 }}
        paddingLeft={{ lg: reversed ? 10 : 0 }}
        justify="center"
      >
        {children}
      </Flex>
      <Box
        order={{ base: 0, lg: reversed ? 0 : 1 }}
        flexShrink={0}
        flexBasis="50%"
        overflow="hidden"
        position="relative"
        marginBottom={{ base: 6, lg: 0 }}
      >
        <Carousel nextText={t('commons.nextText')} prevText={t('commons.prevText')}>
          {images.length !== 0 &&
            images.map((image) => (
              <Box
                key={v4()}
                paddingBottom={{ base: '75%', lg: '500px' }}
                backgroundPosition="center"
                backgroundSize="cover"
                backgroundImage={`url(${image})`}
              />
            ))}
        </Carousel>
      </Box>
    </Flex>
  )
}

GalleryContent.propTypes = {
  reversed: PropTypes.bool,
  images: PropTypes.array,
  children: PropTypes.node,
}

GalleryContent.defaultProps = {
  reversed: false,
  images: [],
  children: null,
}

export default GalleryContent
