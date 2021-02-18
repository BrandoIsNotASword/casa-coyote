import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'

import {
  Box,
  Flex,
  Input,
  Button,
  Text,
  Stack,
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react'

function FormContact({
  hideOnSuccess,
  onSubmit,
  name,
  email,
  message,
  successText,
  buttonText,
  ...restProps
}) {
  const [success, setSuccess] = useState(false)
  const formik = useFormik({
    initialValues: { name: '', email: '', message: '' },
    validate: (values) => {
      const errors = {}

      if (!values.email) {
        errors.email = email.required
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = email.invalid
      }

      if (!values.message) {
        errors.message = message.required
      }

      return errors
    },
    onSubmit: (values, { setSubmitting }) => {
      onSubmit(values, (success) => setSuccess(success))
      setSubmitting(false)
    },
  })

  if (hideOnSuccess && success) {
    return (
      <Flex padding={10} justify="center">
        <Text fontWeight="bold" fontSize="xl" textAlign="center">
          {successText}
        </Text>
      </Flex>
    )
  }

  const { handleBlur, handleChange, handleSubmit, touched, errors, values, isSubmitting } = formik

  return (
    <Box as="form" onSubmit={handleSubmit} {...restProps}>
      <Stack width="100%" direction="column" spacing={6}>
        <FormControl>
          <FormLabel htmlFor="name">{name.label}</FormLabel>
          <Input
            variant="filled"
            type="name"
            id="name"
            placeholder={name.placeholder}
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FormControl>

        <FormControl isRequired isInvalid={errors.email && touched.email}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            variant="filled"
            placeholder={email.placeholder}
            type="email"
            id="email"
            aria-describedby="email-helper-text"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FormErrorMessage>{errors.email}</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={errors.message && touched.message}>
          <FormLabel htmlFor="message">{message.label}</FormLabel>
          <Textarea
            variant="filled"
            id="message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FormErrorMessage>{errors.message}</FormErrorMessage>
        </FormControl>
        <Button colorScheme="teal" size="lg" type="submit" isDisabled={isSubmitting}>
          {buttonText}
        </Button>
      </Stack>
    </Box>
  )
}

FormContact.propTypes = {
  hideOnSuccess: PropTypes.bool,
  onSuccess: PropTypes.func,
}

FormContact.defaultProps = {
  hideOnSuccess: false,
  onSuccess: () => {},
}

export default FormContact
