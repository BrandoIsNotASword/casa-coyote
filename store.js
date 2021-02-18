import { atom } from 'recoil'

export const bookingModalState = atom({
  key: 'bookingModalState',
  default: {
    isOpen: false,
    promotion: '',
  },
})
