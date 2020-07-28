import React from 'react'
import { Flex, Text, Button, useTheme, Box } from '@chakra-ui/core'

function FloatingBookNow() {
  const theme = useTheme()

  return (
    <Flex
      display={{ base: 'flex', xl: 'none' }}
      position="fixed"
      zIndex="1"
      bottom="0"
      backgroundColor="white"
      borderTop={`1px solid ${theme.colors.gray[100]}`}
      width="100%"
      paddingX={4}
      paddingY={2}
      justify="space-between"
      align="center"
    >
      <Box>
        <Text fontWeight="bold">Eco-hotel in Tulum</Text>
        <Text>100% eco-private suites.</Text>
      </Box>
      <Button variantColor="primary">Book now</Button>
    </Flex>
  )
}

export default FloatingBookNow
