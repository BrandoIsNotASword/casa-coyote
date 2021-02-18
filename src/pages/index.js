import React from 'react'
import { graphql } from 'gatsby'
import { v4 } from 'uuid'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { Box, Flex, Button, Stack } from '@chakra-ui/react'

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
      <Hero
        image={
          <Image
            fluid={data.hero.childImageSharp.fluid}
            layout="background"
            style={{ opacity: 0.5 }}
          />
        }
        height={{ base: '350px', sm: '450px', md: '500px' }}
      >
        <HeroBody
          justifyContent={{ base: 'flex-end', md: 'center' }}
          maxWidth={{ base: '300px', md: '400px' }}
          marginX={{ base: 'auto', md: 'initial' }}
          paddingBottom={{ base: 8, md: 0 }}
        >
          <Flex justifyContent="center" width="100%">
            <img style={{ height: 'auto', width: '100%' }} src={heroLogo} />
          </Flex>
          <HeroSubtitle as="h1" textAlign="center">
            {t('index:hero')}
          </HeroSubtitle>
          <HeroCta display="flex" width="100%" justifyContent="center" marginTop={2}>
            <ButtonBook size="lg" />
          </HeroCta>
        </HeroBody>
      </Hero>

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

        <Section id="experience">
          <RowContent reversedInMobile>
            <ColInfo
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
                height="100%"
                images={data.gallery.edges.map((image) => (
                  <Image key={v4()} fixed={image.node.childImageSharp.fixed} layout="background" />
                ))}
                buttonText={t('common:viewPhotos')}
              />
            </ColContent>
          </RowContent>
        </Section>

        <Section
          id="restaurant"
          paddingTop="0"
          paddingBottom="0"
          fullWidth
          color="white"
          position="relative"
        >
          <Stack
            position="absolute"
            width="100%"
            height="100%"
            justifyContent="center"
            zIndex="1"
            paddingRight={{ base: 6, md: 14, xl: 20 }}
            paddingLeft={{ base: 6, md: 14, xl: 20 }}
            pointerEvents="none"
            maxWidth="700px"
          >
            <Flex>
              <Flex justifyContent="center" width={{ base: '200px', md: '300px' }} flexShrink="0">
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

          <Carousel>
            <FeaturedBanner
              opacity="0.35"
              height={{ base: '350px', lg: '500px' }}
              image={
                <Image
                  fluid={data.bgLoco1.childImageSharp.fluid}
                  layout="background"
                  style={{ opacity: 0.5 }}
                />
              }
            />
            <FeaturedBanner
              opacity="0.35"
              height={{ base: '350px', lg: '500px' }}
              image={
                <Image
                  fluid={data.bgLoco2.childImageSharp.fluid}
                  layout="background"
                  style={{ opacity: 0.5 }}
                />
              }
            />
            <FeaturedBanner
              opacity="0.35"
              height={{ base: '350px', lg: '500px' }}
              image={
                <Image
                  fluid={data.bgLoco3.childImageSharp.fluid}
                  layout="background"
                  style={{ opacity: 0.5 }}
                />
              }
            />
          </Carousel>
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
    hero: file(relativePath: { eq: "index/background.jpg" }) {
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

    bgLoco1: file(relativePath: { eq: "index/background-loco-tulum.jpg" }) {
      ...bannerSectionImage
    }

    bgLoco2: file(relativePath: { eq: "index/background-loco-tulum-2.jpg" }) {
      ...bannerSectionImage
    }

    bgLoco3: file(relativePath: { eq: "index/background-loco-tulum-3.jpg" }) {
      ...bannerSectionImage
    }
  }
`

export default IndexPage
