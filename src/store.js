import { atom } from 'recoil'

export const bookingModalState = atom({
  key: 'bookingModalState',
  default: false,
})

export const bookingPromotionState = atom({
  key: 'bookingPromotionState',
  default: '',
})
