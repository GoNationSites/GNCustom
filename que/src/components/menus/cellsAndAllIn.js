import React, { useState, useEffect } from "react"
import AllIn from "./allIn"
import Cells from "./cells"
import Tabs from "./tabs"
import TabsView from "./tabsView"

const CellsAndAllIn = ({ menuData, setModalActive, isCellsAndTabs,  activeSection, setActiveSection, onCellClick, noBack }) => {
  // const [activeSection, setActiveSection] = useState(null)
  const [displayedCellSection, setDisplayedCellSection] = useState()

  // const onCellClick = selection => {
  //   return e => {
  //     e.preventDefault()
  //     setActiveSection(selection)
  //   }
  // }

  const onBackClick = () => {
    setActiveSection(null)
  }

  useEffect(() => {
    if (activeSection && isCellsAndTabs) {
      setDisplayedCellSection({
        section: activeSection.inventory[0].section,
        inventory: activeSection.inventory[0].inventory,
      })
    }
  }, activeSection)

  // const childrenWithProps = useMemo(() => React.Children.map(props.children, child => {
  //     return React.cloneElement(child, {
  //         onBackClick,
  //         data: activeSection,
  //     });
  // }));

  const childrenWithProps = () => (
    <AllIn
      menuData={displayedCellSection ? displayedCellSection : activeSection}
      setModalActive={setModalActive}
      onBackClick={onBackClick}
      noBack
    />
  )
  const tabsChildren = () => (
    <TabsView
      menuData={activeSection}
      setModalAcive={setModalActive}
      onBackClick={onBackClick}
    />
  )

  if (isCellsAndTabs) {
    return activeSection ? (
      <div>
        <Tabs
          menuData={activeSection}
          onCellClick={onCellClick}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          hasNestedTabs
          displayedCellSection={displayedCellSection}
          setDisplayedCellSection={setDisplayedCellSection}
        />
        {childrenWithProps()}
      </div>
    ) : (
      <Cells menuData={menuData} onCellClick={onCellClick} />
    )
  } else {
    return activeSection ? (
      <div>{childrenWithProps()}</div>
    ) : (
      <Cells menuData={menuData} onCellClick={onCellClick} />
    )
  }
}

export default CellsAndAllIn
