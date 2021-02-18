import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { Flex, useTheme } from '@chakra-ui/react'

function FloatingBanner({ children, fraction, show }) {
  const [isVisible, setIsVisible] = useState(show === 'always')
  const theme = useTheme()

  useScrollPosition(
    ({ currPos }) => {
      if (show === 'automatic') {
        if (currPos.y * -1 > window.innerHeight / fraction) setIsVisible(true)
        else setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    },
    [],
    null,
    null,
    300
  )

  return (
    <Flex
      display={{ base: isVisible ? 'flex' : 'none', xl: 'none' }}
      position="fixed"
      zIndex="1"
      bottom="0"
      backgroundColor="rgba(255,255,255,0.95)"
      boxShadow="2px 0px 5px rgba(0,0,0,0.5)"
      borderTop={`1px solid ${theme.colors.gray[100]}`}
      width="100%"
      paddingX={4}
      paddingY={3}
      justify="space-between"
      align="center"
    >
      {children}
    </Flex>
  )
}

FloatingBanner.propTypes = {
  fraction: PropTypes.number,
  children: PropTypes.node,
  show: PropTypes.oneOf(['always', 'automatic']),
}

FloatingBanner.defaultProps = {
  fraction: 3,
  show: 'automatic',
}

export default FloatingBanner
