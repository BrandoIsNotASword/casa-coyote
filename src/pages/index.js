import React from 'react'
import { Divider, Flex, Box, Text } from '@chakra-ui/core'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Article from '../components/article'
import Section from '../components/section'
import { H1, H4 } from '../components/globals'
import FeatureList from '../components/featureList'
import EmbedVideo from '../components/embedVideo'

import Carousel from '../components/carousel'

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Article>
        <Section textAlign="center">
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

        <Section>
          <EmbedVideo
            height={{ base: '250px', sm: '350px', md: '450px', lg: '550px', xl: '650px' }}
            url="https://youtu.be/FwB5P5XMymQ"
          />
        </Section>

        <Section>
          <Flex direction={{ base: 'column', lg: 'row' }} height={{ lg: '500px' }}>
            <Flex
              direction="column"
              flexShrink={0}
              flexBasis="50%"
              padding={{ lg: 10 }}
              marginBottom={{ base: 6, lg: 0 }}
              justify="center"
            >
              <H4 marginBottom={2}>WELCOME TO CASA COYOTE</H4>
              <H1>Eco-Hotel in Tulum, México</H1>
              <Text fontWeight="light" marginTop={4} fontSize="lg">
                Stay at Casa Coyote, an amazing experience that will free your mind & touch your
                soul. Very cozy rooms, 100% ECO PRIVATE SUITES, private terrace, fresh and quiet
                areas, located at the beach side (3 min walk).
              </Text>
            </Flex>
            <Box
              flexShrink={0}
              flexBasis="50%"
              backgroundColor="gray.100"
              overflow="hidden"
              position="relative"
            >
              <Carousel>
                <Box
                  paddingBottom={{ base: '75%', lg: '500px' }}
                  backgroundPosition="center"
                  backgroundSize="cover"
                  backgroundImage="url(https://www.hotelcasacoyotetulum.com/wp-content/uploads/2019/01/Casa-Coyote-14.jpeg)"
                />
                <Box
                  paddingBottom={{ base: '75%', lg: '500px' }}
                  backgroundPosition="center"
                  backgroundSize="cover"
                  backgroundImage="url(https://www.hotelcasacoyotetulum.com/wp-content/uploads/2019/01/Sala-Casa-Coyote.jpg)"
                />
                <Box
                  paddingBottom={{ base: '75%', lg: '500px' }}
                  backgroundPosition="center"
                  backgroundSize="cover"
                  backgroundImage="url(https://www.hotelcasacoyotetulum.com/wp-content/uploads/2019/01/Casa-Coyote-7.jpeg)"
                />
                <Box
                  paddingBottom={{ base: '75%', lg: '500px' }}
                  backgroundPosition="center"
                  backgroundSize="cover"
                  backgroundImage="url(https://www.hotelcasacoyotetulum.com/wp-content/uploads/2019/01/Ba%C3%B1o-Casa-Coyote.jpg)"
                />
                <Box
                  paddingBottom={{ base: '75%', lg: '500px' }}
                  backgroundPosition="center"
                  backgroundSize="cover"
                  backgroundImage="url(https://www.hotelcasacoyotetulum.com/wp-content/uploads/2019/01/Casa-3-Casa-Coyote.jpg)"
                />
              </Carousel>
            </Box>
          </Flex>
        </Section>
      </Article>
    </Layout>
  )
}

export default IndexPage
