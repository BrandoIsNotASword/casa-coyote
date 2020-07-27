import React, { useState, useRef } from 'react'
import { Box, Button } from '@chakra-ui/core'
import Swiper from 'react-id-swiper'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import 'swiper/swiper-bundle.css'

function Carousel({ children, ...restProps }) {
  const ref = useRef(null)
  const [isNextVisible, setIsNextVisible] = useState(true)
  const [isPrevVisible, setIsPrevVisible] = useState(false)

  const goNext = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      console.log(ref.current.swiper.activeIndex)
      if (ref.current.swiper.activeIndex === children.length - 2) {
        setIsNextVisible(false)
        setIsPrevVisible(true)
      }
      ref.current.swiper.slideNext()
    }
  }

  const goPrev = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      if (ref.current.swiper.activeIndex === 1) {
        setIsPrevVisible(false)
        setIsNextVisible(true)
      }
      ref.current.swiper.slidePrev()
    }
  }

  return (
    <Box {...restProps}>
      <Swiper ref={ref} noSwiping>
        {children}
      </Swiper>

      <Box position="absolute" bottom="0" zIndex={1}>
        <Button
          display={`${isPrevVisible ? 'flex' : 'none'}`}
          onClick={goPrev}
          leftIcon={FiChevronLeft}
          backgroundColor="rgba(0,0,0,0.5)"
          color="white"
          borderRadius="0px"
          _hover={{ backgroundColor: 'rgba(0,0,0,0.75)' }}
        >
          Prev
        </Button>
      </Box>
      <Box position="absolute" bottom="0" right="0" zIndex={1}>
        <Button
          display={`${isNextVisible ? 'flex' : 'none'}`}
          onClick={goNext}
          rightIcon={FiChevronRight}
          backgroundColor="rgba(0,0,0,0.5)"
          color="white"
          borderRadius="0px"
          _hover={{ backgroundColor: 'rgba(0,0,0,0.75)' }}
        >
          Next
        </Button>
      </Box>
    </Box>
  )
}

export default Carousel
