/** @jsx jsx */
import { jsx, Box, Flex, Text, Image } from 'theme-ui'
import React from 'react';
import {useStaticQuery, Link} from 'gatsby'

import SocialIcons from './SocialIcons'
import NavMeta from './NavMeta';
import cloudinaryOptimize from '../helpers/cloudinaryHelper'

const Footer = ({location="Danbury"}) => {
    const data = useStaticQuery(graphql`
      query FooterQuery {
        allSiteData {
          edges {
            node {
              data {
                city
                name
                phone
                slug
                state
                street
                zip
                links {
                  facebook
                  instagram
                  twitter
                }
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
      <Box
        as='footer'
        sx={{
          minHeight: '600px',
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${cloudinaryOptimize(
            'https://res.cloudinary.com/gonation/image/upload/v1598110795/sites/mix-prime/footer.jpg',
            2000
          )})`,
          backgroundSize: 'cover',
        }}>
        dsfsa
        <Box sx={{ textAlign: 'center' }}>
          <Image
            sx={{ maxWidth: '500px' }}
            src={
              'https://res.cloudinary.com/gonation/image/upload/v1597941857/sites/mix-prime/logo-white.png'
            }></Image>
        </Box>
        <Box>
          <SocialIcons
            links={site[0].node.data.links}
            slug={site[0].node.data.slug}></SocialIcons>
          <Box
            sx={{
              textAlign: 'center',
              color: 'white',
              mt: 4,
            }}>
            <NavMeta isFooter data={site} />
          </Box>
        </Box>
      </Box>
    );
}

export default Footer;
