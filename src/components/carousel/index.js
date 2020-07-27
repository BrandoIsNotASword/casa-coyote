import React, { useState, useRef } from 'react'
import { Box, Button } from '@chakra-ui/core'
import Swiper from 'react-id-swiper'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import 'swiper/swiper-bundle.css'

function Carousel() {
  const ref = useRef(null)
  const [isNextVisible, setIsNextVisible] = useState(true)
  const [isPrevVisible, setIsPrevVisible] = useState(false)

  const goNext = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      if (ref.current.swiper.activeIndex === 3) setIsNextVisible(false)
      else setIsPrevVisible(true)
      ref.current.swiper.slideNext()
    }
  }

  const goPrev = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      if (ref.current.swiper.activeIndex === 1) setIsPrevVisible(false)
      else setIsNextVisible(true)
      ref.current.swiper.slidePrev()
    }
  }

  return (
    <Box
      flexShrink={0}
      flexBasis="50%"
      backgroundColor="gray.100"
      overflow="hidden"
      position="relative"
    >
      <Swiper ref={ref}>
        <Box
          paddingBottom="500px"
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundImage="url(https://www.hotelcasacoyotetulum.com/wp-content/uploads/2019/01/Casa-Coyote-14.jpeg)"
        />
        <Box
          paddingBottom="500px"
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundImage="url(https://www.hotelcasacoyotetulum.com/wp-content/uploads/2019/01/Sala-Casa-Coyote.jpg)"
        />
        <Box
          paddingBottom="500px"
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundImage="url(https://www.hotelcasacoyotetulum.com/wp-content/uploads/2019/01/Casa-Coyote-7.jpeg)"
        />
        <Box
          paddingBottom="500px"
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundImage="url(https://www.hotelcasacoyotetulum.com/wp-content/uploads/2019/01/Ba%C3%B1o-Casa-Coyote.jpg)"
        />
        <Box
          paddingBottom="500px"
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundImage="url(https://www.hotelcasacoyotetulum.com/wp-content/uploads/2019/01/Casa-3-Casa-Coyote.jpg)"
        />
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
