/** @jsx jsx */
import { jsx, Box, Flex, Text } from 'theme-ui';
import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import slugify from 'slugify';
import HamburgerMenu from 'react-hamburger-menu';
import { Animated } from 'react-animated-css';

import ClickableAddress from './ClickableAddress';

const Navigation = ({ routes, pageContext }) => {
  const locations = useStaticQuery(graphql`
    query LocationsQuery {
      allSiteData {
        edges {
          node {
            data {
              city
            }
          }
        }
      }
    }
  `);

  const curCity = pageContext.data.city;

  const [open, setOpen] = useState(false);
  const styleObj = {
    color: 'text',
    fontWeight: '700',
    textTransform: 'uppercase',
    fontFamily: 'heading',
    letterSpacing: '2px',
    fontSize: 1,
  };
  return (
    <Box
      sx={{
        background: 'white',
        boxShadow: '0px -1px 12px rgba(0,0,0,.1)',
        position: 'fixed',
        bottom: open ? '0px' : '-450px',
        width: '100%',
        padding: 3,
        borderTopLeftRadius: '30px',
        borderTopRightRadius: '30px',
        transition: 'all .25s',
      }}>
      <Flex
        sx={{
          alignItems: 'center',
          borderBottom: '2px solid',
          borderColor: 'primary',
          pb: 3,
          mb: 3,
        }}>
        <Box sx={{ flex: 1, textAlign: 'center' }}>
          <ClickableAddress
            data={pageContext.data}
            title='Directions'
            style={styleObj}
          />
        </Box>

        <Box sx={{ flex: 1, textAlign: 'center' }}>
          <Text sx={styleObj} as='a' href={`tel:${pageContext.data.phone}`}>
            Call
          </Text>
        </Box>
        <Flex
          sx={{
            width: '25%',
            textAlign: 'center',
            justifyContent: 'center',
          }}>
          <HamburgerMenu
            isOpen={open}
            menuClicked={() => setOpen(!open)}
            width={18}
            height={15}
            strokeWidth={2}
            rotate={0}
            color='#EE1C25'
            borderRadius={0}
            animationDuration={0.5}
          />
        </Flex>
      </Flex>

      <Box>
        {routes.map(route => (
          <Box sx={{ paddingY: 2 }}>
            <Text
              as='a'
              sx={{
                color: 'text',
                fontSize: 4,
                fontFamily: 'heading',
                textTransform: 'uppercase',
              }}>
              <Link to={`/${slugify(curCity, { lower: true })}${route.path}`}>
                {route.title}
              </Link>
            </Text>
          </Box>
        ))}
        <Text sx={{ textAlign: 'center', fontSize: 1, my: 4 }}>
          View a different location
        </Text>
        <Flex sx={{ justifyContent: 'center' }}>
          {locations.allSiteData.edges.map(({ node }) => (
            <Box sx={{ marginX: 3 }}>
              <Text
                variant='heading'
                sx={{
                  textTransform: 'uppercase',
                  color: curCity === node.data.city ? 'primary' : 'text',
                }}>
                {node.data.city}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Navigation;
