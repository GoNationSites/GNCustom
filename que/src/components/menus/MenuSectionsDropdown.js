import React, { useState, useContext } from "react"
import styled from "styled-components"
import Sticky from "react-sticky-el"
import MenuSectionContext from "../../context/MenuSectionContext"

import SectionDropdown from "./SectionDropdown"
import Down from "../icons/Down"
import Up from "../icons/Up"
export default function MenuSectionsDropdown({
  childSections,
  onCellClick,
  activeSection,
  dropdownOpen,
  toggleDropdown,
}) {
  // const [dropdownOpen, toggleDropdown] = useState(false)
  const val = useContext(MenuSectionContext)

  return (
    <Over>
      <DesktopBtn>
        <MenuSectionsDropDownContainer>
          <MenuDropdownBtn onClick={() => toggleDropdown(!dropdownOpen)}>
            {activeSection ? activeSection.section.name : "Our Menu"}
            <ArrowDown>{dropdownOpen ? <Up /> : <Down />}</ArrowDown>
          </MenuDropdownBtn>

          {dropdownOpen ? (
            <SectionDropdown
              toggleDropdown={toggleDropdown}
              childSections={childSections}
              onCellClick={onCellClick}
            />
          ) : null}
        </MenuSectionsDropDownContainer>
      </DesktopBtn>

      <MobileSticky>
        <Sticky stickyStyle={{ zIndex: 999, top: 0 }}>
          <MenuSectionsDropDownContainer>
            {/* <MenuDropdownBtn onClick={() => toggleDropdown(!dropdownOpen)}> */}
            {/* {activeSection ? activeSection.section.name : "Our Menu"}
              <ArrowDown
              >
                {dropdownOpen ? <Up /> : <Down />}
              </ArrowDown> */}
            {/* </MenuDropdownBtn> */}

            {dropdownOpen ? (
              <SectionDropdown
                childSections={childSections}
                onCellClick={onCellClick}
              />
            ) : null}
          </MenuSectionsDropDownContainer>
        </Sticky>
      </MobileSticky>
    </Over>
  )
}

const Over = styled.div`
  position: relative;
  z-index: 2;
`

const MobileSticky = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`

const DesktopBtn = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`

const MenuSectionsDropDownContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  /* position: sticky; */
  /* top: 0; */
`
const MenuDropdownBtn = styled.button`
  cursor: pointer;
  background: ${props =>
    props.theme.secondary ? props.theme.secondary : "black"};
  /* border: 2px solid
    ${props =>
    props.theme.secondary ? props.theme.secondary : "black"}; */
  border: none;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.25rem;
  display: inline-flex;
  align-items: center;
  border-radius: 4px;
  padding: 0.25rem 1.75rem;
  width: 100%;
  justify-content: center;
  @media (min-width: 768px) {
    width: auto;
  }
  /* position: sticky; */
  /* top: 0; */
`

const ArrowDown = styled.div`
  margin-left: 10px;
  display: inline;
`
