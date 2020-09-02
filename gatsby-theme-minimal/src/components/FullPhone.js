import { jsx, Box, Text } from 'theme-ui';
import React from 'react';

const FullPhone = ({ data, st }) => {
  return (
    <Text>
      <Text as='a' sx={st} href={`tel:${data.phone}`}>
        {data.phone}
      </Text>
    </Text>
  );
};

export default FullPhone;
