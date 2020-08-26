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
        zIndex: 99,
        bottom: open ? '0px' : '-413px',
        width: ['100%', 'auto'],
        padding: 3,
        borderTopLeftRadius: ['30px', 0],
        borderTopRightRadius: ['30px', 0],
        transition: 'all .25s',
        right: ['unset', !open ? '-352px' : '0'],
        height: ['auto', '100vh'],
        top: ['unset', 0],
        display: ['block', 'flex'],
      }}>
      <Flex
        sx={{
          alignItems: 'center',
          borderBottom: ['2px solid', 'none'],
          borderColor: 'primary',
          pb: 3,
          mb: 3,
          flexDirection: ['row', 'column'],
          height: ['auto', '100%'],
          justifyContent: ['unset', 'space-evenly'],
        }}>
        <Box sx={{ flex: 1, textAlign: 'center', order: ['unset', 0] }}>
          <Box sx={{ display: ['block', 'none'] }}>
            <ClickableAddress
              data={pageContext.data}
              title='Directions'
              style={styleObj}
            />
          </Box>
        </Box>

        <Box
          sx={{
            flex: 1,
            textAlign: 'center',
            order: ['unset', 3],
            display: ['block', 'flex'],
            alignItems: 'center',
          }}>
          <Box sx={{ display: ['block', 'none'] }}>
            <Text sx={styleObj} as='a' href={`tel:${pageContext.data.phone}`}>
              Call
            </Text>
          </Box>
        </Box>
        <Flex
          sx={{
            width: ['25%', 'auto'],
            textAlign: 'center',
            justifyContent: 'center',
            order: ['unset', 1],
            cursor: 'pointer',
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

      <Box
        sx={{
          display: ['block', 'flex'],
          flexDirection: 'column',
          pl: [0, 4],
        }}>
        {routes.map(route => (
          <Box sx={{ paddingY: 2 }}>
            <Text
              as='a'
              sx={{
                color: 'text',
                fontSize: [3, 4, 5],
                fontFamily: 'heading',
                textTransform: 'uppercase',
              }}>
              <Link
                activeStyle={{ color: '#EE1C25' }}
                sx={{
                  '&:hover': {
                    color: 'primary',
                    transition: 'all .5s',
                  },
                }}
                to={`/${slugify(curCity, { lower: true })}${route.path}`}>
                {route.title}
              </Link>
            </Text>
          </Box>
        ))}

        <Box sx={{ mt: ['unset', 'auto'] }}>
          <Text sx={{ textAlign: ['center', 'left'], fontSize: 1, my: 4 }}>
            View a different location
          </Text>
          <Flex sx={{ justifyContent: 'center' }}>
            {locations.allSiteData.edges.map(({ node }, idx) => (
              <Box sx={{ marginX: 3, marginLeft: idx === 0 ? 0 : 3 }}>
                <Text
                  variant='heading'
                  sx={{
                    textTransform: 'uppercase',
                  }}>
                  <Link
                    sx={{
                      color: curCity === node.data.city ? 'primary' : 'text',
                    }}
                    to={`/${slugify(node.data.city, { lower: true })}`}>
                    {node.data.city}
                  </Link>
                </Text>
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Navigation;
