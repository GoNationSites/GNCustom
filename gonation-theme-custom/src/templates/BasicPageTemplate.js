/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import React from 'react';
import slugify from 'slugify';

import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import SimpleHero from '../components/SimpleHero';
import Menu from '../components/Menu';
import HomeRenderer from '../components/HomeRenderer';
import Gallery from '../components/Gallery';
import ButtonRow from '../components/ButtonRow';
import ContactPage from '../components/ContactPage';

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
      case 'Gallery':
        return <Gallery id={id} />;
      case 'Home':
        return (
          <>
            <HomeRenderer data={pageContext} location={pageContext.data.city} />
            <Box sx={{ paddingY: 5 }}>
              <ButtonRow
                data={pageContext}
                location={pageContext.data.city}
                pages={['menu', 'gallery', 'contact']}
              />
            </Box>
          </>
        );
      case 'Contact':
        return (
          <ContactPage
            data={pageContext}
            location={slugify(pageContext.data.city, { lower: true })}
            id={id}
          />
        );
      default:
        return '';
    }
  };
  return (
    <Layout routes={routes} pageContext={pageContext}>
      {renderHero()}
      <Box sx={{ paddingY: 5, bg: 'background' }}>
        <Box sx={{ paddingY: 4, paddingX: 3 }}>
          <Box
            sx={{
              maxWidth: curPage.title !== 'Menu' ? '1200px' : '',
              margin: 'auto',
            }}>
            {renderComponent(curPage.title)}
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default BasicPageTemplate;
