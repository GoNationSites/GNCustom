import React from 'react';

const hamburger = ({fill, width}) => {
    return (
      <svg
        data-name="Layer 1"
        id="Layer_1"
        viewBox="0 0 64 64"
		xmlns="http://www.w3.org/2000/svg"
		width={width}
      >
        <path
		fill={fill}
          d="M60.85,11.72H3.15V0h57.7ZM3.15,37.86h57.7V26.14H3.15Zm57.7,14.42H3.15V64h57.7Z"
          data-name="&lt;Compound Path&gt;"
          id="_Compound_Path_"
        />
      </svg>
    )
}

export default hamburger;
