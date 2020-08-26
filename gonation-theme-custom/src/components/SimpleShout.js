/** @jsx jsx */
import { jsx, Box, Flex, Text, Image } from 'theme-ui';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

const SimpleShout = ({ id }) => {
  const [shout, setShout] = useState(null);

  useEffect(() => {
    axios({
      url: `https://data.prod.gonation.com/profile/shoutsnew/${id}`,
      adapter: jsonpAdapter,
    })
      .then(res => {
        setShout(res.data);
      })
      .catch(e => console.log('e => ', e));
  }, []);

  if (shout && shout.shout) {
    return (
      <Box
        sx={{
          color: 'white',
          background: '#0000000f',
          paddingY: 4,
          paddingX: [0, 4],
          maxWidth: '600px',
        }}>
        <Text
          variant='heading'
          as='h3'
          sx={{ fontSize: 5, fontWeight: 'bold', letterSpacing: '3px' }}>
          Recent Shout
        </Text>
        <Text as='p' sx={{ fontSize: 3 }}>
          {shout.shout.text}
        </Text>
        {!shout.shout.image.isDefault ? (
          <Box sx={{ pt: 4 }}>
            <Image
              sx={{
                width: ['130px', '175px'],
                height: ['130px', '175px'],
                borderRadius: '9999px',
                border: '2px solid white',
              }}
              src={`${shout.imageBaseUrl}/${shout.shout.image.image.cloudinaryId}`}
            />
          </Box>
        ) : (
          ''
        )}
      </Box>
    );
  } else return '';
};

export default SimpleShout;
