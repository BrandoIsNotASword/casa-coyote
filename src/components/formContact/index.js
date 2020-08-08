import React from 'react'
import {
  Textarea,
  Button,
  FormLabel,
  FormControl,
  FormErrorMessage,
  Input,
  Stack,
} from '@chakra-ui/core'
import { Formik } from 'formik'

function FormContact() {
  const onSubmit = async (values, { setSubmitting }) => {
    setSubmitting(false)
  }

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: '',
      }}
      validate={(values) => {
        const errors = {}

        if (!values.email) {
          errors.email = 'Email is required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Email is invalid'
        }

        return errors
      }}
      onSubmit={onSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form method="POST" onSubmit={handleSubmit}>
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
              <Input
                placeholder="John Matthews"
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
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>

            <FormControl>
              <FormLabel isRequired htmlFor="message">
                Message
              </FormLabel>
              <Textarea
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormControl>

            <Button isDisabled={isSubmitting} type="submit" variantColor="primary" size="lg">
              Send a message
            </Button>
          </Stack>
        </form>
      )}
    </Formik>
  )
}

export default FormContact
