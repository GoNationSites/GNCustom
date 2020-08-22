/** @jsx jsx */
import React from 'react';
import { jsx, Box, Flex, Text, Button, AspectImage } from 'theme-ui';
import { Link } from 'gatsby';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const ContentShowcase = ({ data }) => {
  return (
    <Box>
      {data.map((el, idx) => (
        <Flex
          sx={{
            flexDirection: ['column', 'column', 'row'],
            paddingY: [3,4,5],
            alignItems: 'center',
            paddingX: [3, 0, 0]
          }}>
          <Box sx={{ width: ['100%', '100%', '50%'], order: idx == 1 ? 9 : 'unset', marginTop: idx !== 0 ? 5 : 0 }}>
            <Zoom>
              <AspectImage
                sx={{ height: '100%', width: '100%' }}
                ratio={1 / 1}
                src={el.img}
                alt={el.title}></AspectImage>
            </Zoom>
          </Box>

          <Box sx={{ width: ['100%', '100%', '50%'], paddingX: 3 }}>
            <Fade
              left={idx === 1 ? true : false}
              right={idx === 0 ? true : false}>
              <Text
                as='h3'
                variant='heading'
                sx={{
                  color: 'primary',
                  pl: [0,0, idx === 0 ? 4 : 0],
                  pr: [0,0, idx === 1 ? 4 : 0],
                  pb: 3,
                  borderBottom: '1px solid',
                  borderColor: 'primary',
                  ml: [0, 0, idx === 1 ? '0' : '-40px'],
                  mr: [0, 0, idx === 0 ? '0' : '-40px'],
                  mb: 4,
                  zIndex: 3,
                  position: 'relative',
                  marginTop: [4,4,0]
                }}>
                {el.title}
              </Text>
              <Text
                as='p'
                sx={{ maxWidth: '200px', color: 'lightText', mb: 4 }}>
                {el.txt}
              </Text>
              <Box>
                <Link to={`/${el.btn.link}`}>
                  <Button variant='black' sx={{ width: 'auto' }}>
                    {el.btn.title}
                  </Button>
                </Link>
              </Box>
            </Fade>
          </Box>
        </Flex>
      ))}
    </Box>
  );
};

export default ContentShowcase;
