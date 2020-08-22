/** @jsx jsx */
import { jsx, Box, Flex, Text, } from 'theme-ui'
import React from 'react';

// Components
import HeroSlider, {
  Slide,
  ButtonsNav,
  Nav,
  OverlayContainer
} from 'hero-slider';

import cloudinaryHelper from '../helpers/cloudinaryHelper'

const SmoothHero = () => {
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
          {/* <OverlayContainer  >
        </OverlayContainer> */}

          <Slide
            navDescription='Hallstatt - Austria'
            background={{
              backgroundImage: cloudinaryHelper(
                'https://res.cloudinary.com/gonation/image/upload/v1598018071/sites/mix-prime/desktop-slide-1.jpg',
                2000
              ),
              backgroundAnimation: 'zoom',
            }}
          />

          <Slide
            navDescription='Hvitserkur - Iceland'
            background={{
              backgroundImage: cloudinaryHelper(
                'https://res.cloudinary.com/gonation/image/upload/v1598034772/sites/mix-prime/index-2.jpg',
                2000
              ),
              backgroundAnimation: 'zoom',
            }}
          />

          <Slide
            navDescription='Jacksonville - USA'
            background={{
              backgroundImage: cloudinaryHelper(
                'https://res.cloudinary.com/gonation/image/upload/v1598034771/sites/mix-prime/index-1.jpg',
                2000
              ),
              backgroundAnimation: 'zoom',
            }}
          />

          {/* <Slide
          navDescription='Moraine Lake - Canada'
          background={{
            backgroundImage: ,
            backgroundAnimation: 'zoom',
          }}
        /> */}

          {/* <ButtonsNav
          isNullAfterThreshold
          position={{
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        />
        <Nav /> */}
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
          <Box sx={{ background: 'rgba(0,0,0,.4)', pb: [3,3,0] }}>
            <img
              src='https://res.cloudinary.com/gonation/image/upload/v1597941857/sites/mix-prime/logo-white.png'
              alt='Mix Prime'
            />
            <Flex sx={{justifyContent: 'center', paddingX: 3, textTransform: 'uppercase', fontFamily: 'heading', textAlign: 'center', display: ['flex', 'none', 'none']}}>
              <Box sx={{marginX: 3}}>
                  <Text as="a">Call</Text>
              </Box>
              <Box sx={{marginX: 3}}>
                <Text as="a">Directions</Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    );
}

export default SmoothHero;
