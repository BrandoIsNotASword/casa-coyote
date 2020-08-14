import React from 'react'
import { graphql } from 'gatsby'
import { Divider, Stack, Button, Box, Text } from '@chakra-ui/core'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Article from '../components/article'
import Section from '../components/section'
import GalleryContent from '../components/galleryContent'
import { H1, H2, H3, H4 } from '../components/globals'
import FeatureList from '../components/featureList'
// import EmbedVideo from '../components/embedVideo'
import BookButton from '../components/bookButton'
import FormContact from '../components/formContact'

function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero bg={data.hero.childImageSharp.fixed.srcWebp} />
      <Article>
        <Section textAlign="center" id="hotel">
          <H2 fontSize="md" fontWeight="bold" marginBottom={2}>
            WELCOME TO CASA COYOTE
          </H2>
          <H1>Eco-Hotel in Tulum, México</H1>
          <Text fontWeight="light" maxWidth="600px" marginX="auto" marginTop={4} fontSize="lg">
            Stay at Casa Coyote, an amazing experience that will free your mind & touch your soul.
            Very cozy rooms, 100% ECO PRIVATE SUITES, private terrace, fresh and quiet areas,
            located at the beach side (3 min walk).
          </Text>
          <Divider maxWidth="600px" marginX="auto" marginY={8} />
          <FeatureList />
        </Section>

        {/* <Section>
          <EmbedVideo
            height={{ base: '250px', sm: '350px', md: '450px', lg: '550px', xl: '650px' }}
            url="https://youtu.be/FwB5P5XMymQ"
          />
        </Section> */}

        <Section id="rooms">
          <GalleryContent
            images={data.rooms.edges.map((image) => image.node.childImageSharp.fixed.srcWebp)}
          >
            <H4 marginBottom={2}>MEET OUR ECO-SUITES</H4>
            <H3>Our Private Rooms</H3>
            <Stack spacing={4} marginTop={4}>
              <Text>
                All Rooms have King Size Bed, Fan, Private Bathroom, Mayan Venting, Full Closet,
                Hand Soap, Body Wash, Organic Shampoo.
              </Text>
              <Text>
                Bath and Beach Towels. Remember that we are here for you at any time & also located
                at beach side (3 min walk to the beach) at the hotel area, next to Be Tulum, Casa
                Malca & Nomade.
              </Text>
              <Text>
                5 minutes from the best restaurants, bars & shops area. Next to us we have the best
                Spa at Tulum Yáan.
              </Text>
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
            <H4 marginBottom={2}>EXPERIENCE TULUM</H4>
            <H3>Casa Coyote Experience</H3>
            <Stack spacing={4} marginTop={4}>
              <Text>
                Spa offers a wider variety of healing bodywork and energy work to better assist
                retreat guests in achieving their optimum health goals, both physically and
                energetically during their stay with us.
              </Text>
              <Text>
                The temazcal is a physical, mental and spiritual purification ceremony. We enter in
                the inipi to let go of what we don’t need for our daily life, to let go of our fear,
                anger, depression and every single thing that don’t really belong to us. We have
                group and couples 90 minute ceremony.
              </Text>
              <Text>
                Sunset experience is an unique opportunity to enjoy the sunset hour in a private
                terrace. A romantic experience to make a toast, to thanks love and life.
              </Text>
              <BookButton maxWidth={{ lg: '200px' }} size="lg" />
            </Stack>
          </GalleryContent>
        </Section>

        <Section id="restaurant">
          <GalleryContent
            images={data.restaurant.edges.map((image) => image.node.childImageSharp.fixed.srcWebp)}
          >
            <H4 marginBottom={2}>MEET OUR RESTAURANT</H4>
            <H3>Loco Tulum</H3>
            <Stack spacing={4} marginTop={4}>
              <Text>
                Loco Tulum is the idea and philosophy of emphasizing the delight of every flavor,
                aroma, color and above all, the true taste of each offering. In turn, it tests the
                senses, and creates a moment of true enjoyment of life.
              </Text>
              <Text>
                In fact, everything in Loco Tulum’s seasonal tasting menu was designed to puzzle,
                amuse and amaze you. This is done by impresario waiters who enjoy the spectacle as
                much as you do.
              </Text>
              <Text>
                Behind this masterful display is Chef Idan Lifshitz and his talented culinary team.
                They have mastered the art of achieving astounding new flavors, textures and aromas.
                Of course, with the added focus on regional ingredients and sustainable growing
                practices, you have a dining experience that is both a visual feast and culinary
                triumph!
              </Text>
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
                Visit restaurant
              </Button>
            </Stack>
          </GalleryContent>
        </Section>

        <Section textAlign="center" maxWidth="100%" backgroundColor="#e3f2f3">
          <H4>MAGIC TOURS AND EXPERIENCES ARE WAITING FOR YOU</H4>
          <Text marginTop={4} fontSize="2xl">
            Loco Concierge helps you to create the best personalized experience in Tulum. <br />
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
            Visit site
          </Button>
        </Section>

        <Section textAlign="center" id="contact">
          <H4 marginBottom={2}>CONNECT WITH US</H4>
          <H3>Send us a message</H3>
          <Text> Send a message for more information and we'll reach you as soon as posible.</Text>
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
