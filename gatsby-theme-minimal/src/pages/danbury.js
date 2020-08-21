/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import PageTransition from 'gatsby-plugin-page-transitions';

import React from 'react';

import Layout from '../components/Layout'
import AboutText from '../components/AboutText'

const Danbury = () => {
    return (
      <Layout>
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
              <Box sx={{maxWidth: '700px', margin: 'auto'}}>
                 <AboutText></AboutText>
              </Box>
          
        </PageTransition>
      </Layout>
    );
}

export default Danbury;
