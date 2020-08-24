import { jsx, Box, Text } from 'theme-ui';
import React from 'react';

import printAddress from '../helpers/printAddress';
import getGoogleStr from '../helpers/getGoogleStr';

const FullAddress = ({data}) => {
    const site = data
    return (
      <Text sx={{ fontSize: 2, mb: 2 }}>
        {printAddress(site)}
      </Text>
    );
}

export default FullAddress;
