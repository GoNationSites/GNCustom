import React from 'react';
import { jsx, Box, Image } from 'theme-ui';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../../../../node_modules/animate.css';
// import './index.css';
import { Animated } from 'react-animated-css';

const Slider = ({ slides }) => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showArrows={false}
      showIndicators={false}
      showThumbs={false}
      showStatus={false}
      interval={5000}>
      {slides.map(slide => (
        <Box sx={{ height: '100%' }}>
          <Image
            alt='Mix Prime Content Showcase'
            sx={{ height: '100%', objectFit: 'cover' }}
            src={slide}></Image>
        </Box>
      ))}
    </Carousel>
  );
};

export default Slider;
