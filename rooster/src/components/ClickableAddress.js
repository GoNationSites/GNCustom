/** @jsx jsx */
import { jsx, Text } from 'theme-ui';
import React from 'react';

import getGoogleStr from '../helpers/getGoogleStr';
import printAddress from '../helpers/printAddress';

const ClickableAddress = ({ data, title = '', style }) => {
  return (
    <Text
      sx={style}
      as='a'
      target='_blank'
      rel='noopener noreferrer'
      href={getGoogleStr(data)}>
      {title ? title : printAddress(data)}
    </Text>
  );
};

export default ClickableAddress;
