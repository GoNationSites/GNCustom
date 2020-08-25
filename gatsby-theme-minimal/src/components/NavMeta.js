/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui'
import React from 'react';

import printAddress from '../helpers/printAddress'
import getGoogleStr from '../helpers/getGoogleStr'

const NavMeta = ({data, isFooter}) => {
    const site = data[0].node.data

    if(isFooter) {
      return (
        <Box sx={{ fontFamily: 'heading' }}>
          <Text sx={{ fontSize: [2, 3, 4], mb: 2 }}>
            Address:
            <a
              target='_blank'
              rel='noreferrer noopener'
              href={getGoogleStr(
                site.name,
                site.street,
                site.city,
                site.zip,
                site.state
              )}>
              {printAddress(site)}
            </a>
          </Text>
          <Text sx={{ fontSize: [2, 3, 4] }}>
            <a href={`tel:${site.phone}`}>{site.phone}</a>
          </Text>
        </Box>
      );
    }
    return (
      <Box>
        <Text sx={{ fontSize: 1, mb: 2 }}>
          Address:{' '}
          <a
            target='_blank'
            rel='noreferrer noopener'
            href={getGoogleStr(
              site.name,
              site.street,
              site.city,
              site.zip,
              site.state
            )}>
            {printAddress(site)}
          </a>
        </Text>
        <Text sx={{ fontSize: 1 }}>
          Phone:
          <a href={`tel:${site.phone}`}>{site.phone}</a>
        </Text>
      </Box>
    );
}

export default NavMeta;
