/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import PageTransition from 'gatsby-plugin-page-transitions';

import React from 'react';

import cloudinaryOptimize from '../../helpers/cloudinaryHelper'
import Layout from '../../components/LayoutWoodbury';
import AboutText from '../../components/AboutText'
import ContentShowcase from '../../components/ContentShowcase';
import MenuShowcaseSlider from '../../components/MenuShowcaseSlider';
import cloudinaryHelper from '../../helpers/cloudinaryHelper';

const Woodbury = () => {

  const contentShowcaseData = [
    {
      img: cloudinaryHelper(
        'https://res.cloudinary.com/gonation/image/upload/v1598359600/sites/mix-prime/woodbury-content-1.jpg',
        1200
      ),
      title: 'Title can go here',
      txt:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quis, asperiores esse.',
      btn: {
        title: 'View Menu',
        link: 'woodbury/menu',
      },
    },
    {
      img: cloudinaryHelper(
        'https://res.cloudinary.com/gonation/image/upload/v1598359600/sites/mix-prime/woodbury-content-2.jpg',
        1200
      ),
      title: 'Some other title here',
      txt:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi mollitia.',
      btn: {
        title: 'Learn More',
        link: 'woodbury/about',
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
            <AboutText location="Woodbury"></AboutText>

            <ContentShowcase  data={contentShowcaseData} />
          </Box>

          <MenuShowcaseSlider id='bzn-mmT_2ynbR4eGFehR2VEi8g' pl='1' />
        </Layout>
      </PageTransition>
    );
}

export default Woodbury;
