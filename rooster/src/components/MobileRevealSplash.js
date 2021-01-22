/** @jsx jsx */
import { jsx, Box, Image, Flex, Text } from 'theme-ui'
import React, { useState } from 'react'
import { Link } from 'gatsby'
import Right from './icons/Right'
import slugify from 'slugify'

import ClickableAddress from '../components/ClickableAddress'
import ClickablePhone from '../components/ClickablePhone'

// takes in logo and an array of all location items
const MobileRevealSplash = ({ logo, locations }) => {
  const [activeLocation, setActiveLocation] = useState(null)
  const businessLocations = locations[0].node
    ? locations.map(({ node }) => node.data)
    : locations

  const getBG = cover => ({
    background: `url(${cover.imageBaseUrl}/${cover.imagePrefix})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  })

  const handleLocationClick = business => {
    setActiveLocation(business)
  }

  const callDirStyle = {
    color: 'text',
    fontSize: 1,
    fontFamily: 'heading',
    textTransform: 'uppercase',
  }

  return (
    <Box>
      <Flex
        sx={{
          flexDirection: 'column',
          height: 'calc(100vh - 70px)',
          padding: 2,
        }}>
        <Box sx={{ height: '25%', padding: 2, textAlign: 'center' }}>
          <Image src={logo} sx={{ height: '100%', width: 'auto' }}></Image>
        </Box>
        {businessLocations.map(business => (
          <Flex
            onClick={() => setActiveLocation(business)}
            sx={{
              height: '25%',
              ...getBG(business.cover),
              alignItems: 'center',
              justifyContent: 'flex-end',
              mb: 3,
              overflow: 'hidden',
            }}>
            <Box
              sx={{
                color: 'text',
                bg: 'background',
                paddingY: 3,
                paddingX: 3,
                borderTopLeftRadius: '30px',
                borderBottomLeftRadius: '30px',
                transition: 'all 2s',
                position: 'relative',
                left: activeLocation === business ? 0 : 'calc(10vw + 164px)',
                transition: 'all .3s',
              }}>
              <Text as='a' onClick={() => handleLocationClick(business)}>
                <Flex sx={{ alignItems: 'center' }}>
                  <Text
                    variant='heading'
                    sx={{ fontSize: 2, fontWeight: '700', pr: '3rem' }}>
                    {business.city}{' '}
                  </Text>

                  {/* <Text as='span' sx={{ paddingLeft: 3 }}>
                    <Right width='25px' fill={'#EE1C25'} />
                  </Text> */}
                  <Flex
                    sx={{
                      width: '220px',
                      overflow: 'hidden',
                      justifyContent: 'space-evenly',
                      transition: 'width .3s',
                      alignItems: 'center',
                    }}>
                    <Text as='span' sx={callDirStyle}>
                      <ClickablePhone data={business} title='Call' />
                    </Text>
                    <Text as='span' sx={callDirStyle}>
                      <ClickableAddress data={business} title='Directions' />
                    </Text>
                    <Text as='span' sx={{ ...callDirStyle }}>
                      <Link to={`/${slugify(business.city, { lower: true })}`}>
                        Website
                      </Link>
                    </Text>
                  </Flex>
                </Flex>
              </Text>
            </Box>
          </Flex>
        ))}
        <Flex
          sx={{
            justifyContent: 'space-between',
            paddingX: 1,
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Box>
            <Text as='p' variant='heading'>
              Red Rooster {new Date().getFullYear()}
            </Text>
          </Box>
          <Box>
            <a
              href='https://www.gonation.com/'
              target='_blank'
              rel='noopener noreferrer'>
              <Image
                sx={{ maxWidth: ['200px', '225px'] }}
                src='https://www.gonationsites.com/GNSE/gn-sites/images/gn-power-black.svg'
                alt='GoNation'
              />
            </a>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

export default MobileRevealSplash
