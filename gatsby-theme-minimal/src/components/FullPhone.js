import { jsx, Box, Text } from 'theme-ui';
import React from 'react';

import printAddress from '../helpers/printAddress';
import getGoogleStr from '../helpers/getGoogleStr';

const FullPhone = ({data}) => {
  return <Text sx={{ fontSize: 2 }}>{data.phone}</Text>;
};

export default FullPhone;
