import React from "react"
import styled from "styled-components"
import SectionDropdownLink from "./SectionDropdownLink"
export default function SectionDropdown({ childSections, onCellClick, toggleDropdown }) {
console.log("SectionDropdown -> onCellClick", onCellClick)
  
  return (
    <MenuSectionsDropdown>
      <div>
        {childSections.map(({ section, inventory }) => {
          return (
            <SectionDropdownLink
              toggleDropdown={toggleDropdown}
              onCellClick={onCellClick}
              name={section.name}
              section={section}
              inventory={inventory}
            />
          )
        })}
      </div>
    </MenuSectionsDropdown>
  )
}

const MenuSectionsDropdown = styled.div`
  position: absolute;
  z-index: 100;
  width: 100%;
  display: flex;
  justify-content: center;
  top: 58px;
  /* max-width: 600px; */
  div {
    max-width: 768px;
    background: ${props =>
      props.theme.primary ? props.theme.primary : "black"};
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    font-size: 1rem;
    padding: 1rem 0;

    /* width: 100%; */
    border-radius: 4px;

    margin: auto;
    justify-content: center;
  }
  @media (min-width: 1200px) {
    width: 100%;
    margin: auto;
  }
`
