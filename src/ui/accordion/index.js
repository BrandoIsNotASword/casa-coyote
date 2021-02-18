import React from 'react'
import PropTypes from 'prop-types'

import {
  Accordion as ChakraAccordion,
  AccordionItem as ChakraAccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

import { P } from '../globals'

export function AccordionItem({ children, question, answer, ...restProps }) {
  return (
    <ChakraAccordionItem {...restProps}>
      <AccordionButton>
        <P opacity="1" width="100%" textAlign="left" fontSize="lg">
          {question}
        </P>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel>{typeof answer === 'string' ? <P>{answer}</P> : answer}</AccordionPanel>
    </ChakraAccordionItem>
  )
}

AccordionItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}

export function Accordion({ children, ...restProps }) {
  return <ChakraAccordion {...restProps}>{children}</ChakraAccordion>
}
