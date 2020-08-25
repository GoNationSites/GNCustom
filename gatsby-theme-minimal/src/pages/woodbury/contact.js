/** @jsx jsx */
import { jsx, Box, Flex, Text, Image } from 'theme-ui';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

import Layout from '../../components/LayoutWoodbury';
import cloudinaryHelper from '../../helpers/cloudinaryHelper';
import ContactForm from '../../components/ContactForm'
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
              width: ['100%', '50%'],
              textAlign: 'center',
              pt: [5, 0, 0],
              pb: [4, 0],
              px: [1, 3],
            }}>
            <ContactForm />
          </Box>
          <Box sx={{ width: ['100%', '50%'], padding: 3, color: 'white' }}>
            <ContactContent id={id} />
          </Box>
        </Flex>
      </Box>
    </Layout>
  );
};

export default Contact;
