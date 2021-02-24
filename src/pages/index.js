import React, { useState } from 'react'
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

import coyoteHeroLogo from '../images/casa-coyote-hero-logo.png'
import xamanHeroLogo from '../images/casa-xaman-logo.png'
import locoLogo from '../images/index/loco-tulum-logo.png'

function IndexPage({ data }) {
  const isCoyote = process.env.GATSBY_HOTEL_VAR === 'casa-coyote'

  const { t } = useTranslation()
  const [bookSession, setBookSession] = useState('')

  const onSubmit = async (values, setSuccess) => {
    const res = await fetch('https://formspree.io/f/moqpzpan', {
      headers: {
        Accept: 'application/json',
      },
      method: 'post',
      body: JSON.stringify(values),
    })

    if (res.ok) setSuccess(true)
    else setSuccess(false)
  }

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
          justifyContent="center"
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
            {isCoyote ? (
              <Flex alignItems="flex-start" justifyContent="center" width="100%">
                <img style={{ width: '100%' }} src={coyoteHeroLogo} />
              </Flex>
            ) : (
              <Flex
                alignItems="flex-start"
                justifyContent="center"
                width="100%"
                maxWidth={{ base: '125px', md: '160px', lg: '185px' }}
                marginX="auto"
              >
                <img style={{ width: '100%' }} src={xamanHeroLogo} />
              </Flex>
            )}
            <HeroSubtitle as="h1" textAlign="center">
              {t('index:hero')}
            </HeroSubtitle>
            <HeroCta display="flex" width="100%" justifyContent="center" marginTop={2}>
              <ButtonBook pointerEvents="all" color="initial" size="lg" />
            </HeroCta>
          </HeroBody>
        </Stack>

        <Carousel autoplay>
          <FeaturedBanner
            opacity="0.85"
            height={{ base: '350px', md: '450px', lg: '500px' }}
            image={
              <Image
                fluid={
                  isCoyote ? data.hero1.childImageSharp.fluid : data.hero2.childImageSharp.fluid
                }
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
                fluid={
                  isCoyote ? data.hero2.childImageSharp.fluid : data.hero3.childImageSharp.fluid
                }
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
                fluid={
                  isCoyote ? data.hero3.childImageSharp.fluid : data.hero1.childImageSharp.fluid
                }
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
              image={
                <Image
                  fixed={
                    isCoyote
                      ? data.casaCoyoteOurRooms.childImageSharp.fixed
                      : data.casaXamanOurRooms.childImageSharp.fixed
                  }
                  layout="background"
                />
              }
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
          <FeatureList columns={2}>
            <FeatureItem
              direction={{ base: 'column', lg: 'row' }}
              icon={
                <Box
                  flexShrink="0"
                  height="125px"
                  width={{ base: '100%', md: '125px' }}
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
                    {t('index:experience.spa.title').replace('{hotel}', process.env.GATSBY_HOTEL)}
                  </Heading>
                  <P>
                    {t('index:experience.spa.desc')}{' '}
                    <P as="span" fontWeight="bold">
                      {t('index:experience.spa.discount')}
                    </P>
                  </P>
                  <Button
                    onClick={() => setBookSession(t('index:experience.spa.message'))}
                    as="a"
                    href="#contact"
                    colorScheme="teal"
                    width="fit-content"
                  >
                    {t('common:bookSession')}
                  </Button>
                </Stack>
              }
            />
            <FeatureItem
              direction={{ base: 'column', lg: 'row' }}
              icon={
                <Box
                  flexShrink="0"
                  height="125px"
                  width={{ base: '100%', md: '125px' }}
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
                    {t('index:experience.temazcal.title').replace(
                      '{hotel}',
                      process.env.GATSBY_HOTEL
                    )}
                  </Heading>
                  <P>
                    {t('index:experience.temazcal.desc')}{' '}
                    <P as="span" fontWeight="bold">
                      {t('index:experience.temazcal.discount')}
                    </P>
                  </P>
                  <Button
                    onClick={() => setBookSession(t('index:experience.temazcal.message'))}
                    as="a"
                    href="#contact"
                    colorScheme="teal"
                    width="fit-content"
                  >
                    {t('common:bookSession')}
                  </Button>
                </Stack>
              }
            />
          </FeatureList>

          <RowContent id="experience" reversedInMobile>
            <ColInfo
              height={{ lg: '400px' }}
              title={t('index:experience.title').replace('{hotel}', process.env.GATSBY_HOTEL)}
              backgroundColor="primary.900"
              color="white"
            >
              <P>{t('index:experience.desc')}</P>
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

          <RowContent id="restaurant">
            <ColImage
              image={<Image fixed={data.locoTulum.childImageSharp.fixed} layout="background" />}
            />
            <ColInfo
              title={t('index:restaurant.title')}
              backgroundColor="primary.900"
              color="white"
            >
              <Flex alignItems="flex-start" justifyContent="center" width="200px" flexShrink="0">
                <img src={locoLogo} />
              </Flex>
              <P>{t('index:restaurant.desc')}</P>
              <Button
                href="http://locotulum.com/"
                as="a"
                colorScheme="gray"
                color="initial"
                target="_blank"
                width="fit-content"
              >
                {t('common:visitRestaurant')}
              </Button>
            </ColInfo>
          </RowContent>
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
            height={{ base: '350px', md: '400px' }}
            alignItems="flex-start"
            image={
              <Image
                fluid={data.digitalNomads.childImageSharp.fluid}
                layout="background"
                style={{ opacity: 0.75 }}
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
              <P fontSize="2xl" fontWeight="bold">
                {t('index:coworking.title')}
              </P>
              <P>{t('index:coworking.desc')}</P>
              <Box pointerEvents="initial">
                <Button
                  href="https://www.hotelcasacoyotetulum.com/digital-nomads/"
                  as="a"
                  colorScheme="gray"
                  color="initial"
                  target="_blank"
                >
                  {t('index:coworking.button')}
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
            onSubmit={onSubmit}
            successText={t('common:form.successText')}
            buttonText={t('common:form.sendMessage')}
            name={{
              label: t('common:form.name.label'),
              required: t('common:form.name.required'),
              invalid: t('common:form.name.invalid'),
              placeholder: t('common:form.name.placeholder'),
            }}
            email={{
              required: t('common:form.email.required'),
              invalid: t('common:form.email.invalid'),
              placeholder: t('common:form.email.placeholder'),
            }}
            message={{
              label: t('common:form.message.label'),
              required: t('common:form.message.required'),
              invalid: t('common:form.message.invalid'),
              defaultValue: bookSession,
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

    casaCoyoteOurRooms: file(relativePath: { eq: "index/casa-coyote-our-rooms.jpg" }) {
      ...fixedImage
    }

    casaXamanOurRooms: file(relativePath: { eq: "index/casa-xaman-our-rooms.jpg" }) {
      ...fixedImage
    }

    temazcal: file(relativePath: { eq: "index/temazcal.jpg" }) {
      ...fixedImage
    }

    spa: file(relativePath: { eq: "index/spa.jpg" }) {
      ...fixedImage
    }

    locoTulum: file(relativePath: { eq: "index/loco-tulum.png" }) {
      ...fixedImage
    }

    digitalNomads: file(relativePath: { eq: "landing/coworking2.png" }) {
      ...bannerSectionImage
    }
  }
`

export default IndexPage
