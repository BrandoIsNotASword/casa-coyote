import React from 'react'
import { v4 } from 'uuid'
import { Stack, Flex, Button } from '@chakra-ui/react'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { AiFillCheckCircle, AiOutlineWhatsApp } from 'react-icons/ai'

import LandingPage, { Header, Gallery, Features, Faqs } from '../components/landingPage'

import { H1, P, Image, FloatingBanner } from '../ui'

import logo from '../images/casa-coyote-logo-footer.png'

function DigitalNomadsPage({ data }) {
  const { t } = useTranslation()

  return (
    <LandingPage disableWhatsapp title={t('landing:digitalNomads.title')}>
      <Header
        height="500px"
        image={
          <Image
            fluid={data.hero.childImageSharp.fluid}
            layout="background"
            style={{ opacity: 0.5, transform: 'scaleX(-1)' }}
          />
        }
      >
        <Stack
          spacing={4}
          maxWidth="460px"
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
            {t('landing:digitalNomads.hero.title')}
          </H1>
          <Stack spacing={1} color="white">
            {t('landing:digitalNomads.hero.features', { returnObjects: true }).map((text) => (
              <P
                key={v4()}
                display="flex"
                alignItems="center"
                justifyContent={{ base: 'flex-start', md: 'center' }}
                lineHeight="shorter"
              >
                <AiFillCheckCircle
                  size="1.25rem"
                  style={{
                    marginRight: '5px',
                    color: 'green',
                    backgroundColor: 'white',
                    borderRadius: '100px',
                    flexShrink: 0,
                  }}
                />
                {text}
              </P>
            ))}
          </Stack>
          <Button
            as="a"
            target="_blank"
            href={`https://api.whatsapp.com/send?phone=5219983497125&text=${t(
              'common:whatsappTextDigitalNomads'
            )}`}
            width="100%"
            leftIcon={<AiOutlineWhatsApp size="1.25rem" />}
            size="lg"
            colorScheme="green"
          >
            {t('common:bookWhatsapp')}
          </Button>
          <P textAlign="center" color="white" lineHeight="shorter" fontSize="sm">
            {t('landing:digitalNomads.hero.terms')}
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

      <FloatingBanner>
        <Stack spacing={1}>
          <P fontSize="14px" fontWeight="bold" lineHeight="none">
            {t('landing:digitalNomads.floatingBookNow.title')}
          </P>
          <P fontSize="14px" lineHeight="none">
            {t('landing:digitalNomads.floatingBookNow.desc')}
          </P>
        </Stack>
        <Button
          as="a"
          target="_blank"
          href={`https://api.whatsapp.com/send?phone=5219983497125&text=${t(
            'common:whatsappTextDigitalNomads'
          )}`}
          leftIcon={<AiOutlineWhatsApp size="1.25rem" />}
          colorScheme="green"
        >
          {t('common:bookNow')}
        </Button>
      </FloatingBanner>
    </LandingPage>
  )
}

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "landing/coworking.jpg" }) {
      ...bannerSectionImage
    }

    gallery: allFile(
      filter: { relativeDirectory: { eq: "landing/gallery" } }
      sort: { fields: name }
    ) {
      ...multipleFixedImage
    }

    why1: file(relativePath: { eq: "landing/beach-club.jpg" }) {
      ...fixedImage
    }

    why2: file(relativePath: { eq: "landing/loco-tulum.jpg" }) {
      ...fixedImage
    }

    why3: file(relativePath: { eq: "landing/magic-jungle.jpeg" }) {
      ...fixedImage
    }
  }
`

export default DigitalNomadsPage
