import React, { useState } from 'react'
import { v4 } from 'uuid'
import PropTypes from 'prop-types'
import { SimpleGrid, Button, Box } from '@chakra-ui/react'

import Carousel from '../carousel'
import Modal from '../modal'

function Gallery({ images, buttonText, ...restProps }) {
  const [isOpen, setIsOpen] = useState(false)
  const [slideIndex, setSlideIndex] = useState(0)

  const handleClick = (slideIndex) => {
    setSlideIndex(slideIndex)
    setIsOpen(true)
  }

  return (
    <>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        height={{ lg: '400px' }}
        spacing={2}
        borderRadius="15px"
        overflow="hidden"
        {...restProps}
      >
        <Box
          paddingBottom={{ base: '66%', lg: '0%' }}
          height={{ lg: '100%' }}
          onClick={() => handleClick(0)}
          position="relative"
          _hover={{ opacity: '0.85', cursor: 'pointer' }}
        >
          {React.cloneElement(images[0], { quality: 20 })}
          <Button
            position="absolute"
            bottom="0"
            right="0"
            marginRight={4}
            marginBottom={4}
            opacity="0.85"
            onClick={() => handleClick()}
          >
            {buttonText}
          </Button>
        </Box>
        <SimpleGrid
          display={{ base: 'none', lg: 'grid' }}
          columns={2}
          spacing={2}
          height="100%"
          width="100%"
        >
          <Box
            _hover={{ opacity: '0.85', cursor: 'pointer' }}
            height="100%"
            position="relative"
            onClick={() => handleClick(1)}
          >
            {React.cloneElement(images[1], { quality: 20 })}
          </Box>
          <Box
            _hover={{ opacity: '0.85', cursor: 'pointer' }}
            height="100%"
            position="relative"
            onClick={() => handleClick(2)}
          >
            {React.cloneElement(images[2], { quality: 20 })}
          </Box>
          <Box
            _hover={{ opacity: '0.85', cursor: 'pointer' }}
            height="100%"
            position="relative"
            onClick={() => handleClick(3)}
          >
            {React.cloneElement(images[3], { quality: 20 })}
          </Box>
          <Box
            _hover={{ opacity: '0.85', cursor: 'pointer' }}
            height="100%"
            position="relative"
            onClick={() => handleClick(4)}
          >
            {React.cloneElement(images[4], { quality: 20 })}
          </Box>
        </SimpleGrid>
      </SimpleGrid>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} display="flex">
        <Carousel slideIndex={slideIndex} dotColor="black">
          {images.map((image) => (
            <Box
              key={v4()}
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="80vh"
              alignSelf="center"
            >
              {React.cloneElement(image, { layout: 'solid' })}
            </Box>
          ))}
        </Carousel>
      </Modal>
    </>
  )
}

Gallery.propTypes = {
  buttonText: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.node),
}

Gallery.defaultProps = {
  buttonText: '',
  images: [],
}

export default Gallery
