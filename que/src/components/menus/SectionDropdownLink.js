import React, { useState } from "react"
import styled from "styled-components"
export default function SectionDropdownLink({
  onCellClick,
  name,
  section,
  inventory,
  toggleDropdown,
}) {
  const [arrowActive, toggleArrow] = useState(false)

  console.log("onCellClick", onCellClick)

  const handleDropdownClick = (section, inventory) => {
    // alert('clicked')
    // onCellClick({section, inventory})

    onCellClick({ section, inventory })
    // toggleDropdown(false)
  }

  return (
    <DropdownSection
      key={section.name}
      onMouseOver={() => {
        toggleArrow(true)
      }}
      onMouseOut={() => {
        toggleArrow(false)
      }}
      onClick={onCellClick({ section, inventory })}
    >
      <span> {name}</span>
    </DropdownSection>
  )
}

const DropdownSection = styled.div`
  width: calc(50% - (0.5rem * 2));
  margin: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: stretch;
  cursor: pointer;
  color: white;
  font-weight: bold;
  font-size: 1.25rem;
  @media (min-width: 767px) {
    width: calc(33.33% - (0.5rem * 2));
    margin: 0.5rem;
  }
  span {
    &:hover {
      text-decoration: underline;
    }
  }
`
