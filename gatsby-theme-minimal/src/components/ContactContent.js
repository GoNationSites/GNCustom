/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

import SocialIcons from './SocialIcons';
import FullAddress from './FullAddress'
import FullPhone from './FullPhone';

const ContactContent = ({ id }) => {
  const [contactData, setContactData] = useState({
    contactData: null,
    isLoading: true,
  });

  useEffect(() => {
    axios({
      url: `https://data.prod.gonation.com/profile/getname/?profile_id=${id}`,
      adapter: jsonpAdapter,
    }).then(res => {
      setContactData({
        ...contactData,
        contactData: res.data,
        isLoading: false,
      });
    });
  }, []);

  const renderData = () => (
    <Box>
      <Box sx={{ mb: [3, 5] }}>
        <Text
          as='h4'
          variant='heading'
          sx={{ fontSize: [3, 4, 5], mb: [1, 2] }}>
          Address:
        </Text>
        <FullAddress data={contactData.contactData}></FullAddress>
      </Box>

      <Box sx={{ mb: [3, 5] }}>
        <Text
          as='h4'
          variant='heading'
          sx={{ fontSize: [3, 4, 5], mb: [1, 2] }}>
          Phone:
        </Text>
        <FullPhone data={contactData.contactData}></FullPhone>
      </Box>

      <Box sx={{ mb: [3, 5] }}>
        <Text
          as='h4'
          variant='heading'
          sx={{ fontSize: [3, 4, 5], mb: [1, 2] }}>
          Social:
        </Text>
        <SocialIcons
          justifyLeft
          links={contactData.contactData.links}
          slug={contactData.contactData.slug}></SocialIcons>
      </Box>
    </Box>
  );

  return !contactData.isLoading ? renderData() : ''


};

export default ContactContent;
