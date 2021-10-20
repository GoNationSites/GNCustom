/** @jsx jsx */
import { jsx, Box, Flex, Text, Heading, Link, Image } from 'theme-ui';
import React from 'react';
import slugify from 'slugify';

import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import SimpleHero from '../components/SimpleHero';
import Menu from '../components/Menu';
import HomeRenderer from '../components/HomeRenderer';
import Gallery from '../components/Gallery';
import ButtonRow from '../components/ButtonRow';
import ContactPage from '../components/ContactPage';
import AboutPage from '../components/AboutPage';
import EventsPage from '../components/EventsPage';
import GalleryPage from '../components/GalleryPage';
import OnlineOrdering from '../components/OnlineOrdering';
import cloudinaryOptimize from '../helpers/cloudinaryHelper';

const BasicPageTemplate = ({ pageContext }) => {
  const { curPage, id } = pageContext;
  const renderHero = () => {
    if (curPage.title === 'Home') {
      return <HomeHero withShout id={id} location={pageContext.data.city} />;
    } else return <SimpleHero id={id} location={pageContext.data.city} pageTitle={curPage.title} />;
  };

  const routes = pageContext.pages;

  const renderComponent = title => {
    switch (title) {
      case 'Menu':
        return <Menu id={id} poweredList="1" />;
      case 'Home':
        return (
          <>
            <HomeRenderer data={pageContext} location={pageContext.data.city} />
            <Flex
              as="section"
              sx={{
                padding: [2, 3, 5],
                background: 'white',
                mt: [4, 5, 6],
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <Text as="h3" sx={{ color: 'primary', fontSize: [3, 4, 5], mb: [3, 4] }}>
                Order Online
              </Text>
              <OnlineOrdering location={pageContext.data.city} />
            </Flex>
            <Box sx={{ paddingY: 5 }}>
              <ButtonRow
                data={pageContext}
                location={pageContext.data.city}
                pages={['menu', 'gallery', 'contact']}
              />

              <Box
                sx={{
                  backgroundImage: `url('${cloudinaryOptimize(
                    'https://res.cloudinary.com/gonation/image/upload/v1617388779/sites/mix-prime/serving-ct-image.jpg',
                    900
                  )}')`,
                  backgroundSize: 'cover',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '25vh 2rem',
                  color: 'white',
                }}
              >
                <Heading sx={{ marginBottom: '1rem' }}>Red Rooster is serving CT</Heading>
                <Text sx={{ marginBottom: '2rem' }}>
                  Find out how local business are vital to the economy
                </Text>

                <Link
                  href="https://linkprotect.cudasvc.com/url?a=https%3a%2f%2fservingconnecticut.com%2f&c=E,1,hA45iW0GZJdGWU2_lp0BOlPA2MbuJCyCSHBrRznoiP5v2BNJNsn5x0h4ADkZlBLeOHr2HP5RMLme4LozPT9vTxNK1gc3p9-xVDwmWt19f7h14J2cmx2_Ag,,&typo=1"
                  target="_blank"
                >
                  <Image
                    sx={{
                      maxWidth: '300px',
                      transition: 'all ease-in-out 0.5s',
                      ':hover': {
                        transform: 'scale(1.2)',
                      },
                    }}
                    src="https://res.cloudinary.com/gonation/image/upload/v1617388067/sites/mix-prime/logo-hero.png"
                    alt="reseturants serving connecticut"
                  />
                </Link>
              </Box>
            </Box>
          </>
        );
      case 'Contact':
        return (
          <ContactPage
            data={pageContext}
            location={slugify(pageContext.data.city, { lower: true })}
            id={id}
          />
        );
      case 'About':
        return (
          <AboutPage
            data={pageContext}
            location={slugify(pageContext.data.city, { lower: true })}
          />
        );

      case 'Events':
        return (
          <EventsPage
            data={pageContext}
            location={slugify(pageContext.data.city, { lower: true })}
            id={id}
          />
        );
      case 'Gallery':
        return (
          <GalleryPage
            data={pageContext}
            location={slugify(pageContext.data.city, { lower: true })}
            id={id}
          />
        );
      default:
        console.log('in default');
        return '';
    }
  };
  return (
    <Layout pageTitle={curPage.title} routes={routes} pageContext={pageContext}>
      {renderHero()}
      <Box
        sx={{
          paddingY: 5,
          bg: 'background',
          pt: curPage.title === 'Menu' ? 0 : [4, 5],
        }}
      >
        <Box
          sx={{
            paddingY: 4,
            paddingX: curPage.title === 'Events' ? 0 : 3,
            pt: curPage.title === 'Menu' ? 0 : 4,
          }}
        >
          <Box
            sx={{
              maxWidth: curPage.title !== 'Menu' && curPage.title !== 'Events' ? '1200px' : '',
              margin: 'auto',
            }}
          >
            {renderComponent(curPage.title)}
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default BasicPageTemplate;
