import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const theme = {
  colors: {
    primary: {
      50: '#dbf7ff',
      100: '#ace2ff',
      200: '#7dcdff',
      300: '#4ab9ff',
      400: '#1ba5fd',
      500: '#028ce4',
      600: '#006db2',
      700: '#004e80',
      800: '#002f50',
      900: '#001120',
    },
    secondary: {
      50: '#fff6de',
      100: '#f7e5b6',
      200: '#f0d48d',
      300: '#e8c261',
      400: '#e2b137',
      500: '#c8971d',
      600: '#9c7615',
      700: '#6f540c',
      800: '#443203',
      900: '#191100',
    },
  },
}

const breakpoints = createBreakpoints({
  sm: '480px',
  md: '720px',
  lg: '1024px',
  xl: '1280px',
  xx: '1440px',
  mw: '1760px',
})

export default extendTheme({ ...theme, breakpoints })
