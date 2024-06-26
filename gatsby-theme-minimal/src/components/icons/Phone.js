import React from 'react';

const Phone = ({width='30px'}) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        class='icon icon-tabler icon-tabler-phone'
        width={width}
        height={width}
        viewBox='0 0 24 24'
        stroke-width='1.5'
        stroke='#ffffff'
        fill='none'
        stroke-linecap='round'
        stroke-linejoin='round'>
        <path stroke='none' d='M0 0h24v24H0z' />
        <path d='M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2' />
      </svg>
    );
}

export default Phone;
