/** @jsx jsx */
import { jsx, Box, Flex, Text, Grid } from 'theme-ui'
import axios from 'axios';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import React, {useState, useEffect} from 'react';


import Layout from '../../components/LayoutWoodbury';


import cloudinaryBuilder from '../../helpers/cloudinaryHelper'

let jsonpAdapter = require('axios-jsonp');

const Gallery = () => {
    const [galleryData, setGalleryData] = useState({
      albums: null,
      isLoading: true,
      albumOpenID: '',
    });

    const [lightbox, setLightbox] = useState({
      photoIndex: 0,
      isOpen: false,
    });

    const id = 'bzn-mmT_2ynbR4eGFehR2VEi8g';

    useEffect(() => {
        fetchData()
    }, [])

    const normalizePhotos = data => {
        console.log('dsfds', data)
        const photos = data.filter(el => el._id.includes('abm')).map(el => {
            console.log(el)
            return el.photos
        })
        return photos.flat()
    }

    
    // fetch data from gonation and sets it to component state.
    const fetchData = async () => {


         axios({
           url:
             `https://data.prod.gonation.com/profile/gallery?profile_id=${id}`,
           adapter: jsonpAdapter,
         })
           .then(res => {
               console.log('res.dat', res.data)
             setGalleryData({
               ...galleryData,
               albums: normalizePhotos(res.data),
               isLoading: false,
             });
           })
           .catch(e => {
             console.log('error : ', e);
             setGalleryData({ ...galleryData, isLoading: false });
           });
    };
    return (
      <Layout pageTitle='gallery'>
          {lightbox.isOpen ? <Lightbox
          mainSrc={cloudinaryBuilder(
            galleryData.albums[lightbox.photoIndex].imageUrl,
            1800
          )}></Lightbox> : ''}
        <Box sx={{background: '#111'}}>
          <Grid
            sx={{
              gridGap: 4,
              gridTemplateColumns: 'repeat( auto-fill, minmax( 300px, 1fr ) )',
              gridAutoRows: '100px',
              padding: 4,
            }}>

            {!galleryData.isLoading && galleryData.albums.map((el, idx) => (
              <img
                sx={{
                  gridRowEnd: `span ${idx % 4 === 0 ? 3 : 2}`,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  cursor: 'pointer',
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
      </Layout>
    );
}

export default Gallery;
