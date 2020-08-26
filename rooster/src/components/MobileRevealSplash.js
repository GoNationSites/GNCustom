/** @jsx jsx */
import { jsx, Box, Image, Flex, Text } from 'theme-ui';
import React, { useState } from 'react';

import Right from './icons/Right';

// takes in logo and an array of all location items
const MobileRevealSplash = ({ logo, locations }) => {
  const [activeLocation, setActiveLocation] = useState(null);
  const businessLocations = locations[0].node
    ? locations.map(({ node }) => node.data)
    : locations;

  const getBG = cover => ({
    background: `url(${cover.imageBaseUrl}/${cover.imagePrefix})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  });

  const getActiveLocationStyle = node => {
    if (node === activeLocation)
      return {
        transform: 'scaleX(2)',
        // transform: 'scaleY(1.25)',
      };
  };

  return (
    <Box>
      <Flex
        sx={{
          flexDirection: 'column',
          height: 'calc(100vh - 70px)',
          padding: 2,
        }}>
        <Box sx={{ height: '25%', padding: 2 }}>
          <Image src={logo} sx={{ height: '100%', width: 'auto' }}></Image>
        </Box>
        {businessLocations.map(business => (
          <Flex
            onClick={() => setActiveLocation(business)}
            sx={{
              height: '25%',
              ...getBG(business.cover),
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <Box
              sx={{
                color: 'text',
                bg: 'background',
                paddingY: 3,
                paddingX: 3,
                borderTopLeftRadius: '30px',
                borderBottomLeftRadius: '30px',

                transition: 'all 2s',
                ...getActiveLocationStyle(business),
              }}>
              <Flex sx={{ alignItems: 'center' }}>
                <Text variant='heading' sx={{ fontSize: 2, fontWeight: '700' }}>
                  {business.city}{' '}
                </Text>

                <Text as='span' sx={{ paddingLeft: 3 }}>
                  <Right width='25px' fill={'#EE1C25'} />
                </Text>
              </Flex>
            </Box>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default MobileRevealSplash;
