/** @jsx jsx */
import { jsx, Flex, Box, Text, Button } from 'theme-ui';
import { Link } from 'gatsby';

import React, { useState } from 'react';

const VerticalRoutes = ({ routes }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  return (
    <Flex sx={{ height: '100%' }}>
      {routes.map((route, idx) => (
        <Flex
          onMouseEnter={() => setActiveMenu(idx)}
          onMouseLeave={() => setActiveMenu(null)}
          key={route.name}
          sx={{
            flexDirection: 'column',
            flex: `1 1 ${activeMenu === idx ? '30%' : ''}`,
            borderRight: '2px solid white',
            height: '100%',
            backgroundImage: `url(${route.img})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            position: 'relative',
            justifyContent: 'flex-end',
            alignItems: 'center',
            padding: 3,
            cursor: 'pointer',
            transition: 'flex 1s ease-in',
          }}>
          <Box
            sx={{
              background: 'rgba(0,0,0,.3)',
              position: 'absolute',
              zIndex: 0,
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
            }}></Box>
          <Box sx={{ pb: 6, position: 'relative', zIndex: '9' }}>
            <Text
              variant='heading'
              sx={{
                color: 'white',
                fontWeight: '300',
                fontSize: 4,
                textTransform: 'uppercase',
                textAlign: 'center',
              }}>
              {route.name}
            </Text>
            {activeMenu === idx ? (
              <Box
                sx={{ textAlign: 'center', mt: 3, transition: 'all ease-in' }}>
                <Link to={`/${route.route}`}>
                  <Button
                    variant='white'
                    sx={{
                      cursor: 'pointer',
                      '&:hover': {
                        bg: 'primary',
                        color: 'white',
                        transition: 'all .3',
                      },
                    }}>
                    {route.txt}
                  </Button>
                </Link>
              </Box>
            ) : (
              ''
            )}
          </Box>
        </Flex>
      ))}
    </Flex>
  );
};

export default VerticalRoutes;
