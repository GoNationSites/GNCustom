/** @jsx jsx */
import { jsx, Box, Flex, Button, Text, Image, Heading, Link } from 'theme-ui';
import PageTransition from 'gatsby-plugin-page-transitions';

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import cloudinaryOptimize from '../../helpers/cloudinaryHelper';
import Layout from '../../components/LayoutWoodbury';
import AboutText from '../../components/AboutText';
import ContentShowcase from '../../components/ContentShowcase';
import MenuShowcaseSlider from '../../components/MenuShowcaseSlider';
import cloudinaryHelper from '../../helpers/cloudinaryHelper';
import doordash from '../../components/icons/doordash-logo.png';

import FullAddress from '../../components/FullAddress';
import FullPhone from '../../components/FullPhone';

const Woodbury = () => {
  const data = useStaticQuery(graphql`
    query woodburyHome {
      allSiteData {
        edges {
          node {
            data {
              city
              name
              phone
              slug
              state
              street
              zip
              links {
                facebook
                instagram
                twitter
              }
            }
          }
        }
      }
    }
  `);
  const site = data.allSiteData.edges.filter(el => el.node.data.city === 'Woodbury')[0].node.data;

  const contentShowcaseData = [
    {
      img: cloudinaryHelper(
        'https://res.cloudinary.com/gonation/image/upload/v1601652385/sites/mix-prime/Screen_Shot_2020-10-02_at_11.25.29_AM.png',
        1200
      ),
      title: 'Voted the best steakhouse for a reason',
      txt:
        'Taste a difference at mix prime with hand selected steaks, mouth watering sushi and craft cocktails. ',
      btn: {
        title: 'View Menu',
        link: 'woodbury/menu',
      },
    },
    {
      img: cloudinaryHelper(
        'https://res.cloudinary.com/gonation/image/upload/v1598359600/sites/mix-prime/woodbury-content-2.jpg',
        1200
      ),
      title: 'Discover what’s special',
      txt: 'Don’t miss out on our Sunday Brunch and bar specials.',
      btn: {
        title: 'Learn More',
        link: 'woodbury/events',
      },
    },
  ];

  return (
    <PageTransition
      defaultStyle={{
        transition: 'left 500ms cubic-bezier(0.47, 0, 0.75, 0.72)',
        left: '100%',
        position: 'absolute',
        width: '100%',
      }}
      transitionStyles={{
        entering: { left: '0%' },
        entered: { left: '0%' },
        exiting: { left: '100%' },
      }}
      transitionTime={500}
    >
      <Layout pageTitle="home">
        <Box sx={{ maxWidth: '900px', margin: 'auto' }}>
          <Flex sx={{ display: ['flex', 'none'], flexWrap: 'wrap', padding: 2 }}>
            <Box sx={{ flex: '1 1 50%', pr: 2 }}>
              <Button variant="blackTransparent">
                <FullPhone txt="Call" data={site} st={{ color: '#111!important' }} />
              </Button>
            </Box>
            <Box sx={{ flex: '1 1 50%', pl: 2 }}>
              <Button variant="blackTransparent">
                <FullAddress data={site} text="Directions" st={{ color: '#111!important' }} />
              </Button>
            </Box>
            <Box sx={{ flex: '1 1 100%', pt: '8px' }}>
              <Button variant="blackFull" sx={{ border: 'none!important', py: '10px' }}>
                <Text
                  as="a"
                  sx={{ color: 'white', letterSpacing: '.75px' }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.opentable.com/restref/client/?rid=141181&restref=141181&corrid=f6b19c54-a302-4aa3-b674-4111b5f2233c"
                >
                  Make A Reservation
                </Text>
              </Button>
            </Box>
          </Flex>
          <AboutText location="Woodbury"></AboutText>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <a href="" target="_blank" rel="noopener noreferrer">
            <Image sx={{ maxWidth: '300px' }} src={doordash} />
          </a>
        </Box>
        <Box sx={{ maxWidth: '1200px', margin: 'auto' }}>
          <ContentShowcase data={contentShowcaseData} />
        </Box>

        <MenuShowcaseSlider id="bzn-mmT_2ynbR4eGFehR2VEi8g" pl="1" />

        <Box
          className="testin"
          sx={{
            backgroundImage: `url('${cloudinaryOptimize(
              'https://res.cloudinary.com/gonation/image/upload/v1617388779/sites/mix-prime/serving-ct-image.jpg',
              900
            )}')`,
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '25vh 2rem',
            color: 'white',
          }}
        >
          <Heading sx={{ marginBottom: '1rem' }}>Mix prime is serving CT</Heading>
          <Text sx={{ marginBottom: '2rem' }}>
            Find out how local business are vital to the economy
          </Text>

          <Link
            href="https://linkprotect.cudasvc.com/url?a=https%3a%2f%2fservingconnecticut.com%2f&c=E,1,hA45iW0GZJdGWU2_lp0BOlPA2MbuJCyCSHBrRznoiP5v2BNJNsn5x0h4ADkZlBLeOHr2HP5RMLme4LozPT9vTxNK1gc3p9-xVDwmWt19f7h14J2cmx2_Ag,,&typo=1"
            target="_blank"
          >
            <Image
              sx={{
                maxWidth: '300px',
              }}
              src="https://res.cloudinary.com/gonation/image/upload/v1617388067/sites/mix-prime/logo-hero.png"
              alt="reseturants serving connecticut"
            />
          </Link>
        </Box>
      </Layout>
    </PageTransition>
  );
};

export default Woodbury;
