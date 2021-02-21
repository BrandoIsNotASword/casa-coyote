import React from 'react'
import { v4 } from 'uuid'
import PropTypes from 'prop-types'

import Layout from '../components/layout'

import {
  Article,
  Section,
  Gallery as UIGallery,
  FeatureItem,
  FeatureList,
  Accordion,
  AccordionItem,
  Hero,
  HeroBody,
} from '../ui'

export function Header({ image, children, ...restProps }) {
  return (
    <Hero image={image} height={{ base: '450px', md: '500px' }} {...restProps}>
      <HeroBody zIndex={0} maxWidth="100%">
        {children}
      </HeroBody>
    </Hero>
  )
}

Header.propTypes = {
  image: PropTypes.node,
}

export function Features({ title, list, ...restProps }) {
  return (
    <Section title={title} titleAlign="center" {...restProps}>
      <FeatureList>
        {list?.map((item) => (
          <FeatureItem key={v4()} image={item.image} title={item.title} desc={item.desc} />
        ))}
      </FeatureList>
    </Section>
  )
}

Features.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
}

export function Gallery({ title, images, viewPhotos, ...restProps }) {
  return (
    <Section title={title} titleAlign="center" {...restProps}>
      <UIGallery images={images} buttonText={viewPhotos} />
    </Section>
  )
}

Gallery.propTypes = {
  title: PropTypes.string,
  viewPhotos: PropTypes.string,
  images: PropTypes.array,
}

export function Faqs({ title, list, ...restProps }) {
  return (
    <Section title={title} titleAlign="center" {...restProps}>
      <Accordion marginTop={6} allowMultiple>
        {list?.map((item) => (
          <AccordionItem key={v4()} question={item.question} answer={item.answer} />
        ))}
      </Accordion>
    </Section>
  )
}

Faqs.propTypes = {
  title: PropTypes.string,
  faqs: PropTypes.array,
}

function LandingPage({ children, title, ...restProps }) {
  return (
    <Layout title={title} disableHeader disablePopup disableFloatingBanner {...restProps}>
      <Article backgroundColor="white">{children}</Article>
    </Layout>
  )
}

LandingPage.propTypes = {
  title: PropTypes.string,
  images: PropTypes.any,
}

LandingPage.defaultProps = {
  title: '',
  images: null,
}

export default LandingPage
