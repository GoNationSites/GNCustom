/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import PageTransition from 'gatsby-plugin-page-transitions';

import React from 'react';

import cloudinaryOptimize from '../../helpers/cloudinaryHelper';
import Layout from '../../components/Layout';
import AboutText from '../../components/AboutText';
import ContentShowcase from '../../components/ContentShowcase';
import MenuShowcaseSlider from '../../components/MenuShowcaseSlider';
import cloudinaryHelper from '../../helpers/cloudinaryHelper';

const Danbury = () => {
  const contentShowcaseData = [
    {
      img: cloudinaryHelper(
        'https://res.cloudinary.com/gonation/image/upload/v1598039135/sites/mix-prime/showcase-1.jpg',
        1200
      ),
      title: 'Voted the best steakhouse for a reason',
      txt:
        'Taste a difference at mix prime with hand selected steaks, mouth watering sushi and craft cocktails. ',
      btn: {
        title: 'View Menu',
        link: 'danbury/menu',
      },
    },
    {
      img: cloudinaryHelper(
        'https://res.cloudinary.com/gonation/image/upload/v1598039135/sites/mix-prime/showcase-2.jpg',
        1200
      ),
      title: 'Discover what’s special',
      txt: 'Don’t miss out on our Sunday Brunch and bar specials.',
      btn: {
        title: 'Learn More',
        link: 'danbury/events',
      },
    },
  ];

  return (
    <PageTransition
      defaultStyle={{
        transition: 'left 500ms cubic-bezier(0.47, 0, 0.75, 0.72)',
        left: '100%',
        position: 'absolute',
        width: '100%',
      }}
      transitionStyles={{
        entering: { left: '0%' },
        entered: { left: '0%' },
        exiting: { left: '100%' },
      }}
      transitionTime={500}>
      <Layout pageTitle='home'>
        <Box sx={{ maxWidth: '730px', margin: 'auto' }}>
          <AboutText location='Danbury'></AboutText>

          <ContentShowcase data={contentShowcaseData} />
        </Box>

        <MenuShowcaseSlider id='bzn-vBPQfZmCTC2V2Y_BpE6SPw' pl='1' />
      </Layout>
    </PageTransition>
  );
};

export default Danbury;
