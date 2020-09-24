import React, { useState } from "react"
import styled from "styled-components"
import Dropdown from "react-dropdown"
import "react-dropdown/style.css"
import "../../index.css"

// import Layout from "../components/Layout"
import Menu from "../../components/menus/Menu"

const Page = styled.section`
  padding: 1rem;
  padding-top: 2.5rem;
  background: url("https://www.transparenttextures.com/patterns/stucco.png");
  /* font-family: "Arial", sans-serif; */
  padding: 2rem 1.5rem;
  @media (min-width: 1024px) {
    padding-top: 2rem;
  }
`

const Title = styled.h3`
  color: #c38133;
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
`

const MenuWrap = styled.div`
  padding: 1rem 0;
`

const GonationLogo = styled.div`
  border-top: 3px solid black;
  text-align: center;
  padding: 1rem 0;
  img {
    max-width: 200px;
  }
`

const Index = () => {
  const [selectedMenu, setSelectedMenu] = useState("Main Menu")
  const options = [
    "Main Menu",
    "Drinks",
    "Brunch",
    "Family Style Menu",
    "Catering",
  ]

  const renderMenuSelection = () => {
    switch (selectedMenu) {
      case "Main Menu":
        return (
          <Menu
            key="Main"
            poweredListID={"powered-list-1"}
            mode={"allInOnce"}
            noBack
          />
        )
      case "Drinks":
        return (
          <>
            <span></span>
            <Menu
              key="Drinks"
              poweredListID={"powered-list-2"}
              mode={"allInOnce"}
              noBack
            />
          </>
        )

      case "Brunch":
        return (
          <>
            <span></span>
            <Menu
              key="Brunch"
              poweredListID={"powered-list-3"}
              mode={"allInOnce"}
              noBack
            />
          </>
        )

      case "Catering":
        return (
          <>
            <span></span>
            <Menu
              key="Catering"
              poweredListID={"powered-list-5"}
              mode={"allInOnce"}
              noBack
            />
          </>
        )

      case "Family Style Menu":
        return (
          <>
            <span></span>
            <Menu
              key="Family"
              poweredListID={"powered-list-6"}
              mode={"allInOnce"}
              noBack
            />
          </>
        )

      default:
        return ""
    }
  }

  return (
    <>
      <Page>
        <Title>Select a menu</Title>
        <Dropdown
          options={options}
          onChange={({ value }) => setSelectedMenu(value)}
          value={selectedMenu}
          placeholder="Select a menu"
        />
        {console.log("selected menu is: ", selectedMenu)}
        <MenuWrap>{renderMenuSelection(selectedMenu)}</MenuWrap>
      </Page>
      <GonationLogo>
        <img
          src="https://www.gonationsites.com/GNSE/gn-sites/images/gn-power-black.svg"
          alt={"GoNation"}
        />
      </GonationLogo>
    </>
  )
}

export default Index
