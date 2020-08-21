/** @jsx jsx */
import { jsx, Box, Flex, Text } from 'theme-ui'
import React, {useState} from 'react';
import HamburgerMenu from 'react-hamburger-menu';


import Announcement from './icons/Announcement'
import NavMenu from './NavMenu'

const Navigation = () => {
    const [open, setOpen] = useState(false)

    const routes = [
      {
        name: 'Home',
        route: '/danbury',
      },
      {
        name: 'About',
        route: '/about',
      },
      {
        name: 'Menu',
        route: '/menu',
      },
      {
        name: 'Events',
        route: '/events',
      },
      {
        name: 'Gallery',
        route: '/gallery',
      },
      {
        name: 'Contact',
        route: '/contact',
      },
    ];

    return (
      <>
        <Box
          sx={{
            position: 'fixed',
            left: 0,
            top: 0,
            width: '100%',
            zIndex: '999999',
            bg: 'white',
          }}>
          <Flex sx={{ alignItems: 'center', paddingX: 3 }}>
            <Box sx={{ width: '33%' }}>
              <Box className='animate__animated animate__pulse animate__repeat-3	'>
                <Announcement width={'25px'} />
              </Box>
            </Box>
            <Box
              sx={{ width: '33%', fontFamily: 'heading', textAlign: 'center' }}>
              <Text as='p' sx={{ fontSize: 1 }}>
                <Text as='span' sx={{ textTransform: 'uppercase' }}>
                  Mixed Prime
                </Text>{' '}
                <br />{' '}
                <Text as='span' sx={{ fontSize: 0 }}>
                  Danbury
                </Text>
              </Text>
            </Box>
            <Flex
              sx={{
                width: '33%',
                textAlign: 'right',
                justifyContent: 'flex-end',
              }}>
              <HamburgerMenu
                isOpen={open}
                menuClicked={() => setOpen(!open)}
                width={18}
                height={15}
                strokeWidth={1}
                rotate={0}
                color='black'
                borderRadius={0}
                animationDuration={0.5}
              />
            </Flex>
          </Flex>
        </Box>
        <NavMenu routes={routes} open={open}></NavMenu>
      </>
    );
}

export default Navigation;