/** @jsx jsx */
import { jsx, Box, Flex, Text } from 'theme-ui';

import React, { useState, useEffect } from 'react';
import PageTransition from 'gatsby-plugin-page-transitions';
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';
import Sticky from 'react-sticky-el';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { useThemeUI } from 'theme-ui';
import { Link as ScrollLink } from 'react-scroll';

import splitSectionChildren from '../helpers/splitSectionChildren';
import FlatMenu from './FlatMenu';

const Menu = ({ id, poweredList = '1' }) => {
  const [menuData, setMenuData] = useState({});
  const [childSections, setChildSections] = useState(null);
  const [toggledSection, setToggledSection] = useState('all');

  const context = useThemeUI();
  const { theme } = context;

  useEffect(() => {
    axios({
      url: `https://data.prod.gonation.com/pl/get?profile_id=${id}&powerlistId=powered-list-${poweredList}`,
      adapter: jsonpAdapter,
    })
      .then(res => {
        setMenuData(res.data[0]);
        const { childSections } = splitSectionChildren(res.data[0]);
        setChildSections(childSections);
      })
      .catch(e => {
        console.log('an error ocurred... ', e);
      });
  }, []);

  const handleSectionClick = sec => setToggledSection(sec);

  // todo -> render 'All' title that resets back to all.
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
                  toggledSection.section &&
                  toggledSection.section.name === sec.section.name
                    ? 'underline'
                    : '',

                '&:hover': {
                  textDecoration: 'underline',
                },
                outlineColor: 'transparent!important',
              }}>
              <ScrollLink
                onClick={() => handleSectionClick(sec)}
                style={{
                  color:
                    toggledSection.section &&
                    toggledSection.section.name === sec.section.name
                      ? theme.colors.primary
                      : '#111',
                }}
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

  // todo -> render 'All' title that resets back to all.
  const Menu = () => {
    return childSections.map(sec => (
      <Box sx={{ marginX: 3, cursor: 'pointer' }}>
        <Text
          sx={{
            fontFamily: 'heading',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            color: '#111!important',
            textDecoration:
              toggledSection.section &&
              toggledSection.section.name === sec.section.name
                ? 'underline'
                : '',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}>
          <ScrollLink
            onClick={() => handleSectionClick(sec)}
            style={{
              color:
                toggledSection.section &&
                toggledSection.section.name === sec.section.name
                  ? theme.colors.primary
                  : '#111',
            }}
            to={'top'}
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

  return (
    <Box sx={{ paddingY: 5, paddingX: 2, pt: 0 }}>
      {menuData.inventory && childSections ? (
        <>
          <Box sx={{ display: ['none', 'block', 'block'] }}>
            <RenderSectionTitles />
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
                <ScrollMenu data={Menu()} />
              </Box>
            </Sticky>
          </Box>

          <FlatMenu
            // menuData={menuData}
            menuData={toggledSection === 'all' ? menuData : toggledSection}
            toggledSection={toggledSection}
          />
        </>
      ) : (
        'Loading'
      )}
    </Box>
  );
};

export default Menu;
