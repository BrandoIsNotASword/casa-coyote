import React, { useState } from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { Box } from '@chakra-ui/react'
import { default as NukaCarousel } from 'nuka-carousel'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const Wrapper = styled(Box)`
  &:hover .CarouselButton {
    display: none;
  }

  @media (min-width: 1024px) {
    &:hover .CarouselButton {
      display: flex;
    }
  }
`

function Carousel({ slideIndex, heightMode, dotColor, dotStyle, children, ...restProps }) {
  const [currentIndex, setCurrentIndex] = useState(slideIndex)

  const isOneChild = children.length <= 1

  const CarouselButton = ({ children, disabled, onClick }) => (
    <Box
      onClick={onClick}
      className="CarouselButton"
      visibility={disabled ? 'hidden' : 'visible'}
      display="none"
      backgroundColor="rgba(255, 255, 255, .75)"
      color="black"
      borderRadius="100px"
      padding="8px"
      cursor="pointer"
      boxShadow="0px 1px 2px rgba(0, 0, 0, 0.15)"
      marginX={2}
      _hover={{ backgroundColor: 'rgba(255, 255, 255, .85)' }}
    >
      {children}
    </Box>
  )

  return (
    <Wrapper
      overflow="hidden"
      position="relative"
      width="100%"
      display="flex"
      alignItems="center"
      {...restProps}
    >
      <NukaCarousel
        heightMode={heightMode}
        slideIndex={slideIndex}
        afterSlide={(currentIndex) => setCurrentIndex(currentIndex)}
        renderCenterLeftControls={({ previousSlide }) => (
          <CarouselButton
            disabled={isOneChild || currentIndex === 0}
            onClick={(e) => {
              previousSlide()
              e.preventDefault()
            }}
          >
            <FiChevronLeft size="1.5rem" />
          </CarouselButton>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <CarouselButton
            disabled={isOneChild || currentIndex === children.length - 1}
            onClick={(e) => {
              nextSlide()
              e.preventDefault()
            }}
          >
            <FiChevronRight size="1.5rem" />
          </CarouselButton>
        )}
        disableEdgeSwiping
        defaultControlsConfig={{
          pagingDotsStyle: {
            fill: isOneChild ? 'transparent' : dotColor,
            margin: '0 3px',
            ...dotStyle,
          },
        }}
      >
        {children}
      </NukaCarousel>
    </Wrapper>
  )
}

Carousel.propTypes = {
  slideIndex: PropTypes.number,
  heightMode: PropTypes.string,
  dotColor: PropTypes.string,
  children: PropTypes.node,
}

Carousel.defaultProps = {
  slideIndex: 0,
  heightMode: 'current',
  dotColor: 'white',
  children: null,
}

export default Carousel
