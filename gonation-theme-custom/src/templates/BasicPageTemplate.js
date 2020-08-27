/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import React from 'react';

import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import SimpleHero from '../components/SimpleHero';
import Menu from '../components/Menu';

const BasicPageTemplate = ({ pageContext }) => {
  const { curPage, id } = pageContext;
  const renderHero = () => {
    if (curPage.title === 'Home') {
      return <HomeHero withShout id={id} location={pageContext.data.city} />;
    } else
      return (
        <SimpleHero
          id={id}
          location={pageContext.data.city}
          pageTitle={curPage.title}
        />
      );
  };

  const routes = pageContext.pages;

  const renderComponent = title => {
    switch (title) {
      case 'Menu':
        return <Menu id={id} poweredList='1' />;
      default:
        return '';
    }
  };
  return (
    <Layout routes={routes} pageContext={pageContext}>
      {renderHero()}
      <Box sx={{ paddingY: 5, bg: 'white' }}>
        {renderComponent(curPage.title)}
      </Box>
    </Layout>
  );
};

export default BasicPageTemplate;
