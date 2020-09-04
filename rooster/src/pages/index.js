/** @jsx jsx */
import { jsx, Flex, Box, Text, Image, Button } from 'theme-ui';
import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';

import MobileRevealSplash from '../components/MobileRevealSplash';
import VerticalSplash from '../components/VerticalSplash';

const Index = ({ data }) => {
  const [activeLocation, setActiveLocation] = useState(null);
  const locations = data.allSiteData.edges;

  return (
    <>
      <Box
        sx={{
          display: ['block', 'none', 'none'],
          backgroundColor: '#ffffff',
          backgroundImage: `url("https://www.transparenttextures.com/patterns/concrete-wall-3.png")`,
          height: '100vh',
        }}>
        <MobileRevealSplash
          locations={locations}
          logo={
            'https://res.cloudinary.com/gonation/image/upload/v1598377918/sites/red-rooster/logo-black.png'
          }
        />
      </Box>
      <Box sx={{ display: ['none', 'block', 'block'] }}>
        <VerticalSplash locations={locations} />
      </Box>
    </>
  );
};

export default Index;

export const query = graphql`
  {
    allSiteData {
      edges {
        node {
          data {
            avatar {
              imageBaseUrl
              imagePrefix
            }
            city
            cover {
              imageBaseUrl
              imagePrefix
            }
            desc
            links {
              facebook
              instagram
              twitter
              website
            }
            name
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
