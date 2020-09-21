import React from 'react';

const Down = ({fill="#fff", width="40px"}) => {
    return (
      <svg
        width={width}
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke={fill}
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <polyline points="6 9 12 15 18 9" />
      </svg>
    )
}

export default Down;
