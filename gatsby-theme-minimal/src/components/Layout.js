/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import '../../../node_modules/animate.css';
import './animate.css';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import 'react-image-lightbox/style.css';

import Navigation from './Navigation';
import SmoothHero from './SmoothHero';
import Footer from './Footer';
import SimpleHero from './SimpleHero';
import SEO from './SEO';

const Layout = ({ children, pageTitle, location }) => {
  const data = useStaticQuery(graphql`
    query danburyMetaQuery {
      siteData(data: { city: { eq: "Danbury" } }) {
        data {
          avatar {
            imageBaseUrl
            imagePrefix
            isDefault
          }
          city
          cover {
            imageBaseUrl
            imagePrefix
            isDefault
          }
          desc
          lastPricelistUpdate {
            sec
            usec
          }
          links {
            facebook
            instagram
            twitter
            website
            youtube
          }
          loc
          name
          phone
          slug
          state
          street
          zip
        }
      }
    }
  `);
  const site = data.siteData.data;

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
    <>
      <SEO siteMetaData={site} pageTitle={pageTitle} />
      <Box as='main'>
        <Navigation location='Danbury' />
        {pageTitle === 'about' || pageTitle === 'contact' ? '' : renderHero()}
        {children}
        <Footer location='Danbury'></Footer>
      </Box>
    </>
  );
};

export default Layout;
