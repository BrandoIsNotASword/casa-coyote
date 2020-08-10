import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import { useStaticKit } from '@statickit/react'

import {
  Textarea,
  Button,
  FormLabel,
  FormControl,
  FormErrorMessage,
  Input,
  Stack,
  Flex,
  Text,
} from '@chakra-ui/core'

function FormContact({ hideOnSuccess }) {
  const [success, setSuccess] = useState()
  const client = useStaticKit()

  const formik = useFormik({
    initialValues: { name: '', email: '', message: '' },
    validate: (values) => {
      const errors = {}

      if (!values.email) {
        errors.email = 'Email is required'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Email is invalid'
      }

      if (!values.message) {
        errors.message = "Message can't be empty"
      }

      return errors
    },
    onSubmit: async (values, { setSubmitting }) => {
      const res = await client.submitForm('contactForm', {
        name: values.name,
        email: values.email,
        message: values.message,
      })

      if (res.response.ok) setSuccess(true)

      setSubmitting(false)
    },
  })

  if (hideOnSuccess && success) {
    return (
      <Flex padding={10} justify="center">
        <Text fontWeight="bold" fontSize="xl">
          Thank you for your message. We'll reach you as soon as possible.
        </Text>
      </Flex>
    )
  }

  const { handleBlur, handleChange, handleSubmit, touched, errors, values, isSubmitting } = formik

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
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            placeholder="John Matthews"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FormControl>

        <FormControl isInvalid={errors.email && touched.email}>
          <FormLabel isRequired htmlFor="email">
            Email
          </FormLabel>
          <Input
            placeholder="myemail@example.com"
            id="email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FormErrorMessage>{errors.email}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.message && touched.message}>
          <FormLabel isRequired htmlFor="message">
            Message
          </FormLabel>
          <Textarea
            name="message"
            id="message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FormErrorMessage>{errors.message}</FormErrorMessage>
        </FormControl>

        <Button isDisabled={isSubmitting} type="submit" variantColor="primary" size="lg">
          Send a message
        </Button>
      </Stack>
    </form>
  )
}

FormContact.propTypes = {
  hideOnSuccess: PropTypes.bool,
}

FormContact.defaultProps = {
  hideOnSuccess: true,
}

export default FormContact
