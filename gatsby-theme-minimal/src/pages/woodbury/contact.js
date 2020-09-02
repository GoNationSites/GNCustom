/** @jsx jsx */
import { jsx, Box, Flex, Text, Image } from 'theme-ui';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

import Layout from '../../components/LayoutWoodbury';
import cloudinaryHelper from '../../helpers/cloudinaryHelper';
import ContactForm from '../../components/ContactForm';
import ContactContent from '../../components/ContactContent';

const Contact = () => {
  //   const [about, setAboutData] = useState({
  //     aboutData: null,
  //     isLoading: true,
  //   });

  const id = 'bzn-mmT_2ynbR4eGFehR2VEi8g';

  return (
    <Layout pageTitle='contact'>
      <Box
        sx={{
          height: ['auto', '100vh'],
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${cloudinaryHelper(
            'https://res.cloudinary.com/gonation/image/upload/v1598360786/sites/mix-prime/woodbury-contact-bg.jpg',
            2000
          )})`,
          paddingX: 4,
          paddingY: 3,
        }}>
        <Flex
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            flexWrap: 'wrap',
          }}>
          <Box
            sx={{
              width: ['100%', '25%'],
              textAlign: 'center',
              pt: [5, 0, 0],
              pb: [4, 0],
              px: [1, 3],
            }}>
            <ContactForm />
          </Box>
          <Box sx={{ width: ['100%', '30%'], padding: 3, color: 'white' }}>
            <ContactContent id={id} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11948.185629371286!2d-73.2025913!3d41.5249354!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9760255230bc060a!2sMIX%20Prime%20Steakhouse%2C%20Fish%20%26%20Sushi%20Bar!5e0!3m2!1sen!2sus!4v1598367149947!5m2!1sen!2sus'
              width='500px'
              height='200'
              frameborder='0'
              allowfullscreen=''
              aria-hidden='false'
              tabindex='0'></iframe>
          </Box>
        </Flex>
      </Box>
    </Layout>
  );
};

export default Contact;
