import React from 'react'
import { useForm } from '@statickit/react'

import {
  Textarea,
  Button,
  FormLabel,
  FormControl,
  FormErrorMessage,
  Input,
  Stack,
} from '@chakra-ui/core'

function FormContact() {
  const [state, handleSubmit] = useForm('contactForm')

  return (
    <form onSubmit={handleSubmit}>
      <Stack
        spacing={4}
        padding={{ base: 6, lg: 10 }}
        backgroundColor="gray.100"
        textAlign="left"
        marginTop={6}
        marginX="auto"
        maxWidth={{ lg: '960px' }}
      >
        <FormControl>
          <FormLabel isRequired htmlFor="name">
            Name
          </FormLabel>
          <Input placeholder="John Matthews" id="name" name="name" />
        </FormControl>

        <FormControl>
          <FormLabel isRequired htmlFor="email">
            Email
          </FormLabel>
          <Input placeholder="myemail@example.com" id="email" type="email" name="email" />
          <FormErrorMessage></FormErrorMessage>
        </FormControl>

        <FormControl>
          <FormLabel isRequired htmlFor="message">
            Message
          </FormLabel>
          <Textarea name="message" id="message" />
        </FormControl>

        <Button isDisabled={state.submitting} type="submit" variantColor="primary" size="lg">
          Send a message
        </Button>
      </Stack>
    </form>
  )
}

export default FormContact
