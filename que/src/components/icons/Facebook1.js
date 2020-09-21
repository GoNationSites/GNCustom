import React from 'react'

const Facebook = ({ color, height, width, style }) => (
  <svg
    style={style}
    width={width}
    height={height}
    viewBox='0 0 322 322'
    version='1.1'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M287.5 0L34.5 0C15.4462 0 0 15.4462 0 34.5L0 287.5C0 306.554 15.4462 322 34.5 322L133.148 322L133.148 212.527L87.8672 212.527L87.8672 161L133.148 161L133.148 121.728C133.148 77.0572 159.742 52.3825 200.474 52.3825C219.981 52.3825 240.379 55.8613 240.379 55.8613L240.379 99.705L217.903 99.705C195.759 99.705 188.852 113.448 188.852 127.542L188.852 161L238.287 161L230.381 212.527L188.852 212.527L188.852 322L287.5 322C306.554 322 322 306.554 322 287.5L322 34.5C322 15.4462 306.554 0 287.5 0L287.5 0Z'
      id='Shape'
      fill={color}
      stroke='none'
    />
  </svg>
)

Facebook.defaultProps = {
  color: 'white',
  height: '16px',
  width: '16px',
}

export default Facebook
