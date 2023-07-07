/** @jsx jsx */
import { jsx, Box, Flex, Text } from 'theme-ui';
import React, { useEffect } from 'react';
import slugify from 'slugify';
import Navigation from './Navigation';

import '../styles/animate.css';
import Footer from './Footer';
import cloudinaryOptimize from '../helpers/cloudinaryHelper';
import 'react-image-lightbox/style.css';
import './index.css';
import SEO from './SEO';
import OtherLocationsBox from '../components/OtherLocationsBox';

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

  //   useEffect(() => {
  //     const script = document.createElement('script');
  //     const location = slugify(pageContext.data.city, { lower: true });
  //     const sliceContainer = document.querySelector('#slice-container');

  //     if (location === 'newtown') {
  //       script.textContent = `
  //       (function (w, d, s, o, f, js, fjs) {
  //           w[o] = w[o] || function (opt) { w[o].q = w[o].q || opt };
  //           (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
  //           js.src = f;
  //           js.async = 1;
  //           if (fjs) { fjs.parentNode.insertBefore(js, fjs) } else { fjs = d.getElementsByTagName('head')[0]; fjs.appendChild(js) }
  //         })(window, document, 'script', 'SliceWidgets', 'https://restaurant-widgets-integrations.slicelife.com/widget.js');
  //         SliceWidgets({ shopUuid: '744b50ca-eb01-4707-9ad8-ecb4eddb827d' });`;
  //     }
  //     if (location === 'ridgefield') {
  //       script.textContent = `
  //         (function (w, d, s, o, f, js, fjs) {
  //             w[o] = w[o] || function (opt) { w[o].q = w[o].q || opt };
  //             (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
  //             js.src = f;
  //             js.async = 1;
  //             if (fjs) { fjs.parentNode.insertBefore(js, fjs) } else { fjs = d.getElementsByTagName('head')[0]; fjs.appendChild(js) }
  //           })(window, document, 'script', 'SliceWidgets', 'https://restaurant-widgets-integrations.slicelife.com/widget.js');
  //           SliceWidgets({ shopUuid: '7a5dab5b-a969-4f3c-9e13-f311471b5674' });
  //       `;
  //     }
  //     if (location === 'wilton') {
  //       script.textContent = `
  //       (function (w, d, s, o, f, js, fjs) {
  //             w[o] = w[o] || function (opt) { w[o].q = w[o].q || opt };
  //             (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
  //             js.src = f;
  //             js.async = 1;
  //             if (fjs) { fjs.parentNode.insertBefore(js, fjs) } else { fjs = d.getElementsByTagName('head')[0]; fjs.appendChild(js) }
  //           })(window, document, 'script', 'SliceWidgets', 'https://restaurant-widgets-integrations.slicelife.com/widget.js');
  //           SliceWidgets({ shopUuid: 'cdffe44d-4980-4eb6-ac98-5989fd81048c' });
  //       `;
  //       if (location === '/') {
  //         script.textContent = `
  //       ""`;
  //       }
  //     }
  //     if (
  //       location === 'wilton' ||
  //       location === 'ridgefield' ||
  //       location === 'newtown'
  //     ) {
  //       sliceContainer.appendChild(script);
  //     }
  //     return () => {
  //       if (
  //         location === 'wilton' ||
  //         location === 'ridgefield' ||
  //         location === 'newtown'
  //       ) {
  //         sliceContainer.removeChild(script);
  //       }
  //     };
  //   }, []);

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
            src="https://cdn.lightwidget.com/widgets/22c8aff3d6515bcc9ba42e9b27337e03.html"
            scrolling="no"
            allowtransparency="true"
            class="lightwidget-widget"
            style={{
              width: '100%',
              border: 0,
              overflow: 'hidden',
            }}
          ></iframe>
        );
      case 'ridgefield':
        return (
          <iframe
            src="https://cdn.lightwidget.com/widgets/1e722e3325b75cd9b120646609569842.html"
            scrolling="no"
            allowtransparency="true"
            class="lightwidget-widget"
            style={{
              width: '100%',
              border: 0,
              overflow: 'hidden',
            }}
          ></iframe>
        );
      case 'newtown':
        return (
          <iframe
            src="https://cdn.lightwidget.com/widgets/834c2a22b71956d2a5c72ed80d7bdde0.html"
            scrolling="no"
            allowtransparency="true"
            class="lightwidget-widget"
            style={{
              width: '100%',
              border: 0,
              overflow: 'hidden',
            }}
          ></iframe>
        );
      default:
        return '';
    }
  };

  const getSliceTag = () => {
    switch (location) {
      case 'newtown':
        return (
          <a
            href="https://slicelife.com/restaurants/ct/newtown/06470/red-rooster-pub-newtown/menu?utm_campaign=order_now_button&utm_medium=referral&utm_source="
            target="_blank"
          >
            <img src="https://slicelink-assets-production.imgix.net/partner-buttons/slice-button-medium-ivory-start-order.png" />
          </a>
        );
      case 'wilton':
        return (
          <a
            href="https://slicelife.com/restaurants/ct/wilton/06897/red-rooster-pub-wilton/menu?utm_campaign=order_now_button&utm_medium=referral&utm_source="
            target="_blank"
          >
            <img src="https://slicelink-assets-production.imgix.net/partner-buttons/slice-button-medium-ivory-start-order.png" />
          </a>
        );
      case 'ridgefield':
        return (
          <a
            href="https://slicelife.com/restaurants/ct/ridgefield/06877/red-rooster-pub-ridgefield/menu?utm_campaign=order_now_button&utm_medium=referral&utm_source="
            target="_blank"
          >
            <img src="https://slicelink-assets-production.imgix.net/partner-buttons/slice-button-medium-ivory-start-order.png" />
          </a>
        );
      default:
        return '';
    }
  };

  return (
    <Box as="main" sx={{ marginRight: ['unset', '53px'] }}>
      <Box
        id="help"
        sx={{
          position: 'absolute',
          top: 128,
          right: 12,
          zIndex: 99,
          '@media (min-width: 768px)': {
            position: 'fixed',
            top: 'unset',
            bottom: 0,
            right: 64,
            zIndex: 99,
          },
        }}
      >
        {getSliceTag()}
      </Box>

      <SEO pageTitle={pageTitle} siteMetaData={pageContext.data} />
      <Navigation routes={routes} pageContext={pageContext} />
      {children}

      <Box>
        <OtherLocationsBox />
      </Box>
      <Box>
        <Text
          as="h4"
          variant="title"
          sx={{
            fontSize: [3, 4, 6],
            textAlign: 'center',
            mb: [2, 3, 4],
            fontFamily: 'heading',
          }}
        >
          @{`redroosterpub${location}`}
        </Text>
      </Box>

      {renderInstagramWidget()}
      <Footer routes={routes} pageContext={pageContext} footerBG={footerBG()} />
    </Box>
  );
};

export default Layout;
