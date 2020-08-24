/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import React from 'react';

import '../../../node_modules/animate.css';
import './animate.css';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import 'react-image-lightbox/style.css';

import Navigation from './Navigation';
import SmoothHero from './SmoothHero';
import Footer from './Footer';
import SimpleHero from './SimpleHero';

const Layout = ({ children, pageTitle, location }) => {
  const renderHero = () => (
    <>
      {pageTitle === 'home' ? (
        <SmoothHero page={pageTitle} location={'Danbury'} />
      ) : (
        <SimpleHero pageTitle={pageTitle}></SimpleHero>
      )}
    </>
  );

  return (
    <Box as='main'>
      <Navigation location="Danbury" />
      {pageTitle === 'about' ||
      pageTitle === 'contact' 
        ? ''
        : renderHero()}
      {children}
      <Footer location="Danbury"></Footer>
    </Box>
  );
};

export default Layout;
