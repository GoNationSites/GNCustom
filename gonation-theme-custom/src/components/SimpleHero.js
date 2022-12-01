/** @jsx jsx */
import { jsx, Box, Text, Flex, Image } from 'theme-ui';

import React from 'react';
import { Link } from 'gatsby';
import slugify from 'slugify';
import cloudinaryOptimize from '../helpers/cloudinaryHelper';
import Img from 'react-cloudinary-lazy-image';

const SimpleHero = ({ pageTitle, location }) => {
  console.log(pageTitle)
  return (
    <>
    { pageTitle !== "Join Our Team" ?
    <Box sx={{ height: '75vh', position: 'relative' }}>
      <Img
        cloudName={'gonation'}
        imageName={`sites/red-rooster/${slugify(location, {
          lower: true,
        })}/${pageTitle}-hero.jpg`}
        fluid={{
          maxWidth: '2000',
        }}
        style={{ width: '100%', pointerEvents: 'none' }}
      />
      <Box
        sx={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          top: 0,
          left: 0,
          padding: 3,
        }}>
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
            paddingRight: 5,
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
        <Flex sx={{ flexDirection: 'column', height: '100%' }}>
          <Box>
            <Link to={`/${slugify(location, { lower: true })}`}>
              <Image
                sx={{ maxWidth: ['175px', '225px', '250px'] }}
                src={
                  'https://res.cloudinary.com/gonation/image/upload/v1598969035/sites/red-rooster/logo-solid-white.png'
                }
                alt='Red Rooster'
              />
            </Link>
          </Box>
          <Box sx={{ marginTop: 'auto', mb: [4, 5] }}>
            <Text
              variant='heading'
              sx={{ color: 'white', fontSize: [6, 7, 8] }}>
              {pageTitle}
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box> : 
     <Box sx={{ height: '25vh', position: 'relative' }}>
     <Box
       sx={{
         position: 'absolute',
         height: '100%',
         width: '100%',
         top: 0,
         left: 0,
         padding: 3,
       }}>
       <Text
         sx={{
           color: 'black',
           ml: 3,
           fontFamily: 'heading',
           fontSize: [2, 3],
           fontWeight: 'bold',
           textTransform: 'uppercase',
           width: '100%',
           textAlign: 'right',
           paddingRight: 5,
           mb: 0,
         }}>
         {location}
         <br />{' '}
         <Text
           as='span'
           sx={{ fontSize: 0, fontWeight: '400', color: 'white' }}>
           <Link to='/' style={{ color: 'black' }}>
             Change Location
           </Link>
         </Text>
       </Text>
       <Flex sx={{ flexDirection: 'column', height: '100%' }}>
         <Box>
           <Link to={`/${slugify(location, { lower: true })}`}>
           </Link>
         </Box>
         <Box sx={{ marginTop: 'auto', mb: [4, 5], textAlign: 'center' }}>
           <Text
             variant='heading'
             sx={{ color: 'black', fontSize: [4, 5, 6] }}>
             Inquire About Open Positions
           </Text>
         </Box>
       </Flex>
     </Box>
   </Box>
    }
    </>
  );
};

export default SimpleHero;
