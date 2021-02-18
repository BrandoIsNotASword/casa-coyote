import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

function Image({ style, layout, ...restProps }) {
  let layoutStyle

  if (layout === 'background') {
    layoutStyle = {
      height: '100%',
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
    }
  } else if (layout === 'cover') {
    layoutStyle = {
      height: '100%',
      width: 'auto',
    }
  } else {
    layoutStyle = {}
  }

  return <Img style={{ ...style, ...layoutStyle }} {...restProps} />
}

Image.propTypes = {
  src: PropTypes.string,
  layout: PropTypes.oneOf(['background', 'solid']),
  style: PropTypes.object,
}

Image.defaultProps = {
  src: '',
  style: {},
  layout: 'solid',
}

export default Image
