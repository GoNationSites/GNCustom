import { jsx, Box, Text } from 'theme-ui';
import React from 'react';

import printAddress from '../helpers/printAddress';
import getGoogleStr from '../helpers/getGoogleStr';

const FullAddress = ({ data, text, st }) => {
  console.log('style: ', st);
  const site = data;
  return (
    <Text>
      <Text
        as='a'
        sx={st}
        target='_blank'
        rel='noreferrer noopener'
        href={getGoogleStr(
          site.name,
          site.street,
          site.city,
          site.zip,
          site.state
        )}>
        {text ? text : printAddress(site)}
      </Text>
    </Text>
  );
};

export default FullAddress;
