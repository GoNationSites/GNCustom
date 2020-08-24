/** @jsx jsx */
import { jsx, Box, Flex, Text } from 'theme-ui';
import React from 'react';

const Price = ({ variants, withDollar, toSide }) => {
  return (
    <Box>
      <Text as='span' sx={{ fontSize: 1 }}>
        {variants.length ? variants[0].labelTitle : ''}
      </Text>
      <Text as='span' sx={{ fontSize: 1 }}>
        {variants.length ? variants[0].label : ''}
      </Text>
      <Text sx={{ textAlign: 'right', fontSize: 1 }}>
        {withDollar ? '$' : ''}
        {variants.length ? variants[0].price : ''}
      </Text>
    </Box>
  );
};
export default Price;
