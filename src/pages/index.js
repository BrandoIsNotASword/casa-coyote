import React from 'react'
import { graphql } from 'gatsby'
import { v4 } from 'uuid'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { Box, Flex, Button, Stack, Heading } from '@chakra-ui/react'

import {
  Article,
  Section,
  Hero,
  HeroBody,
  HeroSubtitle,
  HeroCta,
  RowContent,
  ColImage,
  ColInfo,
  P,
  FeaturedBanner,
  Carousel,
  Gallery,
  ColContent,
  Image,
  FeatureList,
  FeatureItem,
} from '../ui'

import Layout from '../components/layout'
import Features from '../components/features'
import FormContact from '../components/formContact'
import ButtonBook from '../components/buttonBook'

import heroLogo from '../images/hero-logo.png'
import locoLogo from '../images/index/loco-tulum-logo.png'

function IndexPage({ data }) {
  const { t } = useTranslation()

  return (
    <Layout title={t('index:title')}>
      <Section
        paddingTop="0"
        paddingBottom="0"
        fullWidth
        color="white"
        position="relative"
        spacing="0"
      >
        <Stack
          position="absolute"
          width="100%"
          height="100%"
          justifyContent={{ base: 'flex-end', md: 'center' }}
          zIndex="1"
          paddingRight={{ base: 6, md: 14, xl: 20 }}
          paddingLeft={{ base: 6, md: 14, xl: 20 }}
          pointerEvents="none"
          maxWidth="700px"
        >
          <HeroBody
            justifyContent={{ base: 'flex-end', md: 'center' }}
            maxWidth={{ base: '300px', md: '400px' }}
            marginX={{ base: 'auto', md: 'initial' }}
            paddingBottom={{ base: 8, md: 0 }}
          >
            <Flex alignItems="flex-start" justifyContent="center" width="100%">
              <img style={{ width: '100%' }} src={heroLogo} />
            </Flex>
            <HeroSubtitle as="h1" textAlign="center">
              {t('index:hero')}
            </HeroSubtitle>
            <HeroCta display="flex" width="100%" justifyContent="center" marginTop={2}>
              <ButtonBook pointerEvents="all" color="initial" size="lg" />
            </HeroCta>
          </HeroBody>
        </Stack>

        <Carousel>
          <FeaturedBanner
            opacity="0.85"
            height={{ base: '350px', md: '450px', lg: '500px' }}
            image={
              <Image
                fluid={data.hero1.childImageSharp.fluid}
                layout="background"
                style={{ opacity: 0.5 }}
              />
            }
          />
          <FeaturedBanner
            opacity="0.85"
            height={{ base: '350px', md: '450px', lg: '500px' }}
            image={
              <Image
                fluid={data.hero2.childImageSharp.fluid}
                layout="background"
                style={{ opacity: 0.5 }}
              />
            }
          />
          <FeaturedBanner
            opacity="0.85"
            height={{ base: '350px', lg: '500px' }}
            image={
              <Image
                fluid={data.hero3.childImageSharp.fluid}
                layout="background"
                style={{ opacity: 0.5 }}
              />
            }
          />
        </Carousel>
      </Section>

      <Article>
        <Section
          id="hotel"
          title={t('index:intro.title')}
          subtitle={t('index:intro.desc')}
          titleAlign="center"
        >
          <Features />
        </Section>

        <Section id="rooms" paddingBottom={0}>
          <RowContent>
            <ColImage
              image={<Image fixed={data.ourRooms.childImageSharp.fixed} layout="background" />}
            />
            <ColInfo title={t('index:rooms.title')} backgroundColor="primary.900" color="white">
              {t('index:rooms.desc', { returnObjects: true }).map((text) => (
                <P key={v4()}>{text}</P>
              ))}
              <ButtonBook color="initial" />
            </ColInfo>
          </RowContent>
        </Section>

        <Section id="experience" spacing={10}>
          <RowContent reversedInMobile>
            <ColInfo
              height={{ lg: '400px' }}
              title={t('index:experience.title')}
              backgroundColor="primary.900"
              color="white"
            >
              {t('index:experience.desc', { returnObjects: true }).map((text) => (
                <P key={v4()}>{text}</P>
              ))}
              <ButtonBook color="initial" />
            </ColInfo>
            <ColContent>
              <Gallery
                paddingBottom="0"
                marginBottom="0"
                height={{ lg: '100%' }}
                images={data.gallery.edges.map((image) => (
                  <Image key={v4()} fixed={image.node.childImageSharp.fixed} layout="background" />
                ))}
                buttonText={t('common:viewPhotos')}
              />
            </ColContent>
          </RowContent>

          <FeatureList columns={2}>
            <FeatureItem
              direction={{ base: 'column', md: 'row' }}
              icon={
                <Box
                  height="125px"
                  width="125px"
                  borderRadius="15px"
                  position="relative"
                  overflow="hidden"
                >
                  <Image fixed={data.temazcal.childImageSharp.fixed} layout="background" />
                </Box>
              }
              desc={
                <Stack>
                  <Heading as="h4" fontWeight="bold" fontSize="xl">
                    Temazcal Casa Coyote
                  </Heading>
                  <P>
                    El spa ofrece una variedad más amplia de trabajo corporal y energético curativo
                    para ayudar mejor a los huéspedes del retiro a alcanzar sus objetivos de salud
                    óptimos, tanto física como energéticamente durante su estancia con nosotros.
                  </P>
                  <Button colorScheme="teal" width="fit-content">
                    Book a session
                  </Button>
                </Stack>
              }
            />
            <FeatureItem
              direction={{ base: 'column', md: 'row' }}
              icon={
                <Box
                  height="125px"
                  width="125px"
                  borderRadius="15px"
                  position="relative"
                  overflow="hidden"
                >
                  <Image fixed={data.spa.childImageSharp.fixed} layout="background" />
                </Box>
              }
              desc={
                <Stack>
                  <Heading as="h4" fontWeight="bold" fontSize="xl">
                    Spa Casa Coyote
                  </Heading>
                  <P>
                    El temazcal es una ceremonia de purificación física, mental y espiritual.
                    Entramos en el inipi para dejar ir lo que no necesitamos para nuestra vida
                    diaria, para dejar ir nuestro miedo, ira, depresión y todas las cosas que
                    realmente no nos pertenecen. Tenemos una ceremonia de 90 minutos en grupo y en
                    pareja.
                  </P>
                  <Button colorScheme="teal" width="fit-content">
                    Book a session
                  </Button>
                </Stack>
              }
            />
          </FeatureList>
        </Section>

        <Section
          id="restaurant"
          paddingTop="0"
          paddingBottom="0"
          fullWidth
          color="white"
          position="relative"
          spacing={0}
        >
          <FeaturedBanner
            opacity="0.35"
            height={{ base: '350px', lg: '500px' }}
            alignItems="flex-start"
            image={
              <Image
                fluid={data.bgLoco.childImageSharp.fluid}
                layout="background"
                style={{ opacity: 0.5 }}
              />
            }
          >
            <Stack
              width="100%"
              height="100%"
              paddingRight={{ base: 6, md: 14, xl: 20 }}
              paddingLeft={{ base: 6, md: 14, xl: 20 }}
              maxWidth="700px"
              alignItems="flex-start"
            >
              <Flex>
                <Flex
                  alignItems="flex-start"
                  justifyContent="center"
                  width={{ base: '200px', md: '300px' }}
                  flexShrink="0"
                >
                  <img src={locoLogo} />
                </Flex>
              </Flex>
              <P fontSize="lg" fontWeight="bold">
                {t('index:restaurant.subtitle')}
              </P>
              <P>{t('index:restaurant.desc')}</P>
              <P fontSize="2xl" textAlign="center"></P>
              <Box pointerEvents="initial">
                <Button
                  href="http://locotulum.com/"
                  as="a"
                  colorScheme="gray"
                  color="initial"
                  target="_blank"
                >
                  {t('common:visitRestaurant')}
                </Button>
              </Box>
            </Stack>
          </FeaturedBanner>
        </Section>

        <Section
          id="contact"
          title={t('index:form.title')}
          subtitle={t('index:form.desc')}
          titleAlign="center"
          backgroundColor="gray.100"
        >
          <FormContact
            padding={8}
            backgroundColor="white"
            maxWidth="680px"
            width="100%"
            marginX="auto"
            hideOnSuccess
            onSubmit={() => {}}
            successText={t('common:form.successText')}
            buttonText={t('common:form.sendMessage')}
            name={{
              label: t('common:form.name.label'),
              required: t('common:form.name.required'),
              invalid: t('common:form.name.invalid'),
              placeholder: t('common:form.name.placeholder'),
            }}
            email={{
              required: t('common:form.name.required'),
              invalid: t('common:form.name.invalid'),
              placeholder: t('common:form.name.placeholder'),
            }}
            message={{
              label: t('common:form.name.label'),
              required: t('common:form.name.required'),
              invalid: t('common:form.name.invalid'),
            }}
          />
        </Section>
      </Article>
    </Layout>
  )
}

export const query = graphql`
  query {
    hero1: file(relativePath: { eq: "index/background3.jpeg" }) {
      ...bannerSectionImage
    }

    hero2: file(relativePath: { eq: "index/background2.png" }) {
      ...bannerSectionImage
    }

    hero3: file(relativePath: { eq: "index/background.jpg" }) {
      ...bannerSectionImage
    }

    gallery: allFile(
      filter: { relativeDirectory: { eq: "index/gallery" } }
      sort: { fields: name }
    ) {
      ...multipleFixedImage
    }

    ourRooms: file(relativePath: { eq: "index/our-rooms.jpg" }) {
      ...fixedImage
    }

    temazcal: file(relativePath: { eq: "index/temazcal.jpg" }) {
      ...fixedImage
    }

    spa: file(relativePath: { eq: "index/spa.jpg" }) {
      ...fixedImage
    }

    bgLoco: file(relativePath: { eq: "index/background-loco-tulum.jpg" }) {
      ...bannerSectionImage
    }
  }
`

export default IndexPage
