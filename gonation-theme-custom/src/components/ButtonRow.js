/** @jsx jsx */
import { jsx, Flex, Box, Text } from 'theme-ui';
import React from 'react';
import { Link } from 'gatsby';
import Zoom from 'react-reveal/Zoom';
import Img from 'react-cloudinary-lazy-image';
import slugify from 'slugify';

const ButtonRow = ({ data, location, pages }) => {
  return (
    <Flex sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
      {pages.map((page, idx) => (
        <Box sx={{ padding: 3, width: ['100%', '33%'] }}>
          <Zoom>
            <Img
              cloudName={'gonation'}
              imageName={`sites/red-rooster/${slugify(location, {
                lower: true,
              })}/btn-${idx}.jpg`}
              fluid={{
                maxWidth: '800',
              }}
              style={{
                width: '100%',
                pointerEvents: 'none',
                borderRadius: '5px',
              }}
            />
          </Zoom>
          <Box sx={{ pt: 3 }}>
            <Text
              as='h4'
              variant='heading'
              sx={{ color: 'text', fontSize: [4], mb: 2 }}>
              {page}
            </Text>
            <Link
              to={`/${slugify(location, { lower: true })}/${page}`}
              sx={{ color: 'primary', fontWeight: 'bold' }}>
              {page === 'contact' ? 'Contact us' : `View the ${page}`}
            </Link>
          </Box>
        </Box>
      ))}
    </Flex>
  );
};

export default ButtonRow;
