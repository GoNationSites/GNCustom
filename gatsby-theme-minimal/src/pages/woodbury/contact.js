/** @jsx jsx */
import { jsx, Box, Flex, Text, Image } from 'theme-ui';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

import Layout from '../../components/LayoutWoodbury';
import cloudinaryHelper from '../../helpers/cloudinaryHelper';
import ContactForm from '../../components/ContactForm';
import ContactContent from '../../components/ContactContent';
import Hours from '../../components/Hours';

const Contact = () => {
  const [hours, setHours] = useState(null);
  //   const [about, setAboutData] = useState({
  //     aboutData: null,
  //     isLoading: true,
  //   });

  const id = 'bzn-mmT_2ynbR4eGFehR2VEi8g';

  useEffect(() => {
    axios({
      url: `https://data.prod.gonation.com/profile/getname/?profile_id=${id}`,
      adapter: jsonpAdapter,
    }).then(res => {
      setHours(res.data.hours);
    });
  }, []);

  return (
    <Layout pageTitle='contact'>
      <Box
        sx={{
          height: ['auto'],
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${cloudinaryHelper(
            'https://res.cloudinary.com/gonation/image/upload/v1599684296/sites/mix-prime/woodbury-contact-bg.jpg',
            2000
          )})`,
          paddingX: 4,
          paddingY: 3,
          pt: [5, 6],
        }}>
        <Flex
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            flexWrap: 'wrap',
            flexDirection: ['column', 'row'],
            alignItems: 'center',
          }}>
          <Box
            sx={{
              width: ['100%', '25%'],
              textAlign: 'center',
              pt: [5, 0, 0],
              pb: [4, 0],
              px: [1, 3],
            }}>
            <ContactForm location='Woodbury' />
          </Box>
          <Box sx={{ width: ['100%', '30%'], padding: 3, color: 'white' }}>
            <ContactContent id={id} />
          </Box>
          <Box sx={{ flex: 1, display: ['none', 'block'] }}>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11948.185629371286!2d-73.2025913!3d41.5249354!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9760255230bc060a!2sMIX%20Prime%20Steakhouse%2C%20Fish%20%26%20Sushi%20Bar!5e0!3m2!1sen!2sus!4v1598367149947!5m2!1sen!2sus'
              width='500px'
              height='400'
              frameborder='0'
              allowfullscreen=''
              aria-hidden='false'
              width='100%'
              style={{ width: '100%' }}
              tabindex='0'></iframe>
          </Box>
        </Flex>
        <Box sx={{ width: '100%' }}>{hours && <Hours hours={hours} />}</Box>
      </Box>
    </Layout>
  );
};

export default Contact;
