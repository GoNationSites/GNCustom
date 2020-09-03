/** @jsx jsx */
import { jsx, Box, Flex, Text, Image } from 'theme-ui';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

import Layout from '../../components/LayoutWoodbury';
import cloudinaryHelper from '../../helpers/cloudinaryHelper';

const About = () => {
  const [about, setAboutData] = useState({
    aboutData: null,
    isLoading: true,
  });

  const id = 'bzn-mmT_2ynbR4eGFehR2VEi8g';

  useEffect(() => {
    axios({
      url: `https://data.prod.gonation.com/profile/getname/?profile_id=${id}`,
      adapter: jsonpAdapter,
    }).then(res => {
      setAboutData({
        ...about,
        aboutData: res.data,
        isLoading: false,
      });
    });
  }, []);

  return (
    <Layout pageTitle='about'>
      <Box
        sx={{
          height: ['auto', '100vh'],
          background: '#555',
          // backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${cloudinaryHelper(
          //   'https://res.cloudinary.com/gonation/image/upload/v1598281036/sites/mix-prime/danbury-about-hero.jpg',
          //   2000
          // )})`,
          paddingX: 4,
          paddingY: 3,
          pb: [5, 3],
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
              width: ['100%', '44%', '55%'],
              textAlign: 'center',
              pt: [5, 0, 0],
              pb: [4, 0],
            }}>
            <Image
              alt='About Mix Prime'
              sx={{ maxWidth: '400px' }}
              src={cloudinaryHelper(
                'https://res.cloudinary.com/gonation/image/upload/v1599092667/sites/mix-prime/abt-new.jpg',
                900
              )}
            />
          </Box>
          <Box sx={{ flex: ['auto', 1, 1] }}>
            <Text
              as='p'
              sx={{ fontSize: [2, 3], lineHeight: 2, color: 'white' }}>
              {about.isLoading ? '' : about.aboutData.desc}
            </Text>
            <Flex sx={{ mt: [2, 3, 4] }}>
              <Box sx={{ marginRight: [2, 3, 4] }}>
                <Image
                  src='https://res.cloudinary.com/gonation/image/upload/v1599056333/sites/mix-prime/award-1.png'
                  alt='restaurant award'
                  sx={{ maxWidth: '200px' }}
                />
              </Box>
              <Box>
                <Image
                  src='https://res.cloudinary.com/gonation/image/upload/v1599056333/sites/mix-prime/award-2.png'
                  alt='restaurant award'
                  sx={{ maxWidth: '200px' }}
                />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Layout>
  );
};

export default About;
