/** @jsx jsx */
import { jsx, Box, Flex, Text, Image } from 'theme-ui';
import React, { useEffect } from 'react';
import { useStaticQuery, Link } from 'gatsby';

import SocialIcons from './SocialIcons';
import NavMeta from './NavMeta';
import cloudinaryOptimize from '../helpers/cloudinaryHelper';

const Footer = ({ location }) => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      allSiteData {
        edges {
          node {
            data {
              city
              name
              phone
              slug
              state
              street
              zip
              links {
                facebook
                instagram
                twitter
              }
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://cdn.lightwidget.com/widgets/lightwidget.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  });

  const site = data.allSiteData.edges.filter(
    ({ node }) => node.data.city === location
  );

  const getFooterImg = () =>
    location === 'Woodbury'
      ? 'https://res.cloudinary.com/gonation/image/upload/v1598359781/sites/mix-prime/woodbury-footer.jpg'
      : 'https://res.cloudinary.com/gonation/image/upload/v1598110795/sites/mix-prime/footer.jpg';

  const routes = [
    {
      name: 'Home',
      route: 'danbury',
      txt: 'Go Home',
    },
    {
      name: 'About',
      route: 'danbury/about',
      txt: 'Learn More',
    },
    {
      name: 'Menu',
      route: 'danbury/menu',
      txt: 'View The Menu',
    },
    {
      name: 'Events',
      route: 'danbury/events',
      txt: 'View Events',
    },
    {
      name: 'Gallery',
      route: 'danbury/gallery',
      txt: 'explore the gallery',
    },
    {
      name: 'Contact',
      route: 'danbury/contact',
      txt: 'talk to us',
    },
    {
      name: 'Careers',
      route: 'danbury/careers',
    },
    {
      name: 'Parties',
      route: 'danbury/parties',
    },
  ];

  const woodburyRoutes = [
    {
      name: 'Home',
      route: 'woodbury',
      txt: 'Go Home',
    },
    {
      name: 'About',
      route: 'woodbury/about',
      txt: 'Learn More',
    },
    {
      name: 'Menu',
      route: 'woodbury/menu',
      txt: 'View The Menu',
    },
    {
      name: 'Events',
      route: 'woodbury/events',
      txt: 'View Events',
    },
    {
      name: 'Gallery',
      route: 'woodbury/gallery',
      txt: 'explore the gallery',
    },
    {
      name: 'Contact',
      route: 'woodbury/contact',
      txt: 'talk to us',
    },
    {
      name: 'Careers',
      route: 'woodbury/careers',
    },
    {
      name: 'Parties',
      route: 'woodbury/parties',
    },
  ];

  return (
    <>
      <Box sx={{ bg: 'black' }}>
        {location === 'Danbury' ? (
          <iframe
            src='https://cdn.lightwidget.com/widgets/f3c23c0072515353be475ab9975738e2.html'
            scrolling='no'
            allowtransparency='true'
            class='lightwidget-widget'
            style={{
              width: '100%',
              border: 0,
              overflow: 'hidden',
              background: 'black',
              padding: '0!important',
              margin: '0!important',
            }}></iframe>
        ) : (
          <iframe
            src='https://cdn.lightwidget.com/widgets/7c9b0c45a5b359878ab8917541f04100.html'
            scrolling='no'
            allowtransparency='true'
            class='lightwidget-widget'
            style={{
              width: '100%',
              border: 0,
              overflow: 'hidden',
              background: 'black',
              padding: '0!important',
              margin: '0!important',
            }}></iframe>
        )}
      </Box>
      <Box
        as='footer'
        sx={{
          minHeight: '600px',
          background: 'black',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <Box sx={{ textAlign: 'center' }}>
          <Image
            alt='Mix Prime'
            sx={{ maxWidth: '300px' }}
            src={
              'https://res.cloudinary.com/gonation/image/upload/v1598969035/sites/red-rooster/logo-solid-white.png'
            }></Image>
        </Box>
        <Box>
          <SocialIcons
            links={site[0].node.data.links}
            slug={site[0].node.data.slug}></SocialIcons>
          <Box
            sx={{
              textAlign: 'center',
              color: 'white',
              mt: 4,
            }}>
            <NavMeta isFooter data={site} />
          </Box>
        </Box>
        <Flex
          sx={{
            flexWrap: 'wrap',
            justifyContent: 'center',
            mt: 3,
            fontFamily: 'heading',
            textTransform: 'uppercase',
          }}>
          {location === 'Danbury'
            ? routes.map(route => (
                <Box sx={{ marginX: 3, mb: [3, 0] }}>
                  <Link to={`/${route.route}`}>{route.name}</Link>
                </Box>
              ))
            : woodburyRoutes.map(route => (
                <Box sx={{ marginX: 3, mb: [3, 0] }}>
                  <Link to={`/${route.route}`}>{route.name}</Link>
                </Box>
              ))}
        </Flex>
      </Box>

      <Box sx={{ background: 'black', paddingY: 2 }}>
        <Box sx={{ maxWidth: '175px', margin: 'auto' }}>
          <img
            src='https://www.gonationsites.com/GNSE/gn-sites/images/gn-power-white.svg'
            alt='GoNation'
          />
        </Box>
      </Box>
    </>
  );
};

export default Footer;
