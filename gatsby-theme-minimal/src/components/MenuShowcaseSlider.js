/** @jsx jsx */
import { jsx, Box, Image, Text } from 'theme-ui';
import React, { useEffect, useState } from 'react';

import Slider from 'react-slick';
import axios from 'axios';
import cloudinaryOptimize from '../helpers/cloudinaryHelper';

let jsonpAdapter = require('axios-jsonp');

const MenuShowcaseSlider = ({ id, pl }) => {
  const [items, setItems] = useState([]);
  const [curSlide, setCurSlide] = useState(0);
  useEffect(() => {
    axios({
      url: `https://data.prod.gonation.com/pl/get?profile_id=${id}&powerlistId=powered-list-${pl}`,
      adapter: jsonpAdapter,
    }).then(res => {
      const items = res.data[0].inventory.filter(el => {
        return (
          el.item &&
          el.item.imagePrefix !==
            'gonation.data.prod/default/img-itm-cover-full.png'
        );
      });

      setItems(items);
    });
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const handleAfterChange = idx => {
    setCurSlide(idx);
  };

  const getImage = itm => `${itm.imageBaseUrl}/${itm.imagePrefix}`;

  if (items.length) {
    return (
      <Box
        sx={{
          height: '100vh',
          background: 'grey',
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          backgroundImage: items.length
            ? `url(${cloudinaryOptimize(getImage(items[curSlide].item), 2000)})`
            : '',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          transition: 'all 2s!important',
          position: 'relative',
        }}>
        <div
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            background: 'rgba(0,0,0,.3)',
          }}></div>
        <Box
          sx={{
            alignSelf: 'center',
            color: 'white',
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
            zIndex: 2,
          }}>
          <Text
            variant='heading'
            as='h5'
            sx={{
              fontSize: [3, 4, 8],
              fontFamily: 'heading',
              fontWeight: 100,
            }}>
            40 Day Dry Aged Beef
          </Text>
        </Box>

        <Box
          sx={{
            display: ['none', 'none', 'block'],
            color: 'white',
            position: 'relative',
            zIndex: 3,
            marginRight: 3,
            marginBottom: '80px',
          }}>
          <Box
            sx={{
              padding: 2,
              transition: 'all 2s!important',
            }}>
            <Text sx={{ fontSize: 4 }}>{items[curSlide].item.name}</Text>
            <Text sx={{ fontSize: 3 }}>{items[curSlide].item.desc}</Text>
          </Box>
        </Box>

        <Box
          sx={{
            display: ['none', 'none', 'block'],
            width: '50%',
          }}>
          <Slider {...settings} afterChange={handleAfterChange}>
            {items.length &&
              items.map(({ item }) => {
                return (
                  <Box sx={{ padding: 3 }}>
                    <Image
                      alt={item.name ? item.name : 'Mix Prime'}
                      src={getImage(item)}></Image>
                  </Box>
                );
              })}
          </Slider>
        </Box>
      </Box>
    );
  }
  return <Box> </Box>;
};

export default MenuShowcaseSlider;
