/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

const AboutText = () => {
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
      ({ node }) => node.data.city === 'Danbury'
    );
    console.log('sdfsa', site[0].node.data.desc.charAt(1));
    return (
      <Box sx={{ paddingY: 6 }}>
        <Text>
          <Text
            as='span'
            sx={{
              float: 'left',
              fontSize: '180px',
              lineHeight: 1,
              fontFamily: 'heading',
              mt: '-60px',
            }}>
            {site[0].node.data.desc.charAt(1)}
          </Text>
          <Text sx={{ fontSize: 2, lineHeight: 2, color: 'lightText' }}>
            {site[0].node.data.desc.substring(2, site[0].node.data.desc.length)}
          </Text>
        </Text>
      </Box>
    );
}

export default AboutText;
