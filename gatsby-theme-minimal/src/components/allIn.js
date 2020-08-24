/** @jsx jsx */
import { jsx, Box, Flex, Text } from 'theme-ui';
import React, { useState } from 'react';
import MenuItem from './menuItem';
import styled from 'styled-components';

import {
  Link as ScrollLink,
  Element,
  animateScroll as scroll,
} from 'react-scroll';

const AllIn = ({
  menuData,
  setModalActive,
  onBackClick,
  noBack,
  toggledSection,
}) => {
  const [withDollar, setWithDollar] = useState(false);

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

    console.log('section: ', section, 'menu: ', menu);

    const hasParentRoot = () => section.parent_id === '_root';

    return (
      <div>
        {section.name === '' ? (
          ''
        ) : (
          <>
            <Box sx={{ paddingY: [2, 4, 4 ] }}>
              <Element name={section.name}>
                <Text
                  as='h3'
                  variant='heading'
                  sx={{
                    textAlign: 'center',
                    fontSize: hasParentRoot() ? [3, 4, 5] : [2, 3, 4],
                    marginBottom: hasParentRoot() ? [3, 4, 4] : [1,2,3],
                  }}>
                  {section.name}
                </Text>
              </Element>

              <Text as="p" sx={{textAlign: 'center', mb: [3,3,4], fontSize: [1], maxWidth: '600px', margin: 'auto'}}>{section.desc}</Text>
              <Flex sx={{ flexWrap: 'wrap' }}>
                {parsedSection.childItems.map(({ item }) => {
                  return (
                    <MenuItem
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
    <Box sx={{ maxWidth: '1400px', margin: 'auto', mt: [3, 4, 5] }}>
      {renderMenu(menuData)}
    </Box>
  );
};

export default AllIn;
