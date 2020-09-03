/** @jsx jsx */
import { jsx, Box, Flex } from 'theme-ui';
import React from 'react';
import Navigation from './Navigation';

import '../styles/animate.css';
import Footer from './Footer';
import cloudinaryOptimize from '../helpers/cloudinaryHelper';
import 'react-image-lightbox/style.css';
import './index.css';
import SEO from './SEO';

const Layout = ({ children, routes, pageContext, pageTitle }) => {
  const footerBG = () =>
    cloudinaryOptimize(
      `https://res.cloudinary.com/gonation/image/upload/v1598471061/sites/red-rooster/footer-bg.jpg`,
      1900
    );

  return (
    <Box as='main' sx={{ marginRight: ['unset', '53px'] }}>
      <SEO pageTitle={pageTitle} siteMetaData={pageContext.data} />
      <Navigation routes={routes} pageContext={pageContext} />
      {children}

      <Footer routes={routes} pageContext={pageContext} footerBG={footerBG()} />
    </Box>
  );
};

export default Layout;
