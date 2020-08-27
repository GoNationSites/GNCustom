/** @jsx jsx */
import { jsx, Box, Flex, Text } from 'theme-ui';
import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Img from 'react-cloudinary-lazy-image';
import slugify from 'slugify';

const HomeRenderer = ({ data, location }) => {
  return (
    <Flex
      sx={{
        flexDirection: ['column', 'row'],
        alignItems: 'stretch',
        flexWrap: 'wrap',
      }}>
      <Box sx={{ width: ['100%', '100%', '50%'], padding: 3 }}>
        <Box
          sx={{
            border: '2px solid',
            borderColor: 'primary',
            borderRadius: '5px',
            padding: 4,
            paddingX: 5,
            height: '100%',
            background: 'white',
          }}>
          <Zoom>
            <Text as='h2' variant='heading' sx={{ fontSize: 6, mb: 3 }}>
              About {data.data.name}
            </Text>
            <Text as='p' sx={{ lineHeight: 2 }}>
              {data.data.desc}
            </Text>
          </Zoom>
        </Box>
      </Box>
      <Box sx={{ width: ['100%', '100%', '50%'], padding: 3 }}>
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
