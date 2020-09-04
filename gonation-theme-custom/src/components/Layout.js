/** @jsx jsx */
import { jsx, Box, Flex } from 'theme-ui';
import React, { useEffect } from 'react';
import slugify from 'slugify';
import Navigation from './Navigation';

import '../styles/animate.css';
import Footer from './Footer';
import cloudinaryOptimize from '../helpers/cloudinaryHelper';
import 'react-image-lightbox/style.css';
import './index.css';
import SEO from './SEO';

const Layout = ({ children, routes, pageContext, pageTitle }) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://cdn.lightwidget.com/widgets/lightwidget.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  });

  const footerBG = () =>
    cloudinaryOptimize(
      `https://res.cloudinary.com/gonation/image/upload/v1598471061/sites/red-rooster/footer-bg.jpg`,
      1900
    );

  const location = slugify(pageContext.data.city, { lower: true });

  const renderInstagramWidget = () => {
    switch (location) {
      case 'wilton':
        return (
          <iframe
            src='https://cdn.lightwidget.com/widgets/22c8aff3d6515bcc9ba42e9b27337e03.html'
            scrolling='no'
            allowtransparency='true'
            class='lightwidget-widget'
            style={{
              width: '100%',
              border: 0,
              overflow: 'hidden',
            }}></iframe>
        );
      case 'ridgefield':
        return (
          <iframe
            src='https://cdn.lightwidget.com/widgets/1e722e3325b75cd9b120646609569842.html'
            scrolling='no'
            allowtransparency='true'
            class='lightwidget-widget'
            style={{
              width: '100%',
              border: 0,
              overflow: 'hidden',
            }}></iframe>
        );
      case 'newtown':
        return (
          <iframe
            src='https://cdn.lightwidget.com/widgets/834c2a22b71956d2a5c72ed80d7bdde0.html'
            scrolling='no'
            allowtransparency='true'
            class='lightwidget-widget'
            style={{
              width: '100%',
              border: 0,
              overflow: 'hidden',
            }}></iframe>
        );
      default:
        return '';
    }
  };

  return (
    <Box as='main' sx={{ marginRight: ['unset', '53px'] }}>
      <SEO pageTitle={pageTitle} siteMetaData={pageContext.data} />
      <Navigation routes={routes} pageContext={pageContext} />
      {children}

      {renderInstagramWidget()}
      <Footer routes={routes} pageContext={pageContext} footerBG={footerBG()} />
    </Box>
  );
};

export default Layout;
