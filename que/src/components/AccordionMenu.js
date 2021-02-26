import React from "react"
import styled from "styled-components"
import { Card, Accordion, Button } from "react-bootstrap"
import MenuItem from "./menus/menuItemAlt"
import { theme } from "../globalStyles"

const AccordionMenu = ({ menuData }) => {
  const parentSectionLength = menuData[0].inventory.filter(itm => itm.section)
    .length
  //   create a function that tracks root sections.
  const parentSectionTitles = menuData[0].inventory
    .filter(inv => inv.section)
    .map(inv => (inv.section ? inv.section.name : null))

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

    //  render the menu if it's a parent section create a new card / accordion child, else render the menu directly inside
    return (
      <>
        {parentSectionTitles.includes(section.name) ? (
          <Card style={{ border: "none", margin: "1rem" }}>
            <Card.Header
              style={{
                background: theme.primary,
                color: "white",
                display: "flex",
                justifyContent: "center",
                border: "none",
                boxShadow: "none",
              }}
            >
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey={idx + 1}
                style={{
                  color: "white",
                  fontWeight: "800",
                  fontSize: "1.25rem",
                }}
              >
                {section.name}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse
              eventKey={idx + 1}
              style={{
                backgroundImage: `url('https://www.transparenttextures.com/patterns/stucco.png')`,
                backgroundColor: "#fffbf4",
              }}
            >
              <Card.Body
                style={{
                  padding: `1rem 0 0 0`,
                  border: `3px solid ${theme.primary}`,
                }}
              >
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
          <Card.Body style={{ padding: 0 }}>
            <MenuSectionTitle>{section.name}</MenuSectionTitle>
            <MenuSectionDescription className={`${section.name}-desc`}>
              {section.desc}
            </MenuSectionDescription>

            <MenuItemsContainer>
              {section.name.length
                ? parsedSection.childItems.map(({ item }) => {
                    return (
                      <MenuItem
                        type={"default"}
                        withDollar={false}
                        item={item}
                        // setModalActive={setModalActive}
                      />
                    )
                  })
                : ""}
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

const MenuSectionTitle = styled.p`
  font-size: 2.25rem;
  text-align: center;
  margin: 0 2rem 2rem 2rem;
  color: #c38133;
  margin-bottom: 1rem;
  font-weight: bold;
`
const MenuItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
`

const MenuSectionDescription = styled.p`
  text-align: center;
  color: #111;
  margin-bottom: 1.25rem;
  padding: 0 1rem;
  max-width: 900px;
  margin: auto;
`
