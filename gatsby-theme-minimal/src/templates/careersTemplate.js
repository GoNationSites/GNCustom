/** @jsx jsx */
import { jsx, Box, Flex, Image, Text } from 'theme-ui';
import React from 'react';

import cloudinaryOptimize from '../helpers/cloudinaryHelper';
import NetlifyForm from '../components/NetlifyForm';

const CareersTemplate = ({ location }) => {
  return (
    <Box sx={{ background: 'black', py: 5, pt: [0, 6] }}>
      <Box sx={{ maxWidth: '1200px', margin: 'auto' }}>
        <Flex sx={{ flexDirection: ['column', 'row'] }}>
          <Box sx={{ width: ['100%', '33%'] }}>
            <Image
              src={cloudinaryOptimize(
                'https://res.cloudinary.com/gonation/image/upload/v1599057842/sites/mix-prime/Cocktails_20.jpg',
                900
              )}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              color: 'white',
              paddingX: [2, 3, 4],
              py: [4, 4, 4],
            }}>
            <Text variant='heading' sx={{ fontSize: [3, 4, 6], mb: 3 }}>
              Careers
            </Text>
            <Text variant='heading' sx={{ mb: 2 }}>
              Join Our Team - 203-586-1788
            </Text>
            <Box sx={{ lineHeight: 1.75, mt: [3, 4, 5] }}>
              <Text
                variant='heading'
                sx={{ fontWeight: 'bold', fontSize: [3, 4, 4], mb: 3 }}>
                It Starts With You
              </Text>
              <Text as='p'>
                We believe that the greatest factor in the success of a business
                is the quality of its people. Across our family of businesses,
                we work hard to attract, hire, and train an extraordinary staff
                that is notable for its friendliness, intelligence, work ethic,
                empathy, and self-awareness. And with our wide range of
                individual businesses, we are looking for people with a variety
                of skill sets and experience. We invite you to explore our
                diverse opportunities and meet some of the individuals who bring
                gracious hospitality to life. Join Our Team
              </Text>
            </Box>
            <Box
              sx={{
                background: 'white',
                mt: 4,
                padding: [2, 3, 4],
                borderRadius: '13px',
              }}>
              <NetlifyForm location={location} />
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default CareersTemplate;
