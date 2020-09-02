import { jsx, Box, Text } from 'theme-ui';
import React from 'react';

import printAddress from '../helpers/printAddress';
import getGoogleStr from '../helpers/getGoogleStr';

const FullPhone = ({ data }) => {
  return (
    <Text>
      <a href={`tel:${data.phone}`}>{data.phone}</a>
    </Text>
  );
};

export default FullPhone;
