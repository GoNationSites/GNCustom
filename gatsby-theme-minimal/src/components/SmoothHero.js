/** @jsx jsx */
import { jsx, Box, Flex, Text } from 'theme-ui';
import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import axios from 'axios';
import jsonAdapter from 'axios-jsonp';
// Components
import HeroSlider, {
  Slide,
  ButtonsNav,
  Nav,
  OverlayContainer,
} from 'hero-slider';
import slugify from 'slugify';

import printAddress from '../helpers/printAddress';
import getGoogleStr from '../helpers/getGoogleStr';

import FullAddress from './FullAddress';
import FullPhone from './FullPhone';

import cloudinaryHelper from '../helpers/cloudinaryHelper';

import ShoutCard from './ShoutCard';

const SmoothHero = ({ location }) => {
  const [shoutData, setShoutData] = useState(null);
  const data = useStaticQuery(graphql`
    query smoothQuery {
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
    el => el.node.data.city === location
  )[0].node.data;

  const id = () => {
    if (location === 'Danbury') {
      return 'bzn-vBPQfZmCTC2V2Y_BpE6SPw';
    } else return 'bzn-mmT_2ynbR4eGFehR2VEi8g';
  };

  const shoutURL = `https://data.prod.gonation.com/profile/shoutsnew/${id()}`;

  useEffect(() => {
    axios({
      url: shoutURL,
      adapter: jsonAdapter,
    }).then(res => {
      setShoutData(res.data);
    });
  }, []);

  const images = () => {
    if (site.city === 'Woodbury') {
      return [
        'https://res.cloudinary.com/gonation/image/upload/v1601652432/sites/mix-prime/399A8129.jpg',
        'https://res.cloudinary.com/gonation/image/upload/v1601671552/sites/mix-prime/hero.jpg',
        'https://res.cloudinary.com/gonation/image/upload/v1599093019/sites/mix-prime/tuna_tartare_9.jpg',
      ];
      // return an array of Woodbury Images
    } else {
      // else return an array of Danbury Images
      return [
        'https://res.cloudinary.com/gonation/image/upload/v1599093274/sites/mix-prime/steak_15.jpg',
        // 'https://res.cloudinary.com/gonation/image/upload/v1598359600/sites/mix-prime/woodbury-content-2.jpg',
        'https://res.cloudinary.com/gonation/image/upload/v1599093393/sites/mix-prime/steak_1.jpg',
      ];
    }
  };

  const renderReservationButton = () => (
    <Box sx={{ marginX: 3 }}>
      <Text
        as='a'
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.opentable.com/restref/client/?rid=141181&restref=141181&corrid=f6b19c54-a302-4aa3-b674-4111b5f2233c'>
        Reservations
      </Text>
    </Box>
  );

  const routes = [
    // {
    //   path: '/parties',
    //   name: 'Parties',
    //   isExternal: false,
    // },
    {
      path: '(203) 825-4444',
      name: 'Gift Cards',
      isExternal: true,
    },
    {
      path: `/${slugify(site.city, { lower: true })}/careers`,
      name: 'Careers',
      isExternal: false,
    },
  ];

  return (
    <Box sx={{ position: 'relative' }}>
      <HeroSlider
        orientation='horizontal'
        initialSlide={1}
        style={{
          color: '#FFF',
        }}
        settings={{
          slidingDuration: 500,
          slidingDelay: 500,
          shouldAutoplay: true,
          shouldDisplayButtons: false,
          autoplayDuration: 12000,
          // height: ['80vh', '90vh'],
          // height: ['800px', '90vh'],
          // height: ['90vmin'],
          height: '90vh',
        }}>
        {images().map(image => (
          <Slide
            background={{
              backgroundImage: cloudinaryHelper(image, 2000),
              backgroundAnimation: 'zoom',
            }}
            alt={'Mix Prime Menu And Venue Slider Showcase'}
          />
        ))}
      </HeroSlider>
      <Flex
        sx={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          left: 0,
          top: 0,
          justifyContent: 'center',
          alignItems: 'flex-start',
          zIndex: 3,
          pt: 5,
        }}>
        <Box
          sx={{
            background: 'rgba(0,0,0,.4)',
            pb: [1, 2, 0],
            pt: [1, 2, 0],
            mx: 3,
          }}>
          <img
            sx={{ maxWidth: ['300px', '500px'] }}
            src={
              location === 'Danbury'
                ? 'https://res.cloudinary.com/gonation/image/upload/v1597941857/sites/mix-prime/logo-white.png'
                : 'https://res.cloudinary.com/gonation/image/upload/v1598370120/sites/mix-prime/prime-woodbury-white.png'
            }
            alt='Mix Prime'
          />
          <Flex
            sx={{
              justifyContent: 'center',
              paddingX: 3,
              textTransform: 'uppercase',
              fontFamily: 'heading',
              textAlign: 'center',
              display: ['flex', 'none', 'none'],
            }}></Flex>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            left: 5,
            bottom: 6,
            display: ['none', 'none', 'block'],
          }}>
          <Box sx={{ background: 'white' }}>
            {shoutData && shoutData.shout ? (
              <ShoutCard isHome data={shoutData}></ShoutCard>
            ) : (
              ''
            )}
          </Box>
        </Box>

        <Box
          sx={{
            position: 'absolute',
            left: 0,
            bottom: 0,
            display: ['none', 'none', 'block'],
            width: '100%',
            background: 'rgba(0,0,0,.1)',
          }}>
          <Flex
            sx={{
              justifyContent: 'space-between',
              paddingY: '15px',
              paddingX: 4,
              fontFamily: 'heading',
              fontSize: '18px',
              letterSpacing: '.3px!important',
            }}>
            <Flex>
              <Box>
                <FullAddress data={site} />
              </Box>
              <Box sx={{ ml: 4 }}>
                <FullPhone data={site} />
              </Box>
            </Flex>
            <Flex sx={{ textTransform: 'uppercase' }}>
              {routes.map(route => {
                if (route.isExternal) {
                  return (
                    <Box sx={{ paddingX: 4 }}>
                      <Text
                        as='a'
                        href={`tel:${route.path}`}
                        rel='noopener noreferrer'>
                        {route.name}
                      </Text>
                    </Box>
                  );
                } else
                  return (
                    <Flex sx={{ paddingX: 4 }}>
                      <Link to={route.path}>{route.name}</Link>{' '}
                    </Flex>
                  );
              })}
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default SmoothHero;
