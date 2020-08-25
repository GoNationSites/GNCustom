/** @jsx jsx */
import { jsx, Box, Flex, Image, Text, Button } from 'theme-ui'
import React from 'react';

import cloudinaryOptimize from '../helpers/cloudinaryOptimize';
import LocationImageBox from './LocationImageBox';

const MobileSplash = ({node, locations, setActiveLocation, activeLocation}) => {
    return (
      <Flex sx={{ flexDirection: 'column' }}>
        <Box sx={{ height: '100vh', width: '100%', padding: 3 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Image
              sx={{ maxWidth: '150px', margin: 'auto' }}
              src={cloudinaryOptimize(
                'https://res.cloudinary.com/gonation/image/upload/v1598377918/sites/red-rooster/logo-black.png',
                420
              )}></Image>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Flex sx={{}}>
              {locations.map(({ node }) => (
                <Box sx={{ flex: '1 1', padding: 1 }}>
                  <Button
                    onClick={() => setActiveLocation(node)}
                    variant='circle'
                    sx={{
                      fontSize: 0,
                      fontFamily: 'heading',
                      fontWeight: '900',
                      color: node === activeLocation ? 'primary' : '',
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      width: '100%',
                    }}>
                    <Text
                      as='span'
                      variant='heading'
                      sx={{ fontWeight: '900', width: '100%' }}>
                      {node.data.city}
                    </Text>
                  </Button>
                </Box>
              ))}
            </Flex>
          </Box>

          <Box sx={{ mt: 3 }}>
            <LocationImageBox data={activeLocation} />
          </Box>
        </Box>
      </Flex>
    );
}

export default MobileSplash;
