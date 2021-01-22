import { jsx, Box, Flex, Text, Image } from 'theme-ui'
import React from 'react'
import HeroSlider, { Slide } from 'hero-slider'
import { Link } from 'gatsby'

import cloudinaryHelper from '../helpers/cloudinaryHelper'
import SimpleShout from '../components/SimpleShout'

const HomeHero = ({ withShout, id, location }) => {
  const ridgefieldPhotos = [
    'https://res.cloudinary.com/gonation/image/upload/v1598460315/sites/red-rooster/ridgefield/Group_Food_Photos_17.jpg',
    'https://res.cloudinary.com/gonation/image/upload/v1598460315/sites/red-rooster/ridgefield/Butternut_Squash_Pizza_10.jpg',
    'https://res.cloudinary.com/gonation/image/upload/v1598460035/sites/red-rooster/ridgefield/Chopped_Cobb_Salad_7.jpg',
    // 'https://res.cloudinary.com/gonation/image/upload/v1598460315/sites/red-rooster/ridgefield/Dining_Room_6.jpg',
    'https://res.cloudinary.com/gonation/image/upload/v1601503161/sites/red-rooster/hero-4.jpg',
  ]

  return (
    <Box sx={{ position: 'relative' }}>
      <HeroSlider
        orientation='horizontal'
        initialSlide={1}
        style={{
          color: '#FFF',
        }}
        settings={{
          slidingDuration: 500,
          slidingDelay: 500,
          shouldAutoplay: true,
          shouldDisplayButtons: false,
          autoplayDuration: 12000,
          height: '99vh',
        }}>
        {ridgefieldPhotos.map(photo => (
          <Slide
            background={{
              backgroundImage: cloudinaryHelper(photo, 2000),
              backgroundAnimation: 'zoom',
            }}
            alt={'Red Rooster Pub'}
          />
        ))}
      </HeroSlider>
      <Flex
        sx={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          zIndex: 3,
          left: 0,
          top: 0,
          background: 'rgba(0,0,0,.2)',
          padding: 2,
          paddingX: 3,
          flexDirection: 'column',
          paddingTop: 4,
        }}>
        <Flex sx={{ mb: 4, flexDirection: 'column', alignItems: 'flex-start' }}>
          <Text
            sx={{
              color: 'white',
              ml: 3,
              fontFamily: 'heading',
              fontSize: [2, 3],
              fontWeight: 'bold',
              textTransform: 'uppercase',
              width: '100%',
              textAlign: 'right',
              paddingRight: [4, 5],
              mb: 0,
            }}>
            {location}
            <br />{' '}
            <Text
              as='span'
              sx={{ fontSize: 0, fontWeight: '400', color: 'white' }}>
              <Link to='/' style={{ color: 'white' }}>
                Change Location
              </Link>
            </Text>
          </Text>

          <Image
            sx={{ maxWidth: ['175px', '225px', '250px'], mt: ['-3rem', 0] }}
            src={
              'https://res.cloudinary.com/gonation/image/upload/v1598969035/sites/red-rooster/logo-solid-white.png'
            }
            alt='Red Rooster'
          />
        </Flex>
        <Box sx={{ mt: [5, 6] }}>
          {withShout ? <SimpleShout id={id} /> : ''}
        </Box>
        <Box sx={{ mt: 'auto' }}>
          <Text
            variant='heading'
            sx={{ fontSize: 8, display: ['none', 'inline'], color: 'white' }}>
            The Best Night In Town
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default HomeHero
