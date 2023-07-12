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
    }).then((res) => {
      setShoutData(res.data);
    });
  }, []);

  const routes = [
    {
      name: 'Home',
      route: 'danbury',
      img: cloudinaryHelper(
        'https://res.cloudinary.com/gonation/image/upload/v1601650514/sites/mix-prime/399A8526.jpg',
        1000
      ),
      txt: 'Visit Home Page',
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
      txt: 'Steaks, seafood & more',
    },
    {
      name: 'Events',
      route: 'danbury/events',
      img: cloudinaryHelper(
        'https://res.cloudinary.com/gonation/image/upload/v1598035877/sites/mix-prime/events.jpg',
        1000
      ),
      txt: 'View Specials & Promotions',
    },
    {
      name: 'Gallery',
      route: 'danbury/gallery',
      img: cloudinaryHelper(
        'https://res.cloudinary.com/gonation/image/upload/v1598035875/sites/mix-prime/gallery.jpg',
        1000
      ),
      txt: 'Inside Look',
    },
    {
      name: 'Contact',
      route: 'danbury/contact',
      img: cloudinaryHelper(
        'https://res.cloudinary.com/gonation/image/upload/v1601650700/sites/mix-prime/399A8268.jpg',
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
      txt: 'Visit Home Page',
    },
    {
      name: 'About',
      route: 'woodbury/about',
      img: cloudinaryHelper(
        'https://res.cloudinary.com/gonation/image/upload/v1601671566/sites/mix-prime/about-navigation.jpg',
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
      txt: 'Steaks, seafood & more',
    },
    {
      name: 'Events',
      route: 'woodbury/events',
      img: cloudinaryHelper(
        'https://res.cloudinary.com/gonation/image/upload/v1598360971/sites/mix-prime/woodbury-events-route.jpg',
        1000
      ),
      txt: 'View Specials & Promotions',
    },
    {
      name: 'Gallery',
      route: 'woodbury/gallery',
      img: cloudinaryHelper(
        'https://res.cloudinary.com/gonation/image/upload/v1598360972/sites/mix-prime/woodbury-gallery-route.jpg',
        1000
      ),
      txt: 'Inside Look',
    },
    {
      name: 'Contact',
      route: 'woodbury/contact',
      img: cloudinaryHelper(
        'https://res.cloudinary.com/gonation/image/upload/v1601671530/sites/mix-prime/contact-in-nav.jpg',
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
          bg: navBackground ? '#fff' : '#fff',
          transition: 'all .3s',
          py: 2,
          borderBottom: '1px solid #eee',
        }}
      >
        <Flex sx={{ alignItems: 'center', paddingX: 3 }}>
          <Flex sx={{ width: ['20%', '33%'] }}>
            <Flex
              onClick={() => setShowShout(!showShout)}
              sx={{ alignItems: 'center', cursor: 'pointer' }}
              className='animate__animated animate__pulse animate__repeat-3	'
            >
              <Announcement width={'25px'} />
              <Text
                as='span'
                sx={{
                  fontSize: '14px',
                  ml: '14px',
                  color: '#111',
                  fontFamily: 'heading',
                  display: ['none', 'block'],
                }}
              >
                NEW SHOUT
              </Text>
            </Flex>
            {location === 'Danbury' ? (
              <Text
                sx={{
                  fontFamily: 'heading',
                  textTransform: 'uppercase',
                  marginRight: 3,
                  display: ['none', 'inline'],
                  border: '1px solid white',
                  borderRadius: '3px',
                  mx: 3,
                  mr: 4,
                  paddingY: 2,
                  color: '#111',
                  '&:hover': {
                    color: 'primary',
                    transition: 'all .5s',
                  },
                }}
                as='a'
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.opentable.com/restref/client/?rid=141181&restref=141181&corrid=f6b19c54-a302-4aa3-b674-4111b5f2233c'
              >
                Reserve A Table
              </Text>
            ) : (
              <Text
                sx={{
                  fontFamily: 'heading',
                  textTransform: 'uppercase',
                  marginRight: 4,
                  display: ['none', 'inline'],
                  border: '1px solid white',
                  borderRadius: '3px',
                  paddingX: [2, 4],
                  paddingY: 2,
                  color: '#111',
                  '&:hover': {
                    bg: 'color',
                    transition: 'all .5s',
                  },
                }}
                as='a'
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.opentable.com/r/mix-prime-steakhouse-fish-and-sushi-bar-woodbury'
              >
                Reserve A Table
              </Text>
            )}
          </Flex>
          <Box
            sx={{
              width: ['60%', '33%'],
              fontFamily: 'heading',
              textAlign: 'center',
            }}
          >
            <Text as='p' sx={{ fontSize: 1 }}>
              <Text
                as='span'
                sx={{
                  fontSize: '16px',
                  letterSpacing: '6px',
                  color: '#111',
                  // mr: 3,
                  fontFamily: 'heading',
                  textTransform: 'uppercase',
                }}
              >
                {location === 'Danbury' ? (
                  <Link sx={{ color: '#111' }} to='/woodbury'>
                    Danbury
                  </Link>
                ) : (
                  <Link sx={{ color: '#111' }} to='/danbury'>
                    Woodbury
                  </Link>
                )}
              </Text>
            </Text>
            <Text
              sx={{
                fontSize: 0,
                color: '#111',
                letterSpacing: '.75px',
                a: {
                  color: '#111',
                },
              }}
            >
              {location === 'Danbury' ? (
                <Link to='/woodbury'>Change location</Link>
              ) : (
                <Link to='/danbury'>Change location</Link>
              )}
            </Text>
          </Box>
          <Flex
            sx={{
              width: ['20%', '33%'],
              textAlign: 'right',
              justifyContent: 'flex-end',
              color: '#111',
              alignItems: 'center',
            }}
          >
            {location === 'Danbury' ? (
              <>
                <Link
                  to='/danbury/menu'
                  sx={{
                    fontFamily: 'heading',
                    mr: 3,
                    color: '#111',
                    textTransform: 'uppercase',
                    display: ['none', 'inline'],
                  }}
                >
                  Menu
                </Link>
                <Link
                  to='https://www.ubereats.com/store/mix-prime-steakhouse-danbury/5227YJIKSVawN5q75D2aYA?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjk1MyUyMEtpbmdzdG9uJTIwUmQlMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjJDaElKUDYtYnE2Zk8xSWtScV9OaEtIUEFWTUklMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIyZ29vZ2xlX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjgwMzQyMSUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4yODc2MDc5JTdE&utm_source=wok'
                  sx={{
                    fontFamily: 'heading',
                    mx: 3,
                    color: '#111',
                    textTransform: 'uppercase',
                    display: ['none', 'inline'],
                  }}
                >
                  UberEats
                </Link>
                <Text
                  sx={{
                    fontFamily: 'heading',
                    textTransform: 'uppercase',
                    display: ['none', 'inline'],
                    border: '1px solid white',
                    borderRadius: '3px',
                    mx: 3,
                    paddingY: 2,
                    paddingRight: 0,
                    color: '#111',
                    '&:hover': {
                      color: 'primary',
                      transition: 'all .5s',
                    },
                  }}
                  as='a'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.doordash.com/store/max-40-restaurant-and-bar-danbury-147354/en-US'
                >
                  Doordash
                </Text>
              </>
            ) : (
              <>
                <Link
                  to='/woodbury/menu'
                  sx={{
                    fontFamily: 'heading',
                    mr: 3,
                    color: '#111',
                    textTransform: 'uppercase',
                    display: ['none', 'inline'],
                  }}
                >
                  Menu
                </Link>
                <Link
                  to='https://www.ubereats.com/store/mix-prime-steakhouse-fish-%26-sushi-bar/yCCCxWfXSe6_Rio06aSkYQ?utm_source=wok'
                  sx={{
                    fontFamily: 'heading',
                    mx: 3,
                    color: '#111',
                    textTransform: 'uppercase',
                    display: ['none', 'inline'],
                  }}
                >
                  UberEats
                </Link>
              </>
            )}

            <HamburgerMenu
              isOpen={open}
              menuClicked={() => setOpen(!open)}
              width={30}
              height={15}
              strokeWidth={1}
              rotate={0}
              color='#111'
              borderRadius={0}
              animationDuration={0.5}
            />
          </Flex>
        </Flex>
      </Box>
      <NavMenu
        location={location}
        routes={location === 'Woodbury' ? woodburyRoutes : routes}
        open={open}
      ></NavMenu>
      {showShout ? (
        <Box
          sx={{
            position: 'fixed',
            zIndex: 99,
            top: '0',
            left: '0',
            paddingX: 4,
            width: '100%',
          }}
        >
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
