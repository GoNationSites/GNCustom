/** @jsx jsx */
import { jsx, Text } from 'theme-ui';

import React from 'react';

const ClickablePhone = ({ tel, title, style }) => {
  return (
    <Text as='a' sx={style} href={`tel:${tel}`}>
      {title ? title : tel}
    </Text>
  );
};

export default ClickablePhone;
