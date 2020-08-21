/** @jsx jsx */
import { jsx, Box, Text, Flex, Button } from 'theme-ui';
import React, { useState } from 'react';
import {Link} from 'gatsby'
import slugify from 'slugify'

import Down from './icons/Down';
import Up from './icons/Up';
import Phone from './icons/Phone';
import Pin from './icons/Pin';

import printAddress from '../helpers/printAddress';

const LocationBoxes = ({ businesses, isMobile }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const isOpen = i => activeIndex === i


  return businesses.map(({ node }, idx) => (
    <Flex
      key={node.data.name}
      onClick={() => setActiveIndex(idx)}
      sx={{
        background: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),  url(${node.data.avatar.imageBaseUrl}/${node.data.avatar.imagePrefix})`,
        height: isOpen(idx)
          ? ['300px', '300px', '50%']
          : ['125px', '125px', '50%'],
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        transition: 'height .3s ease-in',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: 3,
        justifyContent: 'space-between',
        flex: '1',
      }}>
      <Box>
        <Text
          as='h4'
          variant='heading'
          sx={{
            color: 'white',
            fontWeight: '100',
            letterSpacing: '2px',
            fontSize: 3,
          }}>
          {node.data.city}
        </Text>
      </Box>
      <Box>{isOpen(idx) ? <Down /> : <Up />}</Box>
      {isOpen(idx) || !isMobile ? (
        <Flex sx={{ width: '100%', color: 'white', flexWrap: 'wrap' }}>
          <Flex sx={{ alignItems: 'center', width: '50%', paddingY: 3 }}>
            <Phone />
            <a href={`tel:${node.data.phone}`}>
              <Text sx={{ fontSize: 1 }}>{node.data.phone}</Text>
            </a>
          </Flex>

          <Flex sx={{ alignItems: 'center', width: '50%', paddingY: 3 }}>
            <Pin />
            <Text sx={{ fontSize: 1 }}>{printAddress(node.data)}</Text>
          </Flex>

          <Flex sx={{ alignItems: 'center', width: '100%', paddingY: 3 }}>
            <Link
              to={`/${slugify(node.data.city, { lower: true })}`}
              sx={{ display: 'block', width: '100%' }}>
              {console.log(slugify(node.data.city), { lower: true })}
              <Button variant='white'>View Website</Button>
            </Link>
          </Flex>

          <Flex sx={{ alignItems: 'center', width: '100%', paddingY: 3 }}>
            <Link
              to={`/${node.data.city}/menu`}
              sx={{ display: 'block', width: '100%' }}>
              <Button variant='white'>View Menu</Button>
            </Link>
          </Flex>
        </Flex>
      ) : (
        ''
      )}
    </Flex>
  ));
};

export default LocationBoxes;
