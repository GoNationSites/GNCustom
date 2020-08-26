import React from 'react';

import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import SimpleHero from '../components/SimpleHero';

const BasicPageTemplate = ({ pageContext }) => {
  const renderHero = () => {
    const { curPage, id } = pageContext;
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
  return (
    <Layout routes={routes} pageContext={pageContext}>
      {renderHero()}
    </Layout>
  );
};

export default BasicPageTemplate;
