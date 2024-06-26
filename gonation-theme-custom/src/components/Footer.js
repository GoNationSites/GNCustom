/** @jsx jsx */
import { jsx, Image, Box } from 'theme-ui';
import React from 'react';

import SocialIcons from './SocialIcons';
import ClickableAddress from './ClickableAddress';
import ClickablePhone from './ClickablePhone';

const Footer = ({ routes, pageContext, footerBG }) => {
  return (
    <Box
      as='footer'
      sx={{
        padding: 4,
        backgroundColor: '#ffffff',
        backgroundImage: `url("https://www.transparenttextures.com/patterns/concrete-wall-3.png")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        textAlign: 'center',
        pb: [6, 4],
      }}>
      <Box sx={{ textAlign: 'center' }}>
        <Image
          sx={{ maxWidth: '300px' }}
          src={
            'https://res.cloudinary.com/gonation/image/upload/v1598969035/sites/red-rooster/logo-solid-white.png'
          }
        />
      </Box>
      <Box sx={{ textAlign: 'center', mb: [3, 3] }}>
        <Box sx={{ maxWidth: '300px', margin: 'auto' }}>
          <SocialIcons
            iconFill='#000'
            links={pageContext.data.links}
            slug={pageContext.data.slug}
          />
        </Box>
      </Box>
      <Box sx={{ mb: [3, 3] }}>
        <ClickableAddress
          data={pageContext.data}
          style={{ color: 'black', fontFamily: 'heading', fontSize: [3] }}
        />
      </Box>
      <Box sx={{ mb: [3, 3] }}>
        <ClickablePhone
          tel={pageContext.data.phone}
          style={{ color: 'black', fontFamily: 'heading', fontSize: 3 }}
        />
      </Box>
      <Box>
        <a
          href='https://www.gonation.com/'
          target='_blank'
          rel='noopener noreferrer'>
          <Image
            sx={{ maxWidth: ['200px', '225px'] }}
            src='https://www.gonationsites.com/GNSE/gn-sites/images/gn-power-black.svg'
            alt='GoNation'
          />
        </a>
      </Box>
    </Box>
  );
};

export default Footer;
