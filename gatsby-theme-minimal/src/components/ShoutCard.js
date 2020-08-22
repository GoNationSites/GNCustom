/** @jsx jsx */
import { jsx, Flex, Card, Image, Text, Box } from 'theme-ui'
import React from 'react';
import moment from 'moment'

const ShoutCard = ({data, setShowShout}) => {

    const addHTTP = url => {
      var prefix = 'https://';
      if (url.substr(0, prefix.length) !== prefix) {
        return prefix + url;
      }
      return url;
    };

    const renderCTAs = () => {
      const buttonNames = Object.keys(data.shout.ctas);
      return buttonNames
        .filter(btn => btn !== 'cta1' && btn !== 'cta2')
        .map(button => {
          return (
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={addHTTP(data.shout.ctas[button])}>
              {button}
            </a>
          );
        });
    };

    const getAvatar = () => `https://res.cloudinary.com/gonation/${data.shout.business.avatar.image.cloudinaryId}`

    const getShoutImage = () => {
      return `https://res.cloudinary.com/gonation/w_800/${data.shout.image.image.cloudinaryId}`;
    };


    return (
      <>
        <Box
          onClick={() => setShowShout(false)}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            background: 'rgba(0,0,0,.5)',
            zIndex: 999,
          }}></Box>
        <Card
          sx={{
            background: 'white',
            position: 'relative',
            zIndex: 999999,
            mt: 6,
            maxWidth: '320px',
            marginX: 'auto',
          }}>
          <Box>
            <Image
              sx={{ width: '100%' }}
              src={
                data.shout.image.isDefault ? getAvatar() : getShoutImage()
              }></Image>
          </Box>
          <Box sx={{ padding: 3 }}>
            <Text as='p' sx={{ mb: 3 }}>
              {data.shout.text}
            </Text>
            <Text sx={{ fontFamily: 'heading', textTransform: 'uppercase' }}>
              Shouted {moment(data.shout.createdAt).fromNow()}
            </Text>
          </Box>
        </Card>
      </>
    );
}

export default ShoutCard;
