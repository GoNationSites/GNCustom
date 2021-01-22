/** @jsx jsx */
import { jsx, Box, Text, Button, Flex } from 'theme-ui'
import React from 'react'

const LocationImageBox = ({ data }) => {
  const prefix = data ? data.data.cover.imagePrefix : ''
  const imgBaseUrl = data ? data.data.cover.imageBaseUrl : ''

  const { city } = data ? data.data : ''

  const getBG = () => ({
    background: `url(${imgBaseUrl}/${prefix})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  })
  if (data) {
    return (
      <Flex
        sx={{
          height: '250px',
          ...getBG(),
          color: 'white',
          padding: 3,
          flexDirection: 'column',
          position: 'relative',
          borderRadius: '30px',
          transition: 'all .5s ease-in',
        }}>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            background: 'rgba(0,0,0,.3)',
            height: '100%',
            width: '100%',
            zIndex: 0,
            borderRadius: '30px',
          }}></Box>
        <Text
          variant='centered'
          sx={{
            fontSize: 4,
            textTransform: 'uppercase',
            zIndex: 1,
            fontFamily: 'heading',
            fontWeight: 600,
          }}>
          {city}
        </Text>

        <Flex sx={{ marginTop: 'auto', flexWrap: 'wrap', zIndex: 1 }}>
          <Box sx={{ width: '100%', paddingBottom: 2 }}>
            <Button variant='white'>View Website</Button>
          </Box>
          <Box sx={{ width: '50%', paddingRight: 2 }}>
            <Button variant='white'>Call</Button>
          </Box>
          <Box sx={{ width: '50%', paddingLeft: 2 }}>
            <Button variant='white'>Directions</Button>
          </Box>
        </Flex>
      </Flex>
    )
  } else
    return (
      <Flex
        sx={{
          height: '250px',
          background: 'black',
          color: 'white',
          padding: 3,
          flexDirection: 'column',
          position: 'relative',
          borderRadius: '30px',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text variant='heading'>Please Select A Location</Text>
      </Flex>
    )
}

export default LocationImageBox
