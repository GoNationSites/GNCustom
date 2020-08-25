/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';

import React from 'react';
import cloudinaryOptimize from '../helpers/cloudinaryHelper';

const SimpleHero = ({ pageTitle, location }) => {
  const getImage = () => {
    if (location === 'Woodbury') {
      switch (pageTitle) {
        case 'menu':
          return cloudinaryOptimize(
            'https://res.cloudinary.com/gonation/image/upload/v1598360531/sites/mix-prime/woodbury-menu-hero.jpg',
            2000
          );
        case 'events':
          return cloudinaryOptimize(
            'https://res.cloudinary.com/gonation/image/upload/v1598360552/sites/mix-prime/woodbury-events-hero.jpg',
            2000
          );
        case 'gallery':
          return cloudinaryOptimize(
            'https://res.cloudinary.com/gonation/image/upload/v1598360570/sites/mix-prime/woodbury-gallery-hero.jpg',
            2000
          );
        default:
          return '';
      }
    } else {
      switch (pageTitle) {
        case 'menu':
          return cloudinaryOptimize(
            'https://res.cloudinary.com/gonation/image/upload/v1598280072/sites/mix-prime/menu-hero.jpg',
            2000
          );
        case 'events':
          return cloudinaryOptimize(
            'https://res.cloudinary.com/gonation/image/upload/v1598291225/sites/mix-prime/danbury-events.jpg',
            2000
          );
        case 'gallery':
          return cloudinaryOptimize(
            'https://res.cloudinary.com/gonation/image/upload/v1598293244/sites/mix-prime/danbury-gallery.jpg',
            2000
          );
        default:
          return '';
      }
    }
  };
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: `url(${getImage()})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '75vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
      }}>
      <Text
        variant='heading'
        as='h1'
        sx={{
          color: 'white',
          fontSize: [5, 5, 6],
          textTransform: 'uppercase',
          fontFamily: 'heading',
          margin: '0',
          mb: 2,
          bg: 'rgba(0,0,0,.3)',
          paddingY: 2,
          paddingX: 3,
        }}>
        {pageTitle}
      </Text>
    </Box>
  );
};

export default SimpleHero;
