/** @jsx jsx */
import { jsx, Box, Text, Flex, Image } from 'theme-ui'
import React, {useState, useEffect, useRef} from 'react';
import {
  Link as ScrollLink,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';

import AwesomeSlider from '../components/Slider/AwesomeSlider'
import cloudinaryHelper from '../helpers/cloudinaryHelper'
import LocationBoxes from '../components/LocationBoxes'

const Index = ({data}) => {
    const [slides, setSlides] = useState([])
    const refContainer = useRef();

    useEffect(() => {
        const slidesMobile = [
          cloudinaryHelper(
            'https://res.cloudinary.com/gonation/image/upload/v1597940531/sites/mix-prime/mobile-slide-1.jpg',
            900
          ),
          cloudinaryHelper(
            'https://res.cloudinary.com/gonation/image/upload/v1597940532/sites/mix-prime/mobile-slide-2.jpg',
            900
          ),
          cloudinaryHelper(
            'https://res.cloudinary.com/gonation/image/upload/v1597940533/sites/mix-prime/mobile-slide-3.jpg',
            900
          ),
          cloudinaryHelper(
            'https://res.cloudinary.com/gonation/image/upload/v1597940532/sites/mix-prime/mobile-slide-4.jpg',
            900
          ),
          cloudinaryHelper(
            'https://res.cloudinary.com/gonation/image/upload/v1597940532/sites/mix-prime/mobile-slide-5.jpg',
            900
          ),
        ];

        setSlides(slidesMobile)

    }, [])

    const logo =
      'https://res.cloudinary.com/gonation/image/upload/v1597941857/sites/mix-prime/logo-white.png';
    
    return (
      <>
        <Flex
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 'calc(100vh - 200px)',
            flexDirection: 'column',
          }}>
          <Box
            sx={{
              background: 'rgba(0,0,0,.3)',
              position: 'absolute',
              left: 0,
              top: 0,
              zIndex: 1,
              width: '100%',
              height: 'calc(100vh - 200px)',
            }}></Box>
          <Box
            sx={{
              position: 'absolute',
              zIndex: 0,
              left: 0,
              top: 0,
              width: '100%',
            }}>
            <AwesomeSlider slides={slides} />
          </Box>

          <Box sx={{ zIndex: 2 }}>
            <Image src={logo} alt='Mixed Prime'></Image>
          </Box>
        </Flex>
        <ScrollLink spy={true} smooth={true} duration={500} to='bottom'>
          <Box
            sx={{ paddingY: 4, background: 'f7f7f7' }}>
            <Text variant='heading' sx={{ textAlign: 'center', fontSize: 4, color: 'text' }}>
              Choose A Location
            </Text>
          </Box>
        </ScrollLink>
        <Box>
          <LocationBoxes businesses={data.allSiteData.edges} />
        </Box>
        <Element name="bottom">
          <div ref={refContainer}></div>
        </Element>
      </>
    );
}

export default Index;

export const query = graphql`
  {
    allSiteData {
      edges {
        node {
          data {
            city
            name
            avatar {
              imageBaseUrl
              imagePrefix
              isDefault
            }
            cover {
              imageBaseUrl
              imagePrefix
              isDefault
            }
            desc
            hours {
              fri {
                close
                name
                open
              }
              mon {
                close
                name
                open
              }
              sat {
                close
                name
                open
              }
              sun {
                close
                name
                open
              }
              thu {
                close
                name
                open
              }
              tue {
                close
                name
                open
              }
              wed {
                close
                name
                open
              }
            }
            links {
              facebook
              instagram
              twitter
              website
              youtube
            }
            loc
            phone
            slug
            state
            street
            zip
          }
        }
      }
    }
  }
`;