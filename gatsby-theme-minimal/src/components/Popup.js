import React, { useState } from 'react';
import ls from 'local-storage';
import { MdClose } from 'react-icons/md';
import { Box, Text, Button } from 'theme-ui';

const dateInPast = function (firstDate, today) {
  if (firstDate.setHours(0, 0, 0, 0) <= today.setHours(0, 0, 0, 0)) {
    return true;
  }
  return false;
};

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);

  // this is an automatic remover for a pop up.
  const today = new Date();
  const popupRemovalDate = new Date('1 April 2024');
  const dateIsPast = dateInPast(popupRemovalDate, today);

  if (dateIsPast) return null;

  const closePopup = () => {
    var numberDaysToExpire = 1;
    // create new current date
    var expireDate = new Date();
    // add number of days too current date and set expire date to then
    expireDate.setDate(expireDate.getDate() + numberDaysToExpire);
    const dateString = JSON.stringify({
      expireDate,
    });
    localStorage.setItem('popUpExpires', dateString);
    setShowPopup(false);
  };
  const hasSeenPopup = Boolean(ls.get('popUpExpires'));
  // if there is an object there check if the expiry date is less than now. if so toggle pop up
  const isExpiredPopup =
    hasSeenPopup &&
    new Date(
      JSON.parse(localStorage.getItem('popUpExpires')).expireDate
    ).getTime() < Date.now();

  //   return null;

  if (!showPopup || (hasSeenPopup && !isExpiredPopup)) {
    return '';
  } else {
    return (
      <Box sx={boxContainer}>
        <Box sx={background} onClick={closePopup} />
        <Box sx={innerBox}>
          <Box onClick={closePopup} sx={closeBox}>
            <MdClose size={'24px'} color="white" />
          </Box>
          <Text as="h1">Join Us For Easter Sunday Buffet</Text>
          <br></br>

          {/* <Text as="p">
            For reservations please call the restaurant 203-586-1788
          </Text> */}
          <br></br>
          <br></br>

          <a href="https://res.cloudinary.com/gonation/image/upload/v1709911640/gonation.data.prod/business/bzn-mmT_2ynbR4eGFehR2VEi8g/pdfs/Easter_Sunday.pdf">
            <Button variant="primary">View Menu</Button>
          </a>
        </Box>
      </Box>
    );
  }
};

export default Popup;

const boxContainer = {
  width: '100%',
  height: '100vh',
  left: '0rem',
  top: '0rem',
  position: 'fixed',
  zIndex: 999,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const background = {
  backgroundColor: 'rgba(0,0,0,.6)',
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
};

const innerBox = {
  backgroundColor: 'rgba(0,0,0,.9)',
  padding: '19px',
  borderRadius: '8px',
  maxWidth: 700,
  zIndex: 999,
  position: 'relative',
  border: '2px solid',
  borderColor: 'secondary',
  padding: '2rem',
  width: '95%',
  h1: {
    color: 'white',
  },
  p: {
    fontSize: '1.5rem',
    color: 'white',
  },
};

const closeBox = {
  position: 'absolute',
  top: 0,
  right: 0,
  zIndex: 99,
  svg: {
    fill: 'white!important',
  },
};
