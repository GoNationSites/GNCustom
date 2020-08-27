/** @jsx jsx */
import { jsx, Text, Flex } from 'theme-ui';
import React from 'react';
import styled from 'styled-components';

const EventPills = ({ tags }) => {
  return (
    <Flex sx={{ flexWrap: 'wrap' }}>
      {tags.map(tag => (
        <Text
          as='span'
          sx={{
            bg: 'primary',
            color: 'white',
            borderRadius: '30px',
            paddingX: 4,
            paddingY: 2,
            mr: 3,
            fontSize: 1,
          }}>
          {tag}
        </Text>
      ))}
    </Flex>
  );
};

export default EventPills;
