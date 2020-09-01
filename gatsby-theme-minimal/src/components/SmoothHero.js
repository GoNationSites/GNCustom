/** @jsx jsx */
import { jsx, Box, Flex, Text } from 'theme-ui';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// Components
import HeroSlider, {
  Slide,
  ButtonsNav,
  Nav,
  OverlayContainer,
} from 'hero-slider';

import printAddress from '../helpers/printAddress';
import getGoogleStr from '../helpers/getGoogleStr';

import cloudinaryHelper from '../helpers/cloudinaryHelper';

const SmoothHero = ({ location }) => {
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

  const images = () => {
    if (site.city === 'Woodbury') {
      return [
        'https://res.cloudinary.com/gonation/image/upload/v1598359431/sites/mix-prime/woodbury-home-1.jpg',
        'https://res.cloudinary.com/gonation/image/upload/v1598359430/sites/mix-prime/woodbury-home-2.jpg',
        'https://res.cloudinary.com/gonation/image/upload/v1598359431/sites/mix-prime/woodbury-home-3.jpg',
      ];
      // return an array of Woodbury Images
    } else {
      // else return an array of Danbury Images
      return [
        'https://res.cloudinary.com/gonation/image/upload/v1598018071/sites/mix-prime/desktop-slide-1.jpg',
        'https://res.cloudinary.com/gonation/image/upload/v1598034772/sites/mix-prime/index-2.jpg',
        'https://res.cloudinary.com/gonation/image/upload/v1598034771/sites/mix-prime/index-1.jpg',
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
          height: '90vmin',
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
          alignItems: 'center',
          zIndex: 3,
        }}>
        <Box sx={{ background: 'rgba(0,0,0,.4)', pb: [3, 3, 0], mx: 3 }}>
          <img
            sx={{ maxWidth: '600px' }}
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
            }}>
            <Box sx={{ marginX: 3 }}>
              <Text as='a' href={`tel:${site.phone}`}>
                Call
              </Text>
            </Box>
            <Box sx={{ marginX: 3 }}>
              <Text
                as='a'
                target='_blank'
                rel='noopener noreferrer'
                href={getGoogleStr(
                  site.name,
                  site.street,
                  site.city,
                  site.zip,
                  site.state
                )}>
                Directions
              </Text>
            </Box>
            {location === 'Danbury' ? renderReservationButton() : ''}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default SmoothHero;
