/** @jsx jsx */
import { jsx, Box, Flex, Text } from 'theme-ui';
import React, { useState } from 'react';
import MenuItem from './MenuItem';

import {
  Link as ScrollLink,
  Element,
  animateScroll as scroll,
} from 'react-scroll';
import Lightbox from 'react-image-lightbox';

const FlatMenu = ({
  menuData,
  setModalActive,
  onBackClick,
  noBack,
  toggledSection,
}) => {
  const [withDollar, setWithDollar] = useState(false);
  const [lb, setLightbox] = useState({
    isOpen: false,
    caption: '',
  });
  const [mainSrc, setMainSrc] = useState('');

  console.log('inside of flat menu');

  // Takes Nested sections and and gets the nested child items and child sections
  const splitSectionChildren = section => {
    return section.inventory.reduce(
      (acc, curr) => {
        if ('item' in curr) {
          acc.childItems.push(curr);
        } else if ('section' in curr) {
          acc.childSections.push(curr);
        }
        return acc;
      },
      { childItems: [], childSections: [] }
    );
  };

  // Recursively loop through menus and nested menus
  const renderMenu = (menu, nested, idx) => {
    const { section } = menu;
    const parsedSection = splitSectionChildren(menu);

    const hasParentRoot = () => section.parent_id === '_root';

    return (
      <div>
        {section.name === '' ? (
          ''
        ) : (
          <>
            <Box sx={{ paddingY: [2, 4, 4] }}>
              <Element name={section.name}>
                <Text
                  as='h3'
                  variant='heading'
                  sx={{
                    textAlign: 'center',
                    fontSize: hasParentRoot() ? [3, 4, 5] : [3, 4, 5],
                    marginBottom: hasParentRoot() ? [3, 4, 4] : [3, 4, 4],
                    color: 'primary',
                    letterSpacing: '2px',
                    fontWeight: 'bold',
                  }}>
                  {section.name}
                </Text>
              </Element>

              <Text
                as='p'
                sx={{
                  textAlign: 'center',
                  mb: [3, 3, 4],
                  fontSize: [1],
                  maxWidth: '600px',
                  margin: 'auto',
                }}>
                {section.desc}
              </Text>
              <Flex sx={{ flexWrap: 'wrap' }}>
                {parsedSection.childItems.map(({ item }) => {
                  return (
                    <MenuItem
                      setLightbox={setLightbox}
                      setMainSrc={setMainSrc}
                      type={'default'}
                      withDollar={withDollar}
                      item={item}
                      // setModalActive={setModalActive}
                    />
                  );
                })}
              </Flex>
            </Box>
          </>
        )}

        {/* child sections */}
        {parsedSection.childSections.map((childSection, idx) =>
          renderMenu(childSection, true, idx)
        )}
      </div>
    );
  };
  return (
    <Element name='top'>
      <Box sx={{ maxWidth: '1400px', margin: 'auto', mt: [3, 4, 5] }}>
        {lb.isOpen ? (
          <Lightbox
            imageCaption={
              <Text sx={{ textAlign: 'center' }}>{lb.caption}</Text>
            }
            mainSrc={mainSrc}
            onCloseRequest={() => setLightbox({ isOpen: false })}
          />
        ) : (
          ''
        )}
        {renderMenu(menuData)}
      </Box>
    </Element>
  );
};

export default FlatMenu;
