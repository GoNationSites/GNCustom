/** @jsx jsx */
import React from 'react';
import { jsx, Box, Flex, Image, Text, Button } from 'theme-ui';
import { Link } from 'gatsby';

import cloudinaryOptimize from '../helpers/cloudinaryHelper';

const PartiesTemplate = ({ location }) => {
  const bullets = [
    'Christenings',
    'Meetings',
    'Weddings',
    'Debut',
    'Business Functions',
    'Catering',
    'Birthday Parties',
    'Wedding Banquet',
  ];

  return (
    <Box sx={{ background: 'black', py: 5, pt: [0, 6] }}>
      <Box sx={{ maxWidth: '1200px', margin: 'auto' }}>
        <Flex sx={{ flexDirection: ['column', 'row'] }}>
          <Box sx={{ width: ['100%', '33%'] }}>
            <Image
              src={cloudinaryOptimize(
                'https://res.cloudinary.com/gonation/image/upload/v1601671566/sites/mix-prime/about-navigation.jpg',
                900
              )}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              color: 'white',
              paddingX: [2, 3, 4],
              py: [4, 4, 4],
            }}>
            <Text variant='heading' sx={{ fontSize: [3, 4, 6], mb: 3 }}>
              Parties
            </Text>
            <Text variant='heading' sx={{ mb: 2 }}>
              Book your party{' '}
              {location === 'woodbury' ? '203-586-1788' : '203 825 4444'}
            </Text>
            <Box sx={{ lineHeight: 1.75, mt: [3, 4] }}>
              {/* <Text
                variant='heading'
                sx={{ fontWeight: 'bold', fontSize: [3, 4, 4], mb: 3 }}>
                It Starts With You
              </Text> */}
              <Text as='p'>
                MIX PRIME is available for corporate meetings, social
                gatherings, and special events of all kinds. Our continental
                cuisine, traditional yet innovative, is celebrated for its
                creativity and tasteful combination.If you would like to host an
                event at MIX PRIME restaurant, we can happily accommodate you
                from 8 to 120 guests.
              </Text>
              <ul>
                {bullets.map(bullet => (
                  <li>
                    <p>{bullet}</p>
                  </li>
                ))}
              </ul>
              {location === 'danbury' ? (
                <Text as='p'>
                  For more information and to schedule a private party, please
                  contact our General Manager: Verdi Vejseli
                </Text>
              ) : (
                ''
              )}
            </Box>
            <Box
              sx={{
                background: 'white',
                mt: 4,
                padding: [2, 3, 4],
                borderRadius: '13px',
              }}>
              <Link
                sx={{ color: 'primary', cursor: 'pointer' }}
                to={`/${location}/contact`}>
                <Button sx={{ cursor: 'pointer' }} variant='blackTransparent'>
                  Contact us and book a party
                </Button>
              </Link>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default PartiesTemplate;
