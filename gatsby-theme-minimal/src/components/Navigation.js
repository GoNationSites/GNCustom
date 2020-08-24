/** @jsx jsx */
import { jsx, Box, Flex, Text } from 'theme-ui'
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import HamburgerMenu from 'react-hamburger-menu';


import Announcement from './icons/Announcement'
import NavMenu from './NavMenu'
import cloudinaryHelper from '../helpers/cloudinaryHelper';
import ShoutCard from './ShoutCard'

let jsonpAdapter = require('axios-jsonp');

const Navigation = () => {
    const [open, setOpen] = useState(false)
    const [shoutData, setShoutData] = useState(null);
    const [showShout, setShowShout] = useState(false)

    const shoutURL =
      'https://data.prod.gonation.com/profile/shoutsnew/bzn-vBPQfZmCTC2V2Y_BpE6SPw';

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
        route: '/danbury',
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
        route: '/menu',
        img: cloudinaryHelper(
          'https://res.cloudinary.com/gonation/image/upload/v1598035876/sites/mix-prime/menu.jpg',
          1000
        ),
        txt: 'View The Menu',
      },
      {
        name: 'Events',
        route: '/events',
        img: cloudinaryHelper(
          'https://res.cloudinary.com/gonation/image/upload/v1598035877/sites/mix-prime/events.jpg',
          1000
        ),
        txt: 'View Events',
      },
      {
        name: 'Gallery',
        route: '/gallery',
        img: cloudinaryHelper(
          'https://res.cloudinary.com/gonation/image/upload/v1598035875/sites/mix-prime/gallery.jpg',
          1000
        ),
        txt: 'explore the gallery'
      },
      {
        name: 'Contact',
        route: '/contact',
        img: cloudinaryHelper(
          'https://res.cloudinary.com/gonation/image/upload/v1597940533/sites/mix-prime/mobile-slide-3.jpg',
          1900
        ),
        txt: 'talk to us'
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
              <Flex
              onClick={() => setShowShout(!showShout)}
                sx={{ alignItems: 'center' }}
                className='animate__animated animate__pulse animate__repeat-3	'>
                <Announcement width={'25px'} />
                <Text as='span' sx={{ fontSize: 0, ml: 1 }}>
                  New Shout
                </Text>
              </Flex>
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
        {showShout ?  <Box sx={{position: 'fixed', zIndex: 99, top: '0', left: '0', paddingX: 4, width: '100%'  }}>{shoutData ? <ShoutCard setShowShout={setShowShout} data={shoutData}></ShoutCard> : ''}</Box> : ''}
        
      </>
    );
}

export default Navigation;