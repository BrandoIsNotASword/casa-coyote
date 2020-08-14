import React from 'react'
import { Box, Button } from '@chakra-ui/core'
import { default as NukaCarousel } from 'nuka-carousel'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

function Carousel({ children, ...restProps }) {
  return (
    <Box overflow="hidden" backgroundColor="gray.100" position="relative" {...restProps}>
      <NukaCarousel
        renderCenterRightControls={null}
        renderCenterLeftControls={null}
        renderBottomLeftControls={({ previousSlide, currentSlide }) => (
          <Button
            display={{ base: 'none', xl: currentSlide === 0 ? 'none' : 'flex' }}
            onClick={previousSlide}
            leftIcon={FiChevronLeft}
            backgroundColor="rgba(0,0,0,0.65)"
            color="white"
            _hover={{ backgroundColor: 'rgba(0,0,0,0.75)' }}
          >
            Prev
          </Button>
        )}
        renderBottomRightControls={({ nextSlide, currentSlide }) => (
          <Button
            display={{ base: 'none', xl: currentSlide === children.length - 1 ? 'none' : 'flex' }}
            onClick={nextSlide}
            rightIcon={FiChevronRight}
            backgroundColor="rgba(0,0,0,0.65)"
            color="white"
            _hover={{ backgroundColor: 'rgba(0,0,0,0.75)' }}
          >
            Next
          </Button>
        )}
        disableEdgeSwiping
        defaultControlsConfig={{
          pagingDotsStyle: {
            fill: 'white',
            margin: '0 3px',
          },
        }}
      >
        {children}
      </NukaCarousel>
    </Box>
  )
}

export default Carousel
