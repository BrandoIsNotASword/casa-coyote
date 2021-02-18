import React from 'react'
import PropTypes from 'prop-types'
import { Stack, Flex, Box, useTheme } from '@chakra-ui/react'

import { flexPositions } from '../utils'
import { ROW_GAP, H3, P } from '../globals'

function Section({ children, fullWidth, titleAlign, title, subtitle, spacing, ...restProps }) {
  const theme = useTheme()
  const fullWidthProps = fullWidth && {
    marginTop: '0',
    marginBottom: '0',
    paddingRight: '0',
    paddingLeft: '0',
    maxWidth: '100%',
  }

  return (
    <Box
      as="section"
      paddingTop={{ base: 8, md: 12 }}
      paddingBottom={{ base: 8, md: 12 }}
      paddingRight={{ base: 6, md: 10, xl: 20 }}
      paddingLeft={{ base: 6, md: 10, xl: 20 }}
      maxWidth={theme.breakpoints.mw}
      marginX="auto"
      width="100%"
      {...fullWidthProps}
      {...restProps}
    >
      {(title || subtitle) && (
        <Flex direction="column" marginBottom={6} alignItems={flexPositions[titleAlign]}>
          <Stack maxWidth="720px" textAlign={titleAlign} spacing={2}>
            {title && <H3>{title}</H3>}
            {subtitle && typeof subtitle === 'string' ? <P>{subtitle}</P> : subtitle}
          </Stack>
        </Flex>
      )}
      <Stack spacing={spacing}>{children}</Stack>
    </Box>
  )
}

Section.propTypes = {
  titleAlign: PropTypes.oneOf(['left', 'center', 'right']),
  fullWidth: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.node,
  children: PropTypes.node,
}

Section.defaultProps = {
  titleAlign: 'left',
  fullWidth: false,
  title: '',
  subtitle: null,
  children: null,
}

export default Section
