/** @jsx jsx */
import { jsx, Box, Flex, Text, Grid } from 'theme-ui';
import axios from 'axios';
import Lightbox from 'react-image-lightbox';

import React, { useState, useEffect } from 'react';

import cloudinaryBuilder from '../helpers/cloudinaryHelper';

let jsonpAdapter = require('axios-jsonp');

const GalleryPage = ({ id }) => {
  const [galleryData, setGalleryData] = useState({
    albums: null,
    isLoading: true,
    albumOpenID: '',
  });

  const [lightbox, setLightbox] = useState({
    photoIndex: 0,
    isOpen: false,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const normalizePhotos = data => {
    const photos = data
      .filter(el => el._id.includes('abm'))
      .map(el => {
        return el.photos;
      });
    return photos.flat();
  };

  // fetch data from gonation and sets it to component state.
  const fetchData = async () => {
    axios({
      url: `https://data.prod.gonation.com/profile/gallery?profile_id=${id}`,
      adapter: jsonpAdapter,
    })
      .then(res => {
        setGalleryData({
          ...galleryData,
          albums: normalizePhotos(res.data),
          isLoading: false,
        });
      })
      .catch(e => {
        setGalleryData({ ...galleryData, isLoading: false });
      });
  };
  return (
    <>
      {lightbox.isOpen ? (
        <Lightbox
          mainSrc={cloudinaryBuilder(
            galleryData.albums[lightbox.photoIndex].imageUrl,
            1800
          )}></Lightbox>
      ) : (
        ''
      )}
      <Box sx={{}}>
        <Grid
          sx={{
            gridGap: 4,
            gridTemplateColumns: 'repeat( auto-fill, minmax( 300px, 1fr ) )',
            gridAutoRows: '100px',
            padding: 4,
          }}>
          {!galleryData.isLoading &&
            galleryData.albums.map((el, idx) => (
              <img
                sx={{
                  gridRowEnd: `span ${idx % 4 === 0 ? 3 : 2}`,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  cursor: 'pointer',
                  borderRadius: '30px',
                }}
                src={cloudinaryBuilder(el.imageUrl)}
                alt={el.name ? el.caption : 'Mix Prime'}
                onClick={() =>
                  setLightbox({
                    isOpen: true,
                    photoIndex: idx,
                  })
                }
              />
            ))}
        </Grid>
      </Box>
    </>
  );
};

export default GalleryPage;
