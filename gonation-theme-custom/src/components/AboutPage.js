/** @jsx jsx */
import { jsx, Flex, Box, Text } from 'theme-ui';
import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Img from 'react-cloudinary-lazy-image';
import slugify from 'slugify';

const AboutPage = ({ data, location }) => {
  return (
    <Box sx={{ paddingX: 3 }}>
      <Flex sx={{ flexWrap: 'wrap' }}>
        <Box sx={{ width: ['100%', '100%', '40%'], mb: [4] }}>
          <Zoom>
            <Text as='p' sx={{ lineHeight: 2 }}>
              {data.data.desc}
            </Text>
          </Zoom>
        </Box>
        <Box
          sx={{
            width: ['100%', '100%', '60%'],
            paddingLeft: [0, 0, 5],
          }}>
          <Img
            cloudName={'gonation'}
            imageName={`sites/red-rooster/${location}/about-image.jpg`}
            fluid={{
              maxWidth: '1801',
            }}
            style={{
              width: '100%',
              pointerEvents: 'none',
              borderRadius: '5px',
            }}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default AboutPage;
