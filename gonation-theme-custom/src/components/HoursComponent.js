/** @jsx jsx */
import { jsx, Box, Flex, Text } from 'theme-ui';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

const HoursComponent = ({ id }) => {
  const [hours, setHours] = useState(null);
  const [structuredHours, setStructuredHours] = useState(null);

  useEffect(() => {
    axios({
      url: `https://data.prod.gonation.com/profile/getname/?profile_id=${id}`,
      adapter: jsonpAdapter,
    }).then(res => {
      setHours(res.data.hours);
    });
  }, []);

  return <div></div>;
};

export default HoursComponent;
