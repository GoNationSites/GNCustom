/** @jsx jsx */
import { jsx, Box, Flex, Image } from 'theme-ui';
import React from 'react';
import doordash from '../components/icons/doordash.png';
import ubereats from '../components/icons/uber-eats.png';
import grubhub from '../components/icons/grubhub.png';

const OnlineOrdering = ({ location }) => {
  const boxStyle = {
    padding: [4],
  };

  const links = {
    Newtown: {
      doordash:
        'https://order.online/business/red-rooster-pub-86940',
      uberEats: `https://www.ubereats.com/connecticut/food-delivery/red-rooster-pub-newtown/nVk1BEWIQ6qwAlCHPcsD2A`,
      grubhub: `https://www.grubhub.com/restaurant/red-rooster-pub---newtown-160-s-main-st-newtown/2695395`,
    },
    Ridgefield: {
      doordash:
        'https://www.doordash.com/store/red-rooster-pub-ridgefield-588921/en-US',
    },
    Wilton: {
      doordash: `https://www.doordash.com/store/red-rooster-pub-wilton-1102750/en-US`,
    },
  };

  const getSelection = provider => {
    if (provider === 'doordash') {
      return doordash;
    } else if (provider === 'uberEats') {
      return ubereats;
    } else if (provider === 'grubhub') {
      return grubhub;
    }
  };

  const getIcons = () => {
    const locations = Object.keys(links);
    const activeLocation = locations.filter(loc => loc === location)[0];

    return Object.keys(links[activeLocation]).map(provider => {
      console.log('provider is', provider);
      return (
        <Box sx={boxStyle}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={links[activeLocation][provider]}
          >
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
      }}
    >
      {getIcons()}
    </Flex>
  );
};

export default OnlineOrdering;
