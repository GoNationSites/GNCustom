/** @jsx jsx */
import { jsx, Box, Flex, Text, Image } from 'theme-ui';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import axios from 'axios';
import HamburgerMenu from 'react-hamburger-menu';

import Announcement from './icons/Knife';
import NavMenu from './NavMenu';
import cloudinaryHelper from '../helpers/cloudinaryHelper';
import ShoutCard from './ShoutCard';

let jsonpAdapter = require('axios-jsonp');

const Navigation = ({ location }) => {
  const [open, setOpen] = useState(false);
  const [shoutData, setShoutData] = useState(null);
  const [showShout, setShowShout] = useState(false);
  const [navBackground, setNavBackground] = useState(false);

  const navRef = useRef();
  navRef.current = navBackground;

  const id = () => {
    if (location === 'Danbury') {
      return 'bzn-vBPQfZmCTC2V2Y_BpE6SPw';
    } else return 'bzn-mmT_2ynbR4eGFehR2VEi8g';
  };

  const shoutURL = `https://data.prod.gonation.com/profile/shoutsnew/${id()}`;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 70;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    axios({
      url: shoutURL,
      adapter: jsonpAdapter,
    }).then(res => {
      setShoutData(res.data);
    });
  }, []);

  const routes = [
    {
      name: 'Home',
      route: 'danbury',
      img: cloudinaryHelper(
        'https://res.cloudinary.com/gonation/image/upload/v1598035952/sites/mix-prime/home.jpg',
        1000
      ),
      txt: 'Go Home',
    },
    {
      name: 'About',
      route: 'danbury/about',
      img: cloudinaryHelper(
        'https://res.cloudinary.com/gonation/image/upload/v1598035878/sites/mix-prime/about.jpg',
        1000
      ),
      txt: 'Learn More',
    },
    {
      name: 'Menu',
      route: 'danbury/menu',
      img: cloudinaryHelper(
        'https://res.cloudinary.com/gonation/image/upload/v1598035876/sites/mix-prime/menu.jpg',
        1000
      ),
      txt: 'View The Menu',
    },
    {
      name: 'Events',
      route: 'danbury/events',
      img: cloudinaryHelper(
        'https://res.cloudinary.com/gonation/image/upload/v1598035877/sites/mix-prime/events.jpg',
        1000
      ),
      txt: 'View Events',
    },
    {
      name: 'Gallery',
      route: 'danbury/gallery',
      img: cloudinaryHelper(
        'https://res.cloudinary.com/gonation/image/upload/v1598035875/sites/mix-prime/gallery.jpg',
        1000
      ),
      txt: 'explore the gallery',
    },
    {
      name: 'Contact',
      route: 'danbury/contact',
      img: cloudinaryHelper(
        'https://res.cloudinary.com/gonation/image/upload/v1597940533/sites/mix-prime/mobile-slide-3.jpg',
        1900
      ),
      txt: 'talk to us',
    },
  ];

  const woodburyRoutes = [
    {
      name: 'Home',
      route: 'woodbury',
      img: cloudinaryHelper(
        'https://res.cloudinary.com/gonation/image/upload/v1598360972/sites/mix-prime/woodbury-home-route.jpg',
        1000
      ),
      txt: 'Go Home',
    },
    {
      name: 'About',
      route: 'woodbury/about',
      img: cloudinaryHelper(
        'https://res.cloudinary.com/gonation/image/upload/v1598361104/sites/mix-prime/wood-about-route.jpg',
        1000
      ),
      txt: 'Learn More',
    },
    {
      name: 'Menu',
      route: 'woodbury/menu',
      img: cloudinaryHelper(
        'https://res.cloudinary.com/gonation/image/upload/v1598361073/sites/mix-prime/wood-menu-route.jpg',
        1000
      ),
      txt: 'View The Menu',
    },
    {
      name: 'Events',
      route: 'woodbury/events',
      img: cloudinaryHelper(
        'https://res.cloudinary.com/gonation/image/upload/v1598360971/sites/mix-prime/woodbury-events-route.jpg',
        1000
      ),
      txt: 'View Events',
    },
    {
      name: 'Gallery',
      route: 'woodbury/gallery',
      img: cloudinaryHelper(
        'https://res.cloudinary.com/gonation/image/upload/v1598360972/sites/mix-prime/woodbury-gallery-route.jpg',
        1000
      ),
      txt: 'explore the gallery',
    },
    {
      name: 'Contact',
      route: 'woodbury/contact',
      img: cloudinaryHelper(
        'https://res.cloudinary.com/gonation/image/upload/v1598360973/sites/mix-prime/woodbury-contact-route.jpg',
        1900
      ),
      txt: 'talk to us',
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
          bg: navBackground ? '#111' : 'rgba(0,0,0,.76)',
          transition: 'all .3s',
          py: 2,
        }}>
        <Flex sx={{ alignItems: 'center', paddingX: 3 }}>
          <Box sx={{ width: '33%' }}>
            <Flex
              onClick={() => setShowShout(!showShout)}
              sx={{ alignItems: 'center', cursor: 'pointer' }}
              className='animate__animated animate__pulse animate__repeat-3	'>
              <Announcement width={'25px'} />
              <Text
                as='span'
                sx={{
                  fontSize: '14px',
                  ml: '14px',
                  color: '#fff',
                  fontFamily: 'heading',
                }}>
                NEW SHOUT
              </Text>
            </Flex>
          </Box>
          <Box
            sx={{ width: '33%', fontFamily: 'heading', textAlign: 'center' }}>
            <Text as='p' sx={{ fontSize: 1 }}>
              <Text
                as='span'
                sx={{
                  fontSize: '16px',
                  letterSpacing: '6px',
                  color: '#fff',
                  mr: 3,
                  fontFamily: 'heading',
                  textTransform: 'uppercase',
                }}>
                {location === 'Danbury' ? (
                  <Link to='/woodbury'>Danbury</Link>
                ) : (
                  <Link to='/danbury'>Woodbury</Link>
                )}
              </Text>
            </Text>
          </Box>
          <Flex
            sx={{
              width: '33%',
              textAlign: 'right',
              justifyContent: 'flex-end',
              color: 'white',
              alignItems: 'center',
            }}>
            {location === 'Danbury' ? (
              <Text
                sx={{
                  fontFamily: 'heading',
                  textTransform: 'uppercase',
                  marginRight: 3,
                  display: ['none', 'inline'],
                  border: '1px solid white',
                  borderRadius: '3px',
                  paddingX: [2, 4],
                  paddingY: 2,
                  '&:hover': {
                    textDecoration: 'underline',
                    background: 'primary',
                    transition: 'all .5s',
                  },
                }}
                as='a'
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.opentable.com/restref/client/?rid=141181&restref=141181&corrid=f6b19c54-a302-4aa3-b674-4111b5f2233c'>
                Reserve A Table
              </Text>
            ) : (
              ''
            )}

            {location === 'Danbury' ? (
              <Link
                to='/danbury/menu'
                sx={{
                  fontFamily: 'heading',
                  mr: 3,
                  textTransform: 'uppercase',
                }}>
                Menu
              </Link>
            ) : (
              <Link
                to='/woodbury/menu'
                sx={{
                  fontFamily: 'heading',
                  mr: 3,
                  textTransform: 'uppercase',
                }}>
                Menu
              </Link>
            )}

            <HamburgerMenu
              isOpen={open}
              menuClicked={() => setOpen(!open)}
              width={18}
              height={15}
              strokeWidth={1}
              rotate={0}
              color='#fff'
              borderRadius={0}
              animationDuration={0.5}
            />
          </Flex>
        </Flex>
      </Box>
      <NavMenu
        routes={location === 'Woodbury' ? woodburyRoutes : routes}
        open={open}></NavMenu>
      {showShout ? (
        <Box
          sx={{
            position: 'fixed',
            zIndex: 99,
            top: '0',
            left: '0',
            paddingX: 4,
            width: '100%',
          }}>
          {shoutData ? (
            <ShoutCard setShowShout={setShowShout} data={shoutData}></ShoutCard>
          ) : (
            ''
          )}
        </Box>
      ) : (
        ''
      )}
    </>
  );
};

export default Navigation;
