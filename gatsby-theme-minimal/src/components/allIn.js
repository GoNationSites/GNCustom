import React, { useState } from "react"
import MenuItem from "./menuItem"
import styled from "styled-components"

const AllIn = ({ menuData, setModalActive, onBackClick, noBack, toggledSection }) => {
  const [withDollar, setWithDollar] = useState(false)

  // Takes Nested sections and and gets the nested child items and child sections
  const splitSectionChildren = section => {
  console.log("AllIn -> section", section)
    
    return section.inventory.reduce(
      (acc, curr) => {
        if ("item" in curr) {
          acc.childItems.push(curr)
        } else if ("section" in curr) {
          acc.childSections.push(curr)
        }
        return acc
      },
      { childItems: [], childSections: [] }
    )
  }

  // Recursively loop through menus and nested menus
  const renderMenu = (menu, nested, idx) => {
    console.log('menu:: ', menu)
    const { section } = menu
    console.log('section: ', section)
    const parsedSection = splitSectionChildren(menu)
    console.log("renderMenu -> parsedSection", parsedSection)
    
    return (
      <div>
        <div>
          <h1>{section.name}</h1>
          <p>{section.desc}</p>
          <div>
            {parsedSection.childItems.map(({ item }) => {
              return (
                <MenuItem
                  type={"default"}
                  withDollar={withDollar}
                  item={item}
                  // setModalActive={setModalActive}
                />
              )
            })}
          </div>
        </div>
        {/* child sections */}
        {parsedSection.childSections.map((childSection, idx) =>
          renderMenu(childSection, true, idx)
        )}
      </div>
    )
  }
  return (
    <>
      {renderMenu(menuData)}
    </>
  )
}

export default AllIn
