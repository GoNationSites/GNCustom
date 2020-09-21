import React from "react"
import styled from "styled-components"
const MenuTab = ({
  onCellClick,
  section,
  inventory,
  activeSection,
  displayedCellSection,
  setDisplayedCellSection,
}) => {
  return (
    <SectionTab
      className={`has-text-centered ${
        activeSection.section === section ? "tab-is-active" : ""
      } ${displayedCellSection.section === section ? "tab-is-active" : ""} `}
      onClick={() => setDisplayedCellSection({ section, inventory })}
    >
      <h2 className="">{section.name}</h2>
    </SectionTab>
  )
}

export default MenuTab

const SectionTab = styled.div`
  margin: 0 10px;
  min-width: max-content;
  max-width: max-content;
  width: 100%;
  border: 1px solid black;
  padding: 5px 15px;
  cursor: pointer;
  &:hover {
    background: black;
    color: #fff;
    transition: all 0.5s;
  }
`
