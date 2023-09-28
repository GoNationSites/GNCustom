/** @jsx jsx */
import { jsx, Box, Flex, Text, Image } from 'theme-ui';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';
import moment from 'moment';

const SimpleShout = ({ id }) => {
  const [shout, setShout] = useState(null);

  useEffect(() => {
    axios({
      url: `https://data.prod.gonation.com/profile/shoutsnew/${id}`,
      adapter: jsonpAdapter,
    })
      .then((res) => {
        setShout(res.data);
      })
      .catch((e) => console.log('e => ', e));
  }, []);

  if (shout && shout.shout) {
    return (
      <Flex
        sx={{
          color: 'black',
          // paddingY: 4,
          paddingX: [0],
          maxWidth: '600px',
          alignItems: 'stretch',
          borderLeft: '4px solid',
          borderColor: 'primary',
          bg: 'white',
          height: '100%',
          borderTopRightRadius: '30px',
          borderBottomRightRadius: '30px',
        }}
      >
        <Box
          sx={{
            width: '33%',
            height: '100%',
          }}
        >
          {!shout.shout.image.isDefault ? (
            <Box sx={{ height: '100%' }}>
              <Image
                sx={{
                  height: '100%',
                  objectFit: 'cover',
                  minHeight: '120px',
                  display: 'flex',
                }}
                src={`${shout.imageBaseUrl}/${shout.shout.image.image.cloudinaryId}`}
              />
            </Box>
          ) : (
            ''
          )}
        </Box>
        <Box sx={{ flex: 1, padding: [3, 4] }}>
          <Text
            variant='heading'
            as='h3'
            sx={{
              fontSize: [3, 4],
              fontWeight: 'bold',
              letterSpacing: '3px',
              mb: 2,
            }}
          >
            Recent Shout
          </Text>
          <Text as='p' sx={{ fontSize: [1, 2], mb: 2 }}>
            {shout.shout.text}
          </Text>
          <Text sx={{ fontSize: [0, 1], color: 'primary' }}>
            {moment(shout.shout.createdAt).fromNow()}
          </Text>
        </Box>
      </Flex>
    );
  } else return '';
};

export default SimpleShout;
