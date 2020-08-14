import React from 'react'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { useSetRecoilState } from 'recoil'

import { Button } from '@chakra-ui/core'

import { bookingModalState } from '../../store'

function BookButton(props) {
  const { t } = useTranslation()
  const setIsBookingModalOpen = useSetRecoilState(bookingModalState)

  return (
    <Button variantColor="primary" onClick={() => setIsBookingModalOpen(true)} {...props}>
      {t('commons.bookNow')}
    </Button>
  )
}

export default BookButton
