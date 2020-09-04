/** @jsx jsx */
import { jsx, Box, Flex, Text } from 'theme-ui';

import React, { useState, useEffect } from 'react';
import PageTransition from 'gatsby-plugin-page-transitions';
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';
import Sticky from 'react-sticky-el';
import ScrollMenu from 'react-horizontal-scrolling-menu';

import * as Scroll from 'react-scroll';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import splitSectionChildren from '../helpers/splitSectionChildren';
import FlatMenu from './FlatMenu';

const Menu = ({ id, poweredList = '1' }) => {
  const [menuData, setMenuData] = useState({});
  const [childSections, setChildSections] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [toggledSection, setToggledSection] = useState('all');

  console.log('mounted...');

  useEffect(() => {
    console.log('in effect');
    axios({
      url: `https://data.prod.gonation.com/pl/get?profile_id=${id}&powerlistId=powered-list-${poweredList}`,
      adapter: jsonpAdapter,
    })
      .then(res => {
        console.log('Making a request: ', res.data);
        setMenuData(res.data[0]);
        const { childSections } = splitSectionChildren(res.data[0]);
        setChildSections(childSections);
      })
      .catch(e => {
        console.log('an error occured... ', e);
      });
  }, []);

  const handleSectionClick = sec => {
    console.log('handling section click...');
    setToggledSection(sec);
  };

  const RenderSectionTitles = () => (
    <Sticky stickyStyle={{ zIndex: 999, top: '0' }}>
      <Flex
        sx={{
          justifyContent: 'center',
          paddingY: 3,
          background: 'white',
          borderBottom: '1px solid #eee',
        }}>
        {childSections.map(sec => (
          <Box key={sec.section.name} sx={{ marginX: 3, cursor: 'pointer' }}>
            <Text
              sx={{
                fontFamily: 'heading',
                textTransform: 'uppercase',
                letterSpacing: '3px',
                color: '#111!important',
                textDecoration:
                  toggledSection === sec.section.name ? 'underline' : '',
                '&:hover': {
                  textDecoration: 'underline',
                },
                outlineColor: 'transparent!important',
              }}>
              <ScrollLink
                onClick={() => handleSectionClick(sec)}
                style={{ color: '#111' }}
                to={'top'}
                spy={true}
                smooth={true}
                duration={500}
                offset={-125}>
                {sec.section.name}
              </ScrollLink>
            </Text>
          </Box>
        ))}
      </Flex>
    </Sticky>
  );

  const Menu = () => {
    return childSections.map(sec => (
      <Box
        sx={{ marginX: 3, cursor: 'pointer' }}
        // onClick={() => setToggledSection(sec.section.name)}
      >
        <Text
          sx={{
            fontFamily: 'heading',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            color: '#111!important',
            textDecoration:
              toggledSection === sec.section.name ? 'underline' : '',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}>
          <ScrollLink
            style={{ color: '#111' }}
            to={sec.section.name}
            spy={true}
            smooth={true}
            duration={500}
            offset={-125}>
            {sec.section.name}
          </ScrollLink>
        </Text>
      </Box>
    ));
  };

  const handleSelect = () => {
    console.log('damn');
  };

  return (
    <Box sx={{ paddingY: 5, paddingX: 2, pt: 0 }}>
      {menuData.inventory && childSections ? (
        <>
          {console.log('in render method')}
          <Box sx={{ display: ['none', 'block', 'block'] }}>
            <RenderSectionTitles></RenderSectionTitles>
          </Box>
          <Box sx={{ display: ['block', 'none', 'none'] }}>
            <Sticky stickyStyle={{ zIndex: 999, top: '0' }}>
              <Box
                sx={{
                  justifyContent: 'center',
                  paddingY: 3,
                  background: 'white',
                  borderBottom: '1px solid #eee',
                }}>
                <ScrollMenu data={Menu()}></ScrollMenu>
              </Box>
            </Sticky>
          </Box>
          {console.log(
            'menu data looks like: ',
            menuData,
            'section data looks like : ',
            toggledSection
          )}

          <FlatMenu
            // menuData={menuData}
            menuData={toggledSection === 'all' ? menuData : toggledSection}
            toggledSection={toggledSection}></FlatMenu>
        </>
      ) : (
        'Loading'
      )}
    </Box>
  );
};

export default Menu;
