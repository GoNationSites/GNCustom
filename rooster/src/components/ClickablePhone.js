/** @jsx jsx */
import { jsx, Text } from 'theme-ui';

import React from 'react';

const ClickablePhone = ({ title, data }) => {
  const { phone } = data;

  return (
    <Text as="a" href={`tel:${phone}`}>
      {title ? title : phone}
    </Text>
  );
};

export default ClickablePhone;
