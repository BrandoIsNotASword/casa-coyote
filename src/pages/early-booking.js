import React from 'react'
import { v4 } from 'uuid'
import { Stack, Flex } from '@chakra-ui/react'
import { useTranslation } from 'gatsby-plugin-react-i18next'

import LandingPage, { Header, Gallery, Features, Faqs } from '../components/landingPage'

import { H1, P, Image } from '../ui'
import ButtonBook from '../components/buttonBook'
import FloatingBook from '../components/floatingBook'

import logo from '../images/casa-coyote-logo-footer.png'

function EarlyBookingPage({ data }) {
  const { t } = useTranslation()

  return (
    <LandingPage title={t('landing:earlybooking.title')}>
      <Header
        image={
          <Image
            fluid={data.hero.childImageSharp.fluid}
            layout="background"
            style={{ opacity: 0.5 }}
          />
        }
      >
        <Stack
          spacing={4}
          maxWidth="380px"
          alignSelf={{ base: 'center', md: 'flex-start' }}
          justifyContent="center"
        >
          <Flex
            alignItems="flex-start"
            justifyContent="center"
            width="100%"
            maxWidth="150px"
            height="auto"
            width="100%"
            marginX="auto"
            opacity="0.85"
          >
            <img style={{ width: '100%' }} src={logo} />
          </Flex>
          <H1 color="white" fontSize="5xl" textAlign="center">
            {t('landing:earlybooking.hero.title')}
          </H1>
          <P color="white" textAlign="center" fontSize="lg">
            {t('landing:earlybooking.hero.desc')}
          </P>
          <ButtonBook size="lg" colorScheme="red" width="100%" promotion="lastminute" />
          <P textAlign="center" color="white" lineHeight="shorter" fontSize="sm">
            {t('landing:earlybooking.hero.terms')}
          </P>
        </Stack>
      </Header>

      <Features
        title={t('landing:why.title')}
        list={[
          {
            image: <Image fixed={data.why1.childImageSharp.fixed} layout="background" />,
            title: t('landing:why.features.one.title'),
            desc: t('landing:why.features.one.desc'),
          },
          {
            image: <Image fixed={data.why2.childImageSharp.fixed} layout="background" />,
            title: t('landing:why.features.two.title'),
            desc: t('landing:why.features.two.desc'),
          },
          {
            image: <Image fixed={data.why3.childImageSharp.fixed} layout="background" />,
            title: t('landing:why.features.three.title'),
            desc: t('landing:why.features.three.desc'),
          },
        ]}
      />

      <Gallery
        title={t('landing:gallery.title')}
        viewPhotos={t('common:viewPhotos')}
        images={data.gallery.edges.map((image) => (
          <Image key={v4()} fixed={image.node.childImageSharp.fixed} layout="background" />
        ))}
      />

      <Faqs title={t('landing:faq.title')} list={t('landing:faq.faqs', { returnObjects: true })} />

      <FloatingBook
        title={t('landing:earlybooking.floatingBookNow.title')}
        desc={t('landing:earlybooking.floatingBookNow.desc')}
        colorScheme="red"
        promotion="EARLYBOOKING"
        arrival="2021-05-01"
        departure="2021-05-02"
      />
    </LandingPage>
  )
}

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "index/background.jpg" }) {
      ...bannerSectionImage
    }

    gallery: allFile(
      filter: { relativeDirectory: { eq: "landing/gallery" } }
      sort: { fields: name }
    ) {
      ...multipleFixedImage
    }

    why1: file(relativePath: { eq: "landing/magic-jungle.jpeg" }) {
      ...fixedImage
    }

    why2: file(relativePath: { eq: "landing/beach-club.jpg" }) {
      ...fixedImage
    }

    why3: file(relativePath: { eq: "landing/loco-tulum.jpg" }) {
      ...fixedImage
    }
  }
`

export default EarlyBookingPage
