import React from 'react';

import Layout from '../../components/Layout';
import PartiesTemplate from '../../templates/partiesTemplate';

const Parties = () => {
  return (
    <Layout pageTitle='parties'>
      <PartiesTemplate location='danbury' />
    </Layout>
  );
};

export default Parties;
