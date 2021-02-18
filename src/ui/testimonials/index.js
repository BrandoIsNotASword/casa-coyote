import React, { useState, useRef, useEffect } from 'react'
import { v4 } from 'uuid'
import PropTypes from 'prop-types'
import { AiFillStar } from 'react-icons/ai'
import { Stack, Avatar, Flex, Box, Button } from '@chakra-ui/react'

import { P } from '../globals'
import Carousel from '../carousel'

export function TestimonialItem({ name, stars, profilePic, size, quote, ...restProps }) {
  const [readMore, setReadMore] = useState(false)

  const ref = useRef()

  const starsArray = [...new Array(stars)]

  return (
    <Flex direction="column" justify="center" align="center" marginX="auto" {...restProps}>
      <Stack spacing={2} align="center">
        <Box maxHeight={readMore ? '100%' : 140} overflow="hidden">
          <Box ref={ref}>
            <P fontSize="lg" textAlign="center">
              "{quote}"
            </P>
          </Box>
        </Box>
        {ref.current?.offsetHeight >= 150 && (
          <Button
            onClick={() => setReadMore(!readMore)}
            colorScheme="gray"
            variant="outline"
            size="sm"
          >
            {readMore ? 'Close' : 'Read more'}
          </Button>
        )}
        {starsArray && (
          <Stack spacing={1} isInline>
            {starsArray.map(() => (
              <Box key={v4()} as={AiFillStar} color="yellow.400" size="1.65rem" />
            ))}
          </Stack>
        )}
        {profilePic && <Avatar size={size} name={name} src={profilePic} />}
        <P fontWeight="bold" paddingBottom={4}>
          {name}
        </P>
      </Stack>
    </Flex>
  )
}

TestimonialItem.propTypes = {
  stars: PropTypes.number,
  name: PropTypes.string,
  profilePic: PropTypes.string,
  size: PropTypes.string,
  quote: PropTypes.string,
}

TestimonialItem.defaultProps = {
  stars: 0,
  name: '',
  profilePic: '',
  size: 'md',
  quote: '',
}

export function Testimonials({ children, ...restProps }) {
  return (
    <Carousel dotColor="black" dotStyle={{}} {...restProps}>
      {children}
    </Carousel>
  )
}

export default Testimonials
