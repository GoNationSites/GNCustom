/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui'
import React from 'react';

import printAddress from '../helpers/printAddress'
import getGoogleStr from '../helpers/getGoogleStr'

const NavMeta = ({data}) => {
    const site = data[0].node.data
    return (
      <Box>
        <Text sx={{ fontSize: 1, mb: 2 }}>Address: {printAddress(site)}</Text>
        <Text sx={{ fontSize: 1 }}>Phone: {site.phone}</Text>
      </Box>
    );
}

export default NavMeta;
