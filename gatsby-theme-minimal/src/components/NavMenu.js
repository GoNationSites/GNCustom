/** @jsx jsx */
import { jsx, Flex, Box } from 'theme-ui';
import { Link } from 'gatsby';
import { Animated } from 'react-animated-css';
import { useStaticQuery, graphql } from 'gatsby';

import React from 'react';

import NavMeta from './NavMeta';
import VerticalRoutes from './VerticalRoutes'

const NavMenu = ({ routes, open }) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
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

  const site = data.allSiteData.edges.filter(
    ({ node }) => node.data.city === 'Danbury'
  );

  return (
    <Animated
      animationIn='slideInDown'
      animationOut='slideOutUp'
      isVisible={open}
      style={{
        height: '100vh',
        position: 'fixed',
        top: '42px',
        zIndex: 99,
        height: '100vh',
        position: 'fixed',
        backgroundColor: '#ffffff',
        backgroundImage: `url("https://www.transparenttextures.com/patterns/brushed-alum.png")`,
        borderTop: '1px solid #eee',
        width: '100%',
      }}>
      <Flex
        sx={{
          display: ['flex', 'flex', 'none'],
          paddingTop: 4,
          paddingY: 4,
          flexDirection: ['column', 'column', 'row'],
          marginX: 4,
        }}>
        {routes.length &&
          routes.map(i => (
            <Box key={i.name} sx={{ textAlign: 'center', mb: 3 }}>
              <Link
                sx={{
                  color: 'text',
                  fontFamily: 'heading',
                  textTransform: 'uppercase',
                  fontSize: 4,
                  fontWeight: 100,
                }}
                to={`${i.route}`}>
                {i.name}
              </Link>
            </Box>
          ))}
        <Box
          sx={{ borderTop: '1px solid', borderColor: 'primary', pt: 2, mt: 5 }}>
          <NavMeta data={site} />
        </Box>
      </Flex>

      <Box sx={{display: ['none', 'none', 'block'], height: '100%'}}>
        <VerticalRoutes routes={routes} />
      </Box>
    </Animated>
  );
};

export default NavMenu;
