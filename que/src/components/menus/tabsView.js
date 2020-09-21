import React, { useState } from "react"
import AllIn from "./allIn"
import Tabs from "./tabs"

const TabsView = ({ menuData, setModalActive }) => {
  const [activeSection, setActiveSection] = useState({
    section: menuData.inventory[0].section,
    inventory: menuData.inventory[0].inventory,
  })

  const onCellClick = selection => {
    return e => {
      e.preventDefault()
      setActiveSection(selection)
    }
  }

  const childrenWithProps = () => (
    <AllIn menuData={activeSection} setModalActive={setModalActive} />
  )

  return (
    <div>
      <Tabs
        menuData={menuData}
        onCellClick={onCellClick}
        activeSection={activeSection}
      />
      {childrenWithProps()}
    </div>
  )
}

export default TabsView
