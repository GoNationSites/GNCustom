import React from "react"

const Down = ({ fill = "#fff", width = "40px" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke={fill}
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path  stroke="none" d="M0 0h24v24H0z" />
      <polyline points="6 15 12 9 18 15" />
    </svg>
  )
}

export default Down
