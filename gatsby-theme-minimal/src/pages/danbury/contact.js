/** @jsx jsx */
import { jsx, Box, Flex, Text, Image } from 'theme-ui';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

import Layout from '../../components/Layout';
import cloudinaryHelper from '../../helpers/cloudinaryHelper';
import ContactForm from '../../components/ContactForm'
import ContactContent from '../../components/ContactContent';

const Contact = () => {
  const id = 'bzn-vBPQfZmCTC2V2Y_BpE6SPw';

  return (
    <Layout pageTitle='contact'>
      <Box
        sx={{
          height: ['auto', '100vh'],
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${cloudinaryHelper(
            'https://res.cloudinary.com/gonation/image/upload/v1598283356/sites/mix-prime/danbury-contact.jpg',
            2000
          )})`,
          paddingX: 4,
          paddingY: 3,
        }}>
        <Flex
          sx={{
            alignItems: 'flex-start',
            justifyContent: 'center',
            height: '100%',
            flexWrap: 'wrap',
            marginTop: [2, 5, 6]
          }}>
          <Box
            sx={{
              width: ['100%', '50%'],
              textAlign: 'center',
              pt: [5, 0, 0],
              pb: [4, 0],
              px: [1, 3],
            }}>
            <ContactForm />
          </Box>
          <Box sx={{ width: ['100%', '50%'], padding: 3, color: 'white' }}>
            <ContactContent id={'bzn-vBPQfZmCTC2V2Y_BpE6SPw'} />
          </Box>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11973.293546108933!2d-73.4996516!3d41.3887829!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5ba626896057d908!2sMIX%20PRIME%20STEAKHOUSE!5e0!3m2!1sen!2sus!4v1598366973547!5m2!1sen!2sus'
            width='500px'
            height='200'
            frameborder='0'
            allowfullscreen=''
            aria-hidden='false'
            tabindex='0'></iframe>
        </Flex>
      </Box>
    </Layout>
  );
};

export default Contact;
