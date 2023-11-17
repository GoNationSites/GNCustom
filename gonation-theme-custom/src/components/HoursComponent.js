/** @jsx jsx */
import { jsx, Box, Flex, Text } from 'theme-ui';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

const HoursComponent = ({ id, location }) => {
  const [hours, setHours] = useState(null);
  const [structuredHours, setStructuredHours] = useState(null);

  useEffect(() => {
    axios({
      url: `https://data.prod.gonation.com/profile/getname/?profile_id=${id}`,
      adapter: jsonpAdapter,
    }).then((res) => {
      setHours(res.data.hours);
    });
  }, []);

  // returns an array of all hour labels associated with the business
  const getUniqueNames = (hours) => {
    const titles = Object.keys(hours).map((day) => {
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
    hours.filter((hour) => hour.name === cur).length ? true : false;

  const getTimeBlock = (label) => {
    const days = Object.keys(hours);

    const sameHours = days.map((day) => {
      return hours[day]
        .filter((hour) => hour.name === label)
        .map((hour) => {
          if (hour.name === label) {
            return {
              day: day,
              hours: `${hour.open}-${hour.close}`,
            };
          }
        })[0];
    });

    let formattedHours = [];
    sameHours.map((hour, idx) => {
      if (idx === 0) {
        formattedHours.push({
          day: [hour.day],
          hour: hour.hours,
        });
      } else {
        const curHours = hour;

        if (formattedHours.filter((el) => el.hour === curHours).length) {
          formattedHours[0].day.push(hour.day);
        } else {
          console.log('in the else');
          if (hours.day) {
            formattedHours.push({
              day: [hour.day],
              hour: hour.hours,
            });
          }
        }
        console.log(hour);
      }
    });
    console.log('formatted hours: ', formattedHours);
    return formattedHours[0];
  };

  // Takes an array of labels, and returns the new hours Array
  const buildHoursObj = (labels) => {
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
    setStructuredHours(hoursObj);
    console.log('HoursComponent -> hoursObj', hoursObj);
  };

  useEffect(() => {
    if (hours) {
      const uniqueHours = getUniqueNames(hours);
      buildHoursObj(uniqueHours);
    }
  }, [hours]);

  const displayDays = (block) => {
    const days = block.timeBlock.day;
    console.log('days are::::', days);
    if (days.length === 7) {
      return 'Every Day';
    }
    if (days.includes('sat') && days.includes('sun')) {
      return 'Every Weekend';
    }
    return block.timeBlock.day.map((day) => <span>{day}</span>);
  };

  const renderRoosterHours = () => {
    if (location === 'newtown') {
      return (
        <>
          <Box sx={{ pb: 3 }}>
            <Text as='h3' variant='heading'>
              Hours Of Operation
            </Text>
            <Text as='h3' variant='heading'>
              Monday - Sunday
            </Text>
            <Text as='p'>11:30 AM - TIL</Text>
          </Box>
          <Box sx={{ pb: 3 }}>
            <Text as='h3' variant='heading'>
              Kitchen Hours
            </Text>
            <Text as='h3' variant='heading'>
              Monday - Sunday
            </Text>
            <Text as='p'>11:00 AM - 10:00 PM</Text>
          </Box>
          <Box sx={{ pb: 3 }}>
            <Text as='h3' variant='heading'>
              Brunch Hours
            </Text>
            <Text as='h3' variant='heading'>
              Sunday
            </Text>
            <Text as='p'>11:00 AM - 3:00 PM</Text>
          </Box>
        </>
      );
    }

    if (location === 'ridgefield') {
      return (
        <>
          <Box sx={{ pb: 3 }}>
            <Text as='h2' variant='heading' sx={{ mb: 3 }}>
              Kitchen
            </Text>
            <Text as='h3' variant='heading'>
              Monday, Tuesday, Wednesday, Thursday
            </Text>
            <Text sx={{ mb: 3 }} as='p'>
              11:30 AM - 10:00 PM
            </Text>

            <Text as='h3' variant='heading'>
              Friday, Saturday
            </Text>
            <Text sx={{ mb: 3 }} as='p'>
              11:30 AM - 11:00 PM
            </Text>

            <Text as='h3' variant='heading'>
              Sunday
            </Text>
            <Text sx={{ mb: 3 }} as='p'>
              11:30 AM - 9:00 PM
            </Text>
          </Box>

          <Box sx={{ pb: 3 }}>
            <Text as='h2' variant='heading' sx={{ mb: 3 }}>
              Bar
            </Text>
            <Text as='h3' variant='heading'>
              Monday, Tuesday, Wednesday, Sunday
            </Text>
            <Text sx={{ mb: 3 }} as='p'>
              11:30 AM - 11:00 PM
            </Text>

            <Text as='h3' variant='heading'>
              Thursday
            </Text>
            <Text sx={{ mb: 3 }} as='p'>
              11:30 AM - 9:00 PM
            </Text>

            <Text as='h3' variant='heading'>
              Friday, Saturday
            </Text>
            <Text sx={{ mb: 3 }} as='p'>
              11:30 AM - 2:00 AM
            </Text>
          </Box>
        </>
      );
    }

    if (location === 'wilton') {
      return (
        <>
          <Box sx={{ pb: 3 }}>
            <Text as='h3' variant='heading'>
              Monday, Tuesday, Wednesday, Thursday, Sunday
            </Text>
            <Text as='p'>11:00 AM - 10:00 PM</Text>
          </Box>
          <Box>
            <Text as='h3' variant='heading'>
              Friday, Saturday
            </Text>
            <Text as='p'>11:00 AM - 10:00 PM</Text>
          </Box>
        </>
      );
    }
  };

  const renderHours = () => {
    return renderRoosterHours();
  };

  return <div>{structuredHours ? renderHours() : ''}</div>;
};

export default HoursComponent;
