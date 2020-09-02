/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

const AboutText = ({ location, whiteText }) => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      allSiteData {
        edges {
          node {
            data {
              city
              desc
            }
          }
        }
      }
    }
  `);

  const site = data.allSiteData.edges.filter(
    ({ node }) => node.data.city === location
  );
  return (
    <Box sx={{ paddingY: [5, 5, 6], paddingX: [3, 3, 0] }}>
      <Text>
        <Text
          as='span'
          sx={{
            float: 'left',
            fontSize: '180px',
            lineHeight: 1,
            fontFamily: 'heading',
            mt: '-60px',
            color: whiteText ? 'white' : 'text',
          }}>
          {site[0].node.data.desc.charAt(0)}
        </Text>
        {console.log(site[0])}
        <Text
          sx={{
            fontSize: 2,
            lineHeight: 2,
            color: whiteText ? 'white' : 'lightText',
          }}>
          {site[0].node.data.desc.substring(1, site[0].node.data.desc.length)}
        </Text>
      </Text>
    </Box>
  );
};

export default AboutText;
