import React from 'react'
import PropTypes from 'prop-types'

import { Stack } from '@chakra-ui/react'

import { P, FloatingBanner } from '../ui'

import ButtonBook from '../components/buttonBook'

function FloatingBook({ title, desc, colorScheme, ...restProps }) {
  return (
    <FloatingBanner>
      <Stack spacing={1}>
        <P fontSize="14px" fontWeight="bold" lineHeight="none">
          {title}
        </P>
        <P fontSize="14px" lineHeight="none">
          {desc}
        </P>
      </Stack>
      <ButtonBook size="md" colorScheme={colorScheme} {...restProps} />
    </FloatingBanner>
  )
}

FloatingBook.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  colorScheme: PropTypes.string,
}

FloatingBook.defaultProps = {
  title: '',
  desc: '',
  colorScheme: 'primary',
}

export default FloatingBook
