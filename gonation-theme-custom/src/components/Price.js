/** @jsx jsx */
import { jsx, Box, Flex, Text } from 'theme-ui';
import React from 'react';

const Price = ({ variants, withDollar, toSide }) => {
  const variantsDetector = () => {
    if(variants.length > 1){
      return(
        variants.map((item) => (
          <span style={{padding: '.3rem'}}>{item.price}</span>
        ))
      )
    }
    if(variants.length){
      return (
        <span>{variants[0].price}</span>
      )
    }
  }
  const variantsDetectorTitle = () => {
    if(variants.length > 1){
      return(
        variants.map((item) => (
          <span style={{padding: '.3rem'}}>{item.label}</span>
        ))
      )
    }
    if(variants.length){
      return (
        <span>{variants[0].label}</span>
      )
    }
  }
  return (
    <Box>
      <Text as='span' sx={{ fontSize: 1 }}>
        {variants.length ? variants[0].labelTitle : ''}
      </Text>
      <Text as='span' sx={{ fontSize: 1 }}>
        {variants.length ? variantsDetectorTitle() : ''}
      </Text>
      <Text sx={{ display: 'flex', justifyContent: 'space-around', fontSize: 1 }}>
        {withDollar ? '$' : ''}
        {variantsDetector()}
      </Text>
    </Box>
  );
};
export default Price;
