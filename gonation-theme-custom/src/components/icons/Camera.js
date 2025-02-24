import React from 'react';

const Camera = ({ width = '30px' }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      class='icon icon-tabler icon-tabler-camera'
      width={width}
      height={width}
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke='#111111'
      fill='none'
      stroke-linecap='round'
      stroke-linejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' />
      <path d='M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2' />
      <circle cx='12' cy='13' r='3' />
    </svg>
  );
};

export default Camera;
