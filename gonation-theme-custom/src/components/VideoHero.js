import React, { useState, useEffect, useRef } from 'react';
import { Box } from 'theme-ui';
import { keyframes } from '@emotion/react';

export default function VideoHero({ videoId }) {
  const videoOuterContainerRef = useRef();

  return (
    <Box>
      <YouTubeEmbed
        videoId={videoId}
        autoplay
        preventMouseEffects
        videoOuterContainerRef={videoOuterContainerRef}
      />
    </Box>
  );
}

const fadeOutRadial = keyframes`
  0% {
   width:100vw
  }
  80%  {
    width:300vw
  }
  99% {
    width:500vw
  }
  100% {
    width:600vw;
    background: 'radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%, rgba(0,0,0,1) 100%)',
  }
`;

const YouTubeEmbed = ({
  videoId,
  autoplay = true,
  preventMouseEffects = true,
  muted = true,
}) => {
  const [videoSize, setVideoSize] = useState({
    width: undefined,
    height: undefined,
  });

  const [scaleAspectRatio, setScaleAspectRatio] = useState(false);

  const src = `https://www.youtube.com/embed/${videoId}?autoplay=${
    autoplay ? 1 : 0
  }&mute=${muted ? 1 : 0}&loop=1&playlist=${videoId}`;

  const videoContainer = useRef();
  const videoFrame = useRef();

  useEffect(() => {
    function handleResize() {
      setVideoSize({
        width: videoFrame?.current?.offsetWidth,
        height: videoFrame?.current?.offsetHeight,
      });
    }
    window.addEventListener('resize', handleResize);

    handleResize();

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty array ensures that effect is only run on mount

  //   useEffect(() => {

  //     const heightOfVideo = videoSize.height;
  //     const WidthOfContainer = videoOuterSize.width;
  //     const widthOfVideo = videoSize.width;
  //     const deficientInHeight = heightOfContainer - heightOfVideo > 0;
  //     if (heightOfContainer && heightOfVideo) {
  //       if (deficientInHeight) {
  //         console.log('is');
  //         setScaleAspectRatio((heightOfContainer - heightOfVideo) / 170 + 1);
  //       } else {
  //         console.log('not');
  //         setScaleAspectRatio((WidthOfContainer - widthOfVideo) / 1 + 1);
  //       }
  //     }
  //   }, [videoSize]);

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
      }}
    >
      <div
        ref={videoContainer}
        style={{
          width: '100%',
          display: 'flex',
          margin: 'auto',
          position: 'relative',
          paddingBottom: '56.25%',
          transform: scaleAspectRatio
            ? `scale(${scaleAspectRatio < 1 ? 1 : scaleAspectRatio})`
            : '',
          transformOrigin: 'center',
        }}
      >
        <iframe
          ref={videoFrame}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            width: '100vw',
            height: '100vh',
          }}
          src={src}
          title='Video Player'
          allow='accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' //autoplay;
          allowFullScreen
        />
        {preventMouseEffects && (
          <Box
            id='preventMouseEffects'
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              width: '100%',
              height: '100%',
              // background: `radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,${backgroundGradient}) 30%, rgba(0,0,0,${backgroundGradient}) 100%)`,
              animation: [
                `${fadeOutRadial} 9s ease-in-out forwards`,
                `${fadeOutRadial} 9s ease-in-out forwards`,
                `${fadeOutRadial} 9s ease-in-out forwards`,
                `${fadeOutRadial} 4s ease-in-out forwards`,
              ],
              // animationIterationCount: 1
            }}
          />
        )}
      </div>
    </Box>
  );
};
