/** @jsx jsx */
import { jsx, Box, Flex, Text, Image, Button } from 'theme-ui'
import React from 'react'

const OtherLocationsBox = () => {
  const roosterLogo =
    'https://res.cloudinary.com/gonation/image/upload/v1598969035/sites/red-rooster/logo-solid-white.png'

  const mixPrimeLogo =
    'https://res.cloudinary.com/gonation/image/upload/v1598110699/sites/mix-prime/logo-black.png'

  const logoStyle = {
    maxWidth: '300px',
  }

  const buttonStyle = {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }

  const renderRoosterLocations = () => (
    <Flex sx={{ justifyContent: 'center', flexDirection: ['column', 'row'] }}>
      <Box sx={{ paddingX: 3, paddingY: 2 }}>
        <a href='https://www.redroosterct.com/ridgefield'>
          <Button sx={buttonStyle} variant='filll'>
            Ridgefield
          </Button>
        </a>
      </Box>
      <Box sx={{ paddingX: 3, paddingY: 2 }}>
        <a href='https://www.redroosterct.com/wilton'>
          <Button sx={buttonStyle} variant='filll'>
            Wilton
          </Button>
        </a>
      </Box>
      <Box sx={{ paddingX: 3, paddingY: 2 }}>
        <a href='https://www.redroosterct.com/newtown'>
          <Button sx={buttonStyle} variant='filll'>
            Newtown
          </Button>
        </a>
      </Box>
    </Flex>
  )

  const renderMixLocations = () => (
    <Flex
      sx={{
        justifyContent: 'center',
        marginTop: 'auto',
        flexDirection: ['column', 'row'],
      }}
    >
      <Box sx={{ paddingX: 3, paddingY: 2 }}>
        <a href='https://www.mixprimesteakhouse.com/danbury'>
          <Button sx={buttonStyle} variant='filll'>
            Danbury
          </Button>
        </a>
      </Box>

      <Box sx={{ paddingX: 3, paddingY: 2 }}>
        <a href='https://www.mixprimesteakhouse.com/danbury' target='_blank'>
          <Button sx={buttonStyle} variant='filll'>
            Woodbury
          </Button>
        </a>
      </Box>
    </Flex>
  )

  return (
    <Box sx={{ padding: 3 }}>
      <Text variant='heading' sx={{ textAlign: 'center' }}>
        View Our Other Locations
      </Text>
      <Flex
        sx={{
          justifyContent: 'center',
          flexDirection: ['column', 'row'],
          alignItems: 'center',
        }}
      >
        <Box sx={{ padding: [3, 4, 5], textAlign: 'center' }}>
          <Image sx={logoStyle} src={roosterLogo} alt='Red Rooster'></Image>
          {renderRoosterLocations()}
        </Box>
        {/* <Box
          sx={{
            padding: [3, 4, 5],
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}>
          <Image sx={logoStyle} src={mixPrimeLogo} alt='Mix Prime'></Image>
          {renderMixLocations()}
        </Box> */}
      </Flex>
    </Box>
  )
}

export default OtherLocationsBox
