import React from 'react'
import { v4 } from 'uuid'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { graphql } from 'gatsby'
import { Divider, Stack, Button, Box, Text } from '@chakra-ui/core'
import { GiCutDiamond, GiOakLeaf, GiStarsStack, GiAirtightHatch } from 'react-icons/gi'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Article from '../components/article'
import Section from '../components/section'
import GalleryContent from '../components/galleryContent'
import { H1, H2, H3, H4 } from '../components/globals'
import { FeatureList, FeatureItem } from '../components/featureList'
import EmbedVideo from '../components/embedVideo'
import BookButton from '../components/bookButton'
import FormContact from '../components/formContact'

function IndexPage({ data }) {
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO title="Home" />
      <Hero bg={data.hero.childImageSharp.fixed.srcWebp} text={t('hero')} />
      <Article>
        <Section textAlign="center" id="hotel">
          <H2 fontSize="md" fontWeight="bold" marginBottom={2}>
            {t('intro.subtitle')}
          </H2>
          <H1>{t('intro.title')}</H1>
          <Text fontWeight="light" maxWidth="600px" marginX="auto" marginTop={4} fontSize="lg">
            {t('intro.desc')}
          </Text>
          <Divider maxWidth="600px" marginX="auto" marginY={8} />
          <FeatureList>
            <FeatureItem
              icon={<GiCutDiamond size="3rem" />}
              title={t('intro.features.location.title')}
              desc={t('intro.features.location.desc')}
            />
            <FeatureItem
              icon={<GiOakLeaf size="3rem" />}
              title={t('intro.features.nature.title')}
              desc={t('intro.features.nature.desc')}
            />
            <FeatureItem
              icon={<GiStarsStack size="3rem" />}
              title={t('intro.features.ammenities.title')}
              desc={t('intro.features.ammenities.desc')}
            />
            <FeatureItem
              icon={<GiAirtightHatch size="3rem" />}
              title={t('intro.features.private.title')}
              desc={t('intro.features.private.desc')}
            />
          </FeatureList>
        </Section>

        <Section>
          <EmbedVideo
            height={{ base: '250px', sm: '350px', md: '450px', lg: '550px', xl: '650px' }}
            url="https://youtu.be/RyW1PLKzG0A"
          />
        </Section>

        <Section id="rooms">
          <GalleryContent
            images={data.rooms.edges.map((image) => image.node.childImageSharp.fixed.srcWebp)}
          >
            <H4 marginBottom={2}>{t('rooms.subtitle')}</H4>
            <H3>{t('rooms.title')}</H3>
            <Stack spacing={4} marginTop={4}>
              {t('rooms.desc', { returnObjects: true }).map((text) => (
                <Text key={v4()}>{text}</Text>
              ))}
              <Box>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119865.80674981946!2d-87.53094803935669!3d20.14212035995232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4fd74b3025cfe9%3A0xb84a5f174207cf7a!2sHotel%20Casa%20Coyote!5e0!3m2!1sen!2smx!4v1595975229358!5m2!1sen!2smx"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: '0' }}
                  aria-hidden="false"
                  title="Casa Coyote"
                />
              </Box>
              <BookButton maxWidth={{ lg: '200px' }} size="lg" />
            </Stack>
          </GalleryContent>
        </Section>

        <Section id="experience">
          <GalleryContent
            reversed
            images={data.experience.edges.map((image) => image.node.childImageSharp.fixed.srcWebp)}
          >
            <H4 marginBottom={2}>{t('experience.subtitle')}</H4>
            <H3>{t('experience.title')}</H3>
            <Stack spacing={4} marginTop={4}>
              {t('experience.desc', { returnObjects: true }).map((text) => (
                <Text key={v4()}>{text}</Text>
              ))}
              <BookButton maxWidth={{ lg: '200px' }} size="lg" />
            </Stack>
          </GalleryContent>
        </Section>

        <Section id="restaurant">
          <GalleryContent
            images={data.restaurant.edges.map((image) => image.node.childImageSharp.fixed.srcWebp)}
          >
            <H4 marginBottom={2}>{t('restaurant.subtitle')}</H4>
            <H3>{t('restaurant.title')}</H3>
            <Stack spacing={4} marginTop={4}>
              {t('restaurant.desc', { returnObjects: true }).map((text) => (
                <Text key={v4()}>{text}</Text>
              ))}
              <Button
                as="a"
                href="http://locotulum.com/"
                target="_blank"
                rel="noopener nofollow"
                variant="outline"
                variantColor="primary"
                _hover={{ color: 'none' }}
                maxWidth={{ lg: '200px' }}
                size="lg"
              >
                {t('restaurant.button')}
              </Button>
            </Stack>
          </GalleryContent>
        </Section>

        <Section textAlign="center" maxWidth="100%" backgroundColor="#e3f2f3">
          <H4>{t('banner.subtitle')}</H4>
          <Text marginTop={4} fontSize="2xl">
            {t('banner.title')}
          </Text>
          <Button
            as="a"
            href="https://www.locotulumconcierge.com/"
            target="_blank"
            rel="noopener nofollow"
            variantColor="primary"
            variant="outline"
            _hover={{ color: 'none' }}
            maxWidth={{ lg: '200px' }}
            marginTop={4}
            size="lg"
          >
            {t('banner.button')}
          </Button>
        </Section>

        <Section textAlign="center" id="contact">
          <H4 marginBottom={2}>{t('form.subtitle')}</H4>
          <H3>{t('form.title')}</H3>
          <Text>{t('form.desc')}</Text>
          <FormContact />
        </Section>
      </Article>
    </Layout>
  )
}

export const query = graphql`
  fragment multipleFixedImage on FileConnection {
    edges {
      node {
        childImageSharp {
          fixed(width: 720, quality: 75) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  }

  query {
    hero: file(relativePath: { eq: "background-casa-coyote.jpeg" }) {
      childImageSharp {
        fixed(width: 1440, quality: 65) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }

    rooms: allFile(filter: { relativeDirectory: { eq: "rooms" } }) {
      ...multipleFixedImage
    }

    experience: allFile(filter: { relativeDirectory: { eq: "experience" } }) {
      ...multipleFixedImage
    }

    restaurant: allFile(filter: { relativeDirectory: { eq: "restaurant" } }) {
      ...multipleFixedImage
    }
  }
`

export default IndexPage
