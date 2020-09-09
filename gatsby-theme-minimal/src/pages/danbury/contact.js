/** @jsx jsx */
import { jsx, Box, Flex, Text, Image } from 'theme-ui';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

import Layout from '../../components/Layout';
import cloudinaryHelper from '../../helpers/cloudinaryHelper';
import ContactForm from '../../components/ContactForm';
import ContactContent from '../../components/ContactContent';
import Hours from '../../components/Hours';

const Contact = () => {
  const [hours, setHours] = useState(null);
  const id = 'bzn-vBPQfZmCTC2V2Y_BpE6SPw';

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
          height: ['auto', 'auto'],
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${cloudinaryHelper(
            'https://res.cloudinary.com/gonation/image/upload/v1599683617/sites/mix-prime/danbury-contact.jpg',
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
            marginTop: [2, 5, 6],
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
            <ContactForm />
          </Box>
          <Box sx={{ width: ['100%', '30%'], padding: 3, color: 'white' }}>
            <ContactContent id={'bzn-vBPQfZmCTC2V2Y_BpE6SPw'} />
          </Box>
          <Box sx={{ flex: 1, display: ['none', 'block'] }}>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11973.293546108933!2d-73.4996516!3d41.3887829!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5ba626896057d908!2sMIX%20PRIME%20STEAKHOUSE!5e0!3m2!1sen!2sus!4v1598366973547!5m2!1sen!2sus'
              height='400'
              frameborder='0'
              allowfullscreen=''
              aria-hidden='false'
              width='100%'
              style={{ width: '100%!important' }}
              tabindex='0'></iframe>
          </Box>
          <Box sx={{ width: '100%' }}>{hours && <Hours hours={hours} />}</Box>
        </Flex>
      </Box>
    </Layout>
  );
};

export default Contact;
