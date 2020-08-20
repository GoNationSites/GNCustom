/** @jsx jsx */
import { jsx, Box } from 'theme-ui'

import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import 'react-awesome-slider/dist/custom-animations/open-animation.css';
import './index.css'


const Slider = ({slides}) => {

  const AutoplaySlider = withAutoplay(AwesomeSlider);



    return (
      <Box>
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={5000}
          bullets={false}
          organicArrows={false}
          mobileTouch={false}
          className='awesome-slider'
          animation='openAnimation'>
          {slides.map(slide => (
            <div data-src={slide} />
          ))}
        </AutoplaySlider>
      </Box>
    );
}

export default Slider;
