/** @jsx jsx */
import { jsx, Box, Flex } from 'theme-ui';
import React from 'react';
import Navigation from './Navigation';

import '../styles/animate.css';

const Layout = ({ children, routes, pageContext }) => {
  return (
    <Box as='main' sx={{ marginRight: ['unset', '53px'] }}>
      <Navigation routes={routes} pageContext={pageContext} />
      {children}
    </Box>
  );
};

export default Layout;
