/** @jsx jsx */
import { jsx, Box, Text, Flex } from 'theme-ui';

import React, { useState } from 'react';

// import isNewWithinWeek from "../../helpers/isNewWithinWeek"
import Price from './price';
import Camera from './icons/Camera';

const MenuItem = ({
  item,
  type,
  withDollar,
  hasMenuImages,
  setLightbox,
  setMainSrc,
}) => {
  const mainSrc = `${item.imageBaseUrl}/${item.imagePrefix}`;

  const getMenuItemType = () => {
    switch (type) {
      case 'someCase':
      default:
        return;
    }
  };

  // When copying a menu, for some reason the string URL gets a -copy attached at the end of it. This function removes it.
  const removeImageCopy = img =>
    img.includes('copy') ? img.substring(0, img.length - 5) : img;

  const calcRaveRants = item => item.raves / (item.raves + item.rants);

  const handleCameraClick = () => {
    setLightbox({ isOpen: true, caption: item.name });
    setMainSrc(mainSrc);
  };

  const isDefault =
    item.imagePrefix !== 'gonation.data.prod/default/img-itm-cover-full.png'
      ? true
      : false;

  return (
    <>
      <Box sx={{ width: ['100%', '50%', '33.333%'] }}>
        <Box sx={{ padding: 2, paddingX: 3 }}>
          <Flex
            onClick={() => handleCameraClick()}
            sx={{ cursor: isDefault ? 'pointer' : 'unset' }}>
            <Flex sx={{ flex: 1, alignItems: 'center' }}>
              <Text
                variant='heading'
                sx={{
                  letterSpacing: [0, 1],
                  fontSize: [3],
                  paddingRight: [1, 2],
                  textTransform: 'none',
                }}>
                {item.name}
              </Text>
              {isDefault ? (
                <Box
                  tabIndex='1'
                  as='span'
                  sx={{ paddingRight: 2, cursor: 'pointer' }}>
                  <Camera />
                </Box>
              ) : (
                ''
              )}
            </Flex>
            <Box>
              <Text>
                <Price
                  withDollar={withDollar}
                  variants={item.variants}
                  toSide
                />
              </Text>
            </Box>
          </Flex>
          <Text as='p' sx={{ mt: 1, color: '#111' }}>
            {item.desc}
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default MenuItem;
