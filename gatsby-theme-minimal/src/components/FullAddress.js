import { jsx, Box, Text } from 'theme-ui';
import React from 'react';

import printAddress from '../helpers/printAddress';
import getGoogleStr from '../helpers/getGoogleStr';

const FullAddress = ({ data }) => {
  const site = data;
  return (
    <Text sx={{}}>
      <a
        target='_blank'
        rel='noreferrer noopener'
        href={getGoogleStr(
          site.name,
          site.street,
          site.city,
          site.zip,
          site.state
        )}>
        {printAddress(site)}
      </a>
    </Text>
  );
};

export default FullAddress;
