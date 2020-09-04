/** @jsx jsx */
import { jsx, Flex, Box, Text } from 'theme-ui';
import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Img from 'react-cloudinary-lazy-image';

import ClickablePhone from './ClickablePhone';
import ClickableAddress from './ClickableAddress';
import SocialIcons from './SocialIcons';
import ContactForm from './ContactForm';
import HoursComponent from './HoursComponent';

const ContactPage = ({ data, location, id }) => {
  const { googleMapLink } = data;
  return (
    <Box>
      <Box>
        <iframe
          src={googleMapLink}
          width='100%'
          height='350'
          frameborder='0'
          allowfullscreen=''
          aria-hidden='false'
          tabindex='0'></iframe>
      </Box>
      <Flex sx={{ flexWrap: 'wrap', alignItems: 'stretch' }}>
        <Box
          sx={{
            flex: ['1 1 100%', '1 1 50%', '1'],
            padding: 3,
            paddingLeft: 0,
            height: '100%',
          }}>
          <Box
            sx={{
              bg: 'primary',
              padding: 3,
              color: 'white',
              borderRadius: '5px',
              height: '100%',
            }}>
            <Text variant='heading' sx={{ fontSize: 4, mb: 3 }}>
              Contact Details
            </Text>
            <Text as='h4' variant='heading' sx={{ fontSize: 3 }}>
              Address
            </Text>
            <Text as='p' sx={{ mb: 3 }}>
              <ClickableAddress
                data={data.data}
                style={{
                  color: 'white',
                  '&:hover': {
                    color: 'text',
                  },
                }}
              />
            </Text>
            <Text as='h4' variant='heading' sx={{ fontSize: 3 }}>
              Phone
            </Text>
            <Text as='p' sx={{ mb: 3 }}>
              <ClickablePhone
                tel={data.data.phone}
                style={{
                  color: 'white',
                  '&:hover': {
                    color: 'text',
                  },
                }}></ClickablePhone>
            </Text>
            <Text as='h4' variant='heading' sx={{ fontSize: 3 }}>
              Social
            </Text>
            <Text as='p' sx={{ mb: 3, maxWidth: '200px', marginRight: 'auto' }}>
              <SocialIcons
                links={data.data.links}
                slug={data.data.slug}
                push
                justifyLeft
              />
            </Text>
          </Box>
        </Box>
        <Box
          sx={{
            flex: ['1 1 100%', '1 1 50%', '1'],
            padding: 3,
            height: '100%',
          }}>
          <Box sx={{ bg: 'white', padding: 3, borderRadius: '5px' }}>
            <Text variant='heading' sx={{ fontSize: 4, mb: 3 }}>
              Get in touch
            </Text>
            <ContactForm />
          </Box>
        </Box>
        <Box
          sx={{
            flex: ['1 1 100%', '1 1 100%', '1'],
            padding: 3,
            paddingRight: 0,
            height: '100%',
          }}>
          <Box
            sx={{
              bg: 'primary',
              padding: 3,
              color: 'white',
              borderRadius: '5px',
              height: '100%',
            }}>
            <Text variant='heading' sx={{ fontSize: 4, mb: 3 }}>
              Hours
            </Text>
            <HoursComponent id={id} location={location} />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default ContactPage;
