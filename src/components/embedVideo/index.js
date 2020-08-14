import React from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player/youtube'
import { Box } from '@chakra-ui/core'

function EmbedVideo({ url, ...restProps }) {
  return (
    <Box backgroundColor="gray.200" {...restProps}>
      <ReactPlayer width="100%" height="100%" url={url} />
    </Box>
  )
}

EmbedVideo.propTypes = {
  url: PropTypes.string,
}

export default EmbedVideo
