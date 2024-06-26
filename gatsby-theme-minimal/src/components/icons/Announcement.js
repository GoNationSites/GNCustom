import React from 'react';

const Announcement = ({width = '30px'}) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        class='icon icon-tabler icon-tabler-alert-circle'
        width={width}
        height={width}
        viewBox='0 0 24 24'
        stroke-width='1.5'
        stroke='#ffffff'
        fill='none'
        stroke-linecap='round'
        stroke-linejoin='round'>
        <path stroke='none' d='M0 0h24v24H0z' />
        <circle cx='12' cy='12' r='9' />
        <line x1='12' y1='8' x2='12' y2='12' />
        <line x1='12' y1='16' x2='12.01' y2='16' />
      </svg>
    );
}

export default Announcement;
