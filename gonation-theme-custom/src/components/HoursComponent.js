/** @jsx jsx */
import { jsx, Box, Flex, Text } from 'theme-ui';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

const HoursComponent = ({ id }) => {
  const [hours, setHours] = useState(null);
  const [structuredHours, setStructuredHours] = useState(null);
  const [hourLabels, setHourLabels] = useState(null);

  useEffect(() => {
    axios({
      url: `https://data.prod.gonation.com/profile/getname/?profile_id=${id}`,
      adapter: jsonpAdapter,
    }).then(res => {
      setHours(res.data.hours);
    });
  }, []);

  const getUniqueNames = hours => {
    const titles = Object.keys(hours).map(day => {
      const uniqueNames = hours[day].reduce((acc, cur) => {
        if (!acc.includes(cur.name)) {
          return [...acc, cur.name];
        }
      }, []);
      return [...uniqueNames];
    });
    return titles[0];
  };

  const buildHoursObj = labels => {};

  useEffect(() => {
    if (hours) {
      const uniqueHours = getUniqueNames(hours);
      buildHoursObj(uniqueHours);

      console.log('HoursComponent -> uniqueHours', uniqueHours);
    }
  }, [hours]);

  return <div></div>;
};

export default HoursComponent;
