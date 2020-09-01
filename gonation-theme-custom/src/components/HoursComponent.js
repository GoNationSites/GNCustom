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

  // returns an array of all hour labels associated with the business
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

  // Takes an accumalitive hours object, and an hours label. Returns true if it already exists, else it returns false
  const hoursExists = (hours, cur) =>
    hours.filter(hour => hour.name === cur).length ? true : false;

  const getTimeBlock = label => {
    console.log('label: ', label, 'hours: ', hours);
    const days = Object.keys(hours);
    // loop through hours and filter just the ones with the same label

    // we want to return an array of objects looking like:
    // [
    //  {days: [], time: ''}
    // ]
    //
    const sameHours = days.map(day => {
      return hours[day]
        .filter(hour => hour.name === label)
        .map(hour => {
          if (hour.name === label) {
            return {
              days: [day],
              hours: `${hour.open}-${hour.close}`,
            };
          }
        })[0];
    });

    console.log('HoursComponent -> sameHours', sameHours);
    sameHours.map(hour => console.log(hour));
  };

  // Takes an array of labels, and returns the new hours Array
  const buildHoursObj = labels => {
    console.log('OK, labels are: ', labels);
    const hoursObj = labels.reduce((acc, cur, idx) => {
      if (hoursExists(acc, cur)) {
        // if hours is already in our new array, we check to see if
      } else {
        // Else, we create a new accumulator
        console.log('else', hours);
        acc.push({
          name: cur,
          timeBlock: getTimeBlock(cur),
        });
      }
      return acc;
    }, []);
    console.log('HoursComponent -> hoursObj', hoursObj);
  };

  useEffect(() => {
    if (hours) {
      const uniqueHours = getUniqueNames(hours);
      buildHoursObj(uniqueHours);
    }
  }, [hours]);

  return <div></div>;
};

export default HoursComponent;
