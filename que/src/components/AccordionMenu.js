import React from "react"
import styled from "styled-components"
import { Card, Accordion, Button } from "react-bootstrap"
import MenuItem from "./menus/menuItem"

const AccordionMenu = ({ menuData }) => {
  const parentSectionLength = menuData[0].inventory.filter(itm => itm.section)
    .length
  //   create a function that tracks root sections.
  const parentSectionTitles = menuData[0].inventory
    .filter(inv => inv.section)
    .map(inv => (inv.section ? inv.section.name : null))
  console.log(
    "🚀 ~ file: AccordionMenu.js ~ line 13 ~ AccordionMenu ~ parentSectionTitles",
    parentSectionTitles
  )

  // Takes Nested sections and and gets the nested child items and child sections
  const splitSectionChildren = section => {
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
    const { section } = menu
    const parsedSection = splitSectionChildren(menu)
    console.log("comparing ", parentSectionTitles, "with", section.name)

    //  render the menu if it's a parent section create a new card / accordion child, else render the menu directly inside
    return (
      <>
        {parentSectionTitles.includes(section.name) ? (
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey={idx + 1}>
                {section.name}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={idx + 1}>
              <Card.Body>
                <MenuSectionDescription className={`${section.name}-desc`}>
                  {section.desc}
                </MenuSectionDescription>
                <MenuItemsContainer>
                  {parsedSection.childItems.map(({ item }) => {
                    return (
                      <MenuItem
                        type={"default"}
                        withDollar={false}
                        item={item}
                        // setModalActive={setModalActive}
                      />
                    )
                  })}
                </MenuItemsContainer>
                {parsedSection.childSections.map((childSection, idx) =>
                  renderMenu(childSection, true, idx)
                )}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ) : (
          <Card.Body>
            <MenuSectionDescription className={`${section.name}-desc`}>
              {section.desc}
            </MenuSectionDescription>
            <p>{section.name}</p>
            <MenuItemsContainer>
              {parsedSection.childItems.map(({ item }) => {
                return (
                  <MenuItem
                    type={"default"}
                    withDollar={false}
                    item={item}
                    // setModalActive={setModalActive}
                  />
                )
              })}
            </MenuItemsContainer>
            {parsedSection.childSections.map((childSection, idx) =>
              renderMenu(childSection, true, idx)
            )}
          </Card.Body>
        )}
      </>
    )
  }

  return <Accordion eventKey={"0"}>{renderMenu(menuData[0])}</Accordion>
}

export default AccordionMenu

const BackToMenuBtn = styled.button`
  background-color: ${props =>
    props.theme.secondary ? props.theme.secondary : "black"};
  color: white;
  border: none;
  margin-left: 0.5rem;
  cursor: pointer;
  justify-content: center;
  padding-bottom: calc(0.5rem - 1px);
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: calc(0.5rem - 1px);
  text-align: center;
  white-space: nowrap;
`

const AllInContainer = styled.div``
const MenuContainer = styled.div``
const MenuSectionTitle = styled.p`
  font-size: 2rem;
  text-align: center;
  margin: 0 2rem 2rem 2rem;
  color: ${props => (props.theme.primary ? props.theme.primary : "black")};
  margin-bottom: 1rem;
  text-shadow: 3px 3px 0px #c38133;
`
const MenuItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
`

const MenuSectionDescription = styled.p`
  text-align: center;
  color: #111;
  margin-bottom: 1.25rem;
  padding: 0 1rem;
`
