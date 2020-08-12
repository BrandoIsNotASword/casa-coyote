import React from 'react'
import { Divider, Stack, Button, Box, Text } from '@chakra-ui/core'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Article from '../components/article'
import Section from '../components/section'
import GalleryContent from '../components/galleryContent'
import { H1, H4 } from '../components/globals'
import FeatureList from '../components/featureList'
// import EmbedVideo from '../components/embedVideo'
import Carousel from '../components/carousel'
import BookButton from '../components/bookButton'
import FormContact from '../components/formContact'

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Article>
        <Section textAlign="center" id="hotel">
          <H4 marginBottom={2}>WELCOME TO CASA COYOTE</H4>
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
            images={[
              'https://www.hotelcasacoyotetulum.com/wp-content/uploads/2019/01/Casa-Coyote-14.jpeg',
              'https://www.hotelcasacoyotetulum.com/wp-content/uploads/2019/01/Sala-Casa-Coyote.jpg',
              'https://www.hotelcasacoyotetulum.com/wp-content/uploads/2019/01/Casa-Coyote-7.jpeg',
              'https://www.hotelcasacoyotetulum.com/wp-content/uploads/2019/01/Ba%C3%B1o-Casa-Coyote.jpg',
              'https://www.hotelcasacoyotetulum.com/wp-content/uploads/2019/01/Casa-3-Casa-Coyote.jpg',
            ]}
          >
            <H4 marginBottom={2}>MEET OUR ECO-SUITES</H4>
            <H1>Our Private Rooms</H1>
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
            images={[
              'https://www.hotelcasacoyotetulum.com/wp-content/uploads/2019/01/Casa-Coyote-14.jpeg',
              'https://www.hotelcasacoyotetulum.com/wp-content/uploads/2019/01/Sala-Casa-Coyote.jpg',
              'https://www.hotelcasacoyotetulum.com/wp-content/uploads/2019/01/Casa-Coyote-7.jpeg',
              'https://www.hotelcasacoyotetulum.com/wp-content/uploads/2019/01/Ba%C3%B1o-Casa-Coyote.jpg',
              'https://www.hotelcasacoyotetulum.com/wp-content/uploads/2019/01/Casa-3-Casa-Coyote.jpg',
            ]}
          >
            <H4 marginBottom={2}>SPA, TEMAZCAL, TOURS</H4>
            <H1>Casa Coyote Experience</H1>
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
              <BookButton maxWidth={{ lg: '200px' }} size="lg" />
            </Stack>
          </GalleryContent>
        </Section>

        <Section id="restaurant">
          <GalleryContent
            images={[
              'https://www.hotelcasacoyotetulum.com/wp-content/uploads/2019/01/Casa-Coyote-14.jpeg',
              'https://www.hotelcasacoyotetulum.com/wp-content/uploads/2019/01/Sala-Casa-Coyote.jpg',
              'https://www.hotelcasacoyotetulum.com/wp-content/uploads/2019/01/Casa-Coyote-7.jpeg',
              'https://www.hotelcasacoyotetulum.com/wp-content/uploads/2019/01/Ba%C3%B1o-Casa-Coyote.jpg',
              'https://www.hotelcasacoyotetulum.com/wp-content/uploads/2019/01/Casa-3-Casa-Coyote.jpg',
            ]}
          >
            <H4 marginBottom={2}>MEET OUR RESTAURANT</H4>
            <H1>Loco Tulum</H1>
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
                variantColor="primary"
                maxWidth={{ lg: '200px' }}
                size="lg"
              >
                Visit site
              </Button>
            </Stack>
          </GalleryContent>
        </Section>

        <Section textAlign="center" id="contact">
          <H4 marginBottom={2}>CONNECT WITH US</H4>
          <H1>Send us a message</H1>
          <Text> Send a message for more information and we'll reach you as soon as posible.</Text>
          <FormContact />
        </Section>
      </Article>
    </Layout>
  )
}

export default IndexPage
