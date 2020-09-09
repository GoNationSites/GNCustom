/** @jsx jsx */
import { jsx, Flex, Box, Text, Image } from 'theme-ui';
import React, { useState } from 'react';
import { Link } from 'gatsby';
import slugify from 'slugify';

import cloudinaryOptimize from '../helpers/cloudinaryOptimize';
import printAddressString from '../helpers/printAddressString';
import getGoogleStr from '../helpers/getGoogleStr';

const VerticalSplash = ({ locations }) => {
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const getBg = node => {
    return `url(${node.data.cover.imageBaseUrl}/${node.data.cover.imagePrefix})`;
  };
  return (
    <>
      <Flex
        sx={{
          height: '97vh',
          backgroundColor: 'black',
          position: 'relative',
          paddingY: 5,
          paddingX: 4,
          backgroundColor: '#fff',
          // backgroundImage: `url("https://www.transparenttextures.com/patterns/tileable-wood-colored.png")`,
          /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
        }}>
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            left: 0,
            top: 0,
          }}>
          <Box sx={{ textAlign: 'center' }}>
            {/* <Text
            variant='heading'
            sx={{
              fontSize: [3, 7, 8],
              color: 'white',
              textShadow: '2px 2px 3px rgba(0,0,0.4)',
              mt: 1,
            }}>
            Red Rooster Pub
          </Text> */}
            <Text
              sx={{
                display: 'block',
                fontSize: 0,
                color: 'white',
                textShadow: '2px 2px 3px rgba(0,0,0.4)',
                transition: 'display 3.25s',
              }}>
              <Image
                sx={{ maxWidth: '200px' }}
                src={cloudinaryOptimize(
                  'https://res.cloudinary.com/gonation/image/upload/v1598377918/sites/red-rooster/logo-black.png',
                  420
                )}></Image>
            </Text>
          </Box>
        </Box>
        {locations.map(({ node }) => (
          <Flex
            onMouseEnter={() => setHoveredLocation(node)}
            onMouseLeave={() => setHoveredLocation(null)}
            sx={{
              flex: 1,
              height: '80%',
              marginTop: 'auto',
              backgroundImage: getBg(node),
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              marginX: 2,
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <Box sx={{ width: '100%' }}>
              <Box
                sx={{
                  background: 'white',
                  marginX: 4,
                  height: hoveredLocation === node ? '250px' : '60px',
                  padding: 3,
                  paddingX: 4,
                  borderTopLeftRadius: '30px',
                  borderTopRightRadius: '30px',
                  overflow: 'hidden',
                  color: 'text',
                  transition: 'all .5s',
                  transitionTimingFunction: 'cubic-bezier(0,1,.5,1)',
                }}>
                <Text
                  variant='heading'
                  sx={{
                    color: 'text',
                    marginBottom: 3,
                    fontSize: [0, 4, 5],
                    textAlign: 'center',
                    borderBottom: '2px solid',
                    borderColor: 'primary',
                    pb: 1,
                  }}>
                  {node.data.city}
                </Text>
                <Flex sx={{ alignItems: 'center' }}>
                  <Box sx={{ width: '33%' }}>
                    <Image
                      src={cloudinaryOptimize(
                        'https://res.cloudinary.com/gonation/image/upload/v1598377918/sites/red-rooster/logo-black.png',
                        420
                      )}></Image>
                  </Box>
                  <Box sx={{ paddingX: 3, pt: 2 }}>
                    <Text as='p' sx={{ mb: 2 }}>
                      <Text
                        as='span'
                        sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
                        Phone:{' '}
                      </Text>
                      {node.data.phone}
                    </Text>
                    <Text as='p' sx={{ mb: 2 }}>
                      <Text
                        as='span'
                        sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
                        Address:{' '}
                      </Text>
                      <Text
                        as='a'
                        sx={{ color: 'text' }}
                        href={getGoogleStr(node.data)}
                        target='_blank'
                        rel='noopener noreferrer'>
                        {printAddressString(node.data)}
                      </Text>
                    </Text>
                    <Box
                      sx={{
                        color: 'primary',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                      }}>
                      <Text sx={{ mb: 2 }}>
                        <Link
                          sx={{ color: 'primary' }}
                          to={`/${slugify(node.data.city, { lower: true })}`}>
                          Enter The Website
                        </Link>
                      </Text>
                      <Text>
                        <Link
                          sx={{ color: 'primary' }}
                          to={`/${slugify(node.data.city, {
                            lower: true,
                          })}/menu`}>
                          Enter The Menu
                        </Link>
                      </Text>
                    </Box>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Flex>
        ))}
      </Flex>
      <Flex
        sx={{
          background: 'white',
          justifyContent: 'space-between',
          paddingX: 3,
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
    </>
  );
};

export default VerticalSplash;
