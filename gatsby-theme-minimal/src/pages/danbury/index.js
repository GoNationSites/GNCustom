/** @jsx jsx */
import { jsx, Box, Flex, Button, Text } from 'theme-ui';
import PageTransition from 'gatsby-plugin-page-transitions';
import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

import cloudinaryOptimize from '../../helpers/cloudinaryHelper';
import Layout from '../../components/Layout';
import AboutText from '../../components/AboutText';
import ContentShowcase from '../../components/ContentShowcase';
import MenuShowcaseSlider from '../../components/MenuShowcaseSlider';
import cloudinaryHelper from '../../helpers/cloudinaryHelper';

import FullAddress from '../../components/FullAddress';
import FullPhone from '../../components/FullPhone';

const Danbury = () => {
  const data = useStaticQuery(graphql`
    query danburyHome {
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
  const site = data.allSiteData.edges.filter(
    el => el.node.data.city === 'Woodbury'
  )[0].node.data;
  const contentShowcaseData = [
    {
      img: cloudinaryHelper(
        'https://res.cloudinary.com/gonation/image/upload/v1598039135/sites/mix-prime/showcase-1.jpg',
        1200
      ),
      title: 'Voted the best steakhouse for a reason',
      txt:
        'Taste a difference at mix prime with hand selected steaks, mouth watering sushi and craft cocktails. ',
      btn: {
        title: 'View Menu',
        link: 'danbury/menu',
      },
    },
    {
      img: cloudinaryHelper(
        'https://res.cloudinary.com/gonation/image/upload/v1598039135/sites/mix-prime/showcase-2.jpg',
        1200
      ),
      title: 'Discover what’s special',
      txt: 'Don’t miss out on our Sunday Brunch and bar specials.',
      btn: {
        title: 'Learn More',
        link: 'danbury/events',
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
      transitionTime={500}>
      <Layout pageTitle='home'>
        <Box sx={{ maxWidth: '730px', margin: 'auto' }}>
          <Flex
            sx={{ display: ['flex', 'none'], flexWrap: 'wrap', padding: 2 }}>
            <Box sx={{ flex: '1 1 50%', pr: 2 }}>
              <Button variant='blackTransparent'>
                <FullPhone
                  data={site}
                  txt='Call'
                  st={{ color: '#111!important' }}
                />
              </Button>
            </Box>
            <Box sx={{ flex: '1 1 50%', pl: 2 }}>
              <Button variant='blackTransparent'>
                <FullAddress
                  data={site}
                  text='Directions'
                  st={{ color: '#111!important' }}
                />
              </Button>
            </Box>
            <Box sx={{ flex: '1 1 100%', pt: 2 }}>
              <Button variant='blackFull'>
                <Text
                  as='a'
                  sx={{ color: 'white' }}
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.opentable.com/r/mix-prime-steakhouse-fish-and-sushi-bar-woodbury'>
                  Make A Reservation
                </Text>
              </Button>
            </Box>
          </Flex>
          <AboutText location='Danbury'></AboutText>
        </Box>
        <Box sx={{ maxWidth: '1200px', margin: 'auto' }}>
          <ContentShowcase data={contentShowcaseData} />
        </Box>

        <MenuShowcaseSlider id='bzn-vBPQfZmCTC2V2Y_BpE6SPw' pl='1' />
      </Layout>
    </PageTransition>
  );
};

export default Danbury;
