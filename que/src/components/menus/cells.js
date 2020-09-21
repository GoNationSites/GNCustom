import React from "react"
import styled from "styled-components"
import splitSectionChildren from "../helpers/splitSectionChildren"
import MenuCell from "./menuCell"
import MenuSectionDropdown from "./MenuSectionsDropdown"

const Cells = ({ menuData, onCellClick }) => {
  const { childSections } = splitSectionChildren(menuData)

  const renderChildSections = () => {
    return childSections.map(({ section, inventory }, idx) => (
      <MenuCell
        section={section}
        inventory={inventory}
        onCellClick={onCellClick}
        numSections={childSections.length}
      />
    ))
  }

  return (
    <div>
      {/* <MenuSectionDropdown
        childSections={childSections}
        onCellClick={onCellClick}
      /> */}
      <CellsContainer>{renderChildSections()}</CellsContainer>
    </div>
  )
}

export default React.memo(Cells)

const CellsContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
`
