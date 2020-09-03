import { jsx, Box, Text } from 'theme-ui';
import React from 'react';

const FullPhone = ({ data, st, txt }) => {
  return (
    <Text>
      <Text as='a' sx={st} href={`tel:${data.phone}`}>
        {txt ? txt : data.phone}
      </Text>
    </Text>
  );
};

export default FullPhone;
