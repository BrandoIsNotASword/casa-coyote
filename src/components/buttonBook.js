import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Button } from '@chakra-ui/react'
import { useTranslation } from 'gatsby-plugin-react-i18next'

import { useSetRecoilState } from 'recoil'
import { bookingModalState } from '../store'

function ButtonBook({ children, arrival, departure, promotion, ...restProps }) {
  const { t } = useTranslation()
  const setBookingModal = useSetRecoilState(bookingModalState)

  useEffect(() => {
    setBookingModal((obj) => ({
      ...obj,
      arrival,
      departure,
      promotion: promotion && `promotion/${promotion}/`,
    }))
  }, [])

  return (
    <Button
      width="fit-content"
      onClick={() => setBookingModal((obj) => ({ ...obj, isOpen: true }))}
      {...restProps}
    >
      {children || t('common:bookNow')}
    </Button>
  )
}

ButtonBook.propTypes = {
  children: PropTypes.node,
  colorScheme: PropTypes.string,
  arrival: PropTypes.string,
  departure: PropTypes.string,
  promotion: PropTypes.string,
}

ButtonBook.defaultProps = {
  children: null,
  colorScheme: 'gray',
  arrival: '',
  departure: '',
  promotion: '',
}

export default ButtonBook
