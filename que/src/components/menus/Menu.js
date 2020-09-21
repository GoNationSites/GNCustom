import React, { useEffect, useState } from "react"
import axios from "axios"
import jsonpAdapter from "axios-jsonp"
import styled from "styled-components"
import ItemModal from "./itemModal"
import AllInOnce from "./allIn"
import CellsAndAllIn from "./cellsAndAllIn"
import TabsView from "./tabsView"
import MenuSectionContext from "../../context/MenuSectionContext"
import MenuSectionsDropdown from "./MenuSectionsDropdown"
import splitSectionChildren from "../helpers/splitSectionChildren"

export default function Food({ poweredListID, mode, noBack }) {
  const [menuData, setMenuData] = useState({})
  const [childSections, setChildSections] = useState(null)
  const [activeSection, setActiveSection] = useState(null)
  const [modalActive, setModalActive] = useState("")
  const [dropdownOpen, toggleDropdown] = useState(false)

  const id = "bzn-RX6J48-DRp_PyZSrURTQBQ"

  //   const poweredListID = "powered-list-4"

  //   const mode = "cellsThenAllInOnce"

  // Fetch the menu data when the template renders.
  useEffect(() => {
    axios({
      url: `https://data.prod.gonation.com/pl/get?profile_id=${id}&powerlistId=${poweredListID}`,
      adapter: jsonpAdapter,
    }).then(res => {
      setMenuData(res.data[0])
      const { childSections } = splitSectionChildren(res.data[0])
      setChildSections(childSections)
    })
  }, [])

  const onCellClick = selection => {
    return e => {
      toggleDropdown(false)
      console.log(dropdownOpen)
      e.preventDefault()
      setActiveSection(selection)
    }
  }

  const getRenderType = () => {
    switch (mode) {
      case "allInOnce":
        return (
          <AllInOnce
            menuData={menuData}
            setModalActive={setModalActive}
            noBack
          />
        )
      case "cellsThenAllInOnce":
        return (
          <CellsAndAllIn
            menuData={menuData}
            setModalActive={setModalActive}
            onCellClick={onCellClick}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            noBack
          />
        )
      case "tabs":
        return <TabsView menuData={menuData} setModalActive={setModalActive} />
      case "cellsThenTabs":
        return (
          <CellsAndAllIn
            menuData={menuData}
            setModalActive={setModalActive}
            isCellsAndTabs
            onCellClick={onCellClick}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        )
      default:
        return "no menu selected"
    }
  }

  return (
    <>
      <MenuSectionContext.Provider>
        {console.log(mode, modalActive)}
        {mode !== "allInOnce" ? (
          <>
            <MenuSectionsDropdown
              childSections={childSections}
              onCellClick={onCellClick}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              dropdownOpen={dropdownOpen}
              toggleDropdown={toggleDropdown}
            />
            {modalActive && (
              <ItemModal data={modalActive} setModalActive={setModalActive} />
            )}
          </>
        ) : (
          ""
        )}

        <MenuWrapper>
          {menuData && menuData.section ? getRenderType() : ""}
        </MenuWrapper>
      </MenuSectionContext.Provider>
    </>
  )
}

const MenuWrapper = styled.div``

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
`
