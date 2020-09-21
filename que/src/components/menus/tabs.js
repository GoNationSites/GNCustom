import React, { useEffect } from "react"
import styled from "styled-components"
import splitSectionChildren from "../helpers/splitSectionChildren"
import MenuTab from "./menuTab"

const Tabs = ({
  menuData,
  onCellClick,
  children,
  activeSection,
  hasNestedTabs,
  displayedCellSection,
  setDisplayedCellSection,
}) => {
  const { childSections } = splitSectionChildren(menuData)

  const renderChildSections = () => {
    if (hasNestedTabs) {
      return activeSection.inventory.map(({ section, inventory }) => (
        <MenuTab
          section={section}
          inventory={inventory}
          onCellClick={onCellClick}
          activeSection={activeSection}
          displayedCellSection={displayedCellSection}
          hasNestedTabs
          setDisplayedCellSection={setDisplayedCellSection}
        />
      ))
    } else {
      return childSections.map(({ section, inventory }) => (
        <MenuTab
          section={section}
          inventory={inventory}
          onCellClick={onCellClick}
          activeSection={activeSection}
        />
      ))
    }
  }

  return (
    <TabsRow>
      {displayedCellSection && renderChildSections()}
      {children}
    </TabsRow>
  )
}

export default Tabs

const TabsRow = styled.div`
  display: flex;
  overflow: scroll;
  padding: 20px 0;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 1024px) {
    justify-content: center;
  }
`
