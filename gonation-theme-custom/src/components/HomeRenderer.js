/** @jsx jsx */
import { jsx, Box, Flex, Text } from 'theme-ui';
import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import Img from 'react-cloudinary-lazy-image';
import slugify from 'slugify';

import Lightbox from 'react-image-lightbox';
import cloudinaryBuilder from '../helpers/cloudinaryHelper';

const HomeRenderer = ({ data, location }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Flex
      sx={{
        flexDirection: ['column', 'row'],
        alignItems: 'stretch',
        flexWrap: 'wrap',
      }}>
      {isOpen ? (
        <Lightbox
          onCloseRequest={() => setIsOpen(false)}
          mainSrc={cloudinaryBuilder(
            `https://res.cloudinary.com/gonation/image/upload/v1598535228/sites/red-rooster/${slugify(
              location,
              {
                lower: true,
              }
            )}/home-1.jpg`,
            1800
          )}
        />
      ) : (
        ''
      )}
      <Box sx={{ width: ['100%', '100%', '50%'], padding: [2, 3] }}>
        <Text
          as='h2'
          variant='heading'
          sx={{ fontSize: [4, 4, 6], mb: 3, fontWeight: 'bold' }}>
          About {data.data.name}
        </Text>
        <Box
          sx={{
            border: '2px solid',
            borderColor: 'primary',
            borderRadius: '5px',
            paddingX: [3, 5],
            py: [3, 5],
            background: 'white',
          }}>
          <Zoom>
            <Text as='p' sx={{ lineHeight: 2 }}>
              {data.data.desc}
            </Text>
          </Zoom>
        </Box>
      </Box>
      <Box
        sx={{ width: ['100%', '100%', '50%'], padding: 3 }}
        onClick={() => setIsOpen(true)}>
        <Zoom>
          <Img
            cloudName={'gonation'}
            imageName={`sites/red-rooster/${slugify(location, {
              lower: true,
            })}/home-1.jpg`}
            fluid={{
              maxWidth: '1500',
            }}
            style={{
              width: '100%',
              pointerEvents: 'none',
              borderRadius: '5px',
            }}
          />
        </Zoom>
      </Box>
    </Flex>
  );
};

export default HomeRenderer;
