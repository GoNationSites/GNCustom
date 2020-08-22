/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui'
import React from 'react';

import printAddress from '../helpers/printAddress'
import getGoogleStr from '../helpers/getGoogleStr'

const NavMeta = ({data, isFooter}) => {
    const site = data[0].node.data

    if(isFooter) {
      return (
        <Box sx={{fontFamily: 'heading'}}>
          <Text sx={{ fontSize: [2,3,4], mb: 2 }}>Address: {printAddress(site)}</Text>
          <Text sx={{ fontSize: [2,3,4] }}>Phone: {site.phone}</Text>
        </Box>
      );
    }
    return (
      <Box>
        <Text sx={{ fontSize: 1, mb: 2 }}>Address: {printAddress(site)}</Text>
        <Text sx={{ fontSize: 1 }}>Phone: {site.phone}</Text>
      </Box>
    );
}

export default NavMeta;
