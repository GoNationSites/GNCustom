/** @jsx jsx */
import { jsx, Box, Text, Flex, Image } from 'theme-ui';

import React from 'react';
import slugify from 'slugify';
import cloudinaryOptimize from '../helpers/cloudinaryHelper';
import Img from 'react-cloudinary-lazy-image';

const SimpleHero = ({ pageTitle, location }) => {
  return (
    <Box sx={{ height: '75vh', position: 'relative' }}>
      <Img
        cloudName={'gonation'}
        imageName={`sites/red-rooster/${slugify(location, {
          lower: true,
        })}/${pageTitle}-hero.jpg`}
        fluid={{
          maxWidth: '2000',
        }}
        style={{ width: '100%', pointerEvents: 'none' }}
      />
      <Box
        sx={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          top: 0,
          left: 0,
          padding: 3,
        }}>
        <Flex sx={{ flexDirection: 'column', height: '100%' }}>
          <Box>
            <Image
              sx={{ maxWidth: ['175px', '225px', '250px'] }}
              src={
                'https://res.cloudinary.com/gonation/image/upload/v1598377918/sites/red-rooster/logo-white.png'
              }
              alt='Red Rooster'
            />
          </Box>
          <Box sx={{ marginTop: 'auto' }}>
            <Text
              variant='heading'
              sx={{ color: 'white', fontSize: [6, 7, 8] }}>
              {pageTitle}
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default SimpleHero;
