/** @jsx jsx */
import { jsx, Box, Flex, Image } from 'theme-ui';
import React from 'react';
import doordash from '../components/icons/doordash.png';
import ubereats from '../components/icons/uber-eats.png';

const OnlineOrdering = ({ location }) => {
  const boxStyle = {
    padding: [4],
  };

  const links = {
    Newtown: {
      doordash:
        'https://www.doordash.com/store/red-rooster-pub-newtown-588921/en-US/?pickup=true',
      uberEats: `https://www.ubereats.com/connecticut/food-delivery/red-rooster-pub-newtown/nVk1BEWIQ6qwAlCHPcsD2A`,
    },
    Ridgefield: {
      doordash:
        'https://www.doordash.com/store/red-rooster-pub-ridgefield-588921/en-US',
    },
    Wilton: {
      doordash: `https://www.doordash.com/store/red-rooster-pub-wilton-1102750/en-US`,
    },
  };

  const getSelection = provider =>
    provider === 'doordash' ? doordash : ubereats;

  const getIcons = () => {
    const locations = Object.keys(links);
    const activeLocation = locations.filter(loc => loc === location)[0];

    return Object.keys(links[activeLocation]).map(provider => {
      console.log('provider is', provider);
      return (
        <Box sx={boxStyle}>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href={links[activeLocation][provider]}>
            <Image
              sx={{ maxWidth: '320px' }}
              src={getSelection(provider)}
              alt={provider}
            />
          </a>
        </Box>
      );
    });
  };

  return (
    <Flex
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: ['column', 'row'],
      }}>
      {getIcons()}
    </Flex>
  );
};

export default OnlineOrdering;
