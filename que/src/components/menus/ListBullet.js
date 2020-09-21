import React from 'react'

export default function ListBullet({ color }) {
  return (
    <svg
      width='8px'
      height='8px'
      viewBox='0 0 12 12'
      version='1.1'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6Z'
        id='Ellipse'
        fill={color}
        stroke='none'
      />
    </svg>
  )
}

ListBullet.defaultProps = {
  color: 'black',
}
