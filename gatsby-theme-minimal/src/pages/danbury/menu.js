/** @jsx jsx */
import { jsx, Box, Flex, Text } from 'theme-ui';

import React, { useState, useEffect } from 'react';
import PageTransition from 'gatsby-plugin-page-transitions';
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';
import Sticky from 'react-sticky-el';

import Layout from '../../components/Layout';
import splitSectionChildren from '../../helpers/splitSectionChildren';
import AllInOnce from '../../components/allIn';

const Menu = () => {
  const [menuData, setMenuData] = useState({});
  const [childSections, setChildSections] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [toggledSection, setToggledSection] = useState('all');

  useEffect(() => {
    axios({
      url: `https://data.prod.gonation.com/pl/get?profile_id=bzn-vBPQfZmCTC2V2Y_BpE6SPw&powerlistId=powered-list-2`,
      adapter: jsonpAdapter,
    }).then(res => {
      setMenuData(res.data[0]);
      const { childSections } = splitSectionChildren(res.data[0]);
      setChildSections(childSections);
    });
  }, []);

  const RenderSectionTitles = () => (
    <Sticky stickyStyle={{ zIndex: 999, top: '42px'}}>
      <Flex  sx={{ justifyContent: 'center', paddingY: 3, background: 'white', borderBottom: '1px solid #eee' }}>
        {childSections.map(sec => (
          <Box sx={{ marginX: 3, cursor: 'pointer' }}>
            <Text
              onClick={() => setToggledSection(sec.section.name)}
              sx={{
                fontFamily: 'heading',
                textTransform: 'uppercase',
                letterSpacing: '3px',
                textDecoration:
                  toggledSection === sec.section.name ? 'underline' : '',
                "&:hover": {
                  textDecoration: 'underline'
                }
                
              }}>
              {sec.section.name}
            </Text>
          </Box>
        ))}
      </Flex>
    </Sticky>
  );

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
      <Layout pageTitle='menu'>
        <Box sx={{ paddingY: 5, paddingX: 2 }}>
          {menuData.inventory && childSections ? (
            <>
              <RenderSectionTitles></RenderSectionTitles>

              <AllInOnce
                menuData={menuData}
                toggledSection={toggledSection}
                noBack
              />
            </>
          ) : (
            ''
          )}
        </Box>
      </Layout>
    </PageTransition>
  );
};

export default Menu;
