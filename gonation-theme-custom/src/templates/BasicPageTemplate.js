import React from 'react';

import Layout from '../components/Layout';

const BasicPageTemplate = ({ pageContext }) => {
  const routes = pageContext.pages;
  return (
    <Layout routes={routes} pageContext={pageContext}>
      Basic Pagee!!!
    </Layout>
  );
};

export default BasicPageTemplate;
