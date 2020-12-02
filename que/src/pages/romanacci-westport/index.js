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
  background: url("https://res.cloudinary.com/gonation/image/upload/v1606923661/GNTV/RomeTV4.jpg");
  /* font-family: "Arial", sans-serif; */
  padding: 2rem 1.5rem;
  min-height: calc(100vh - 150px);
  @media (min-width: 1024px) {
    padding-top: 2rem;
  }
`

const Title = styled.h3`
  color: #ed1c24;
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;
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
  const GONATION_ID = "59f0f12f7455de309071b4d7"
  const [selectedMenu, setSelectedMenu] = useState("Food")
  const options = [`Food`, "DRINK LIST"]

  const menus = [
    {
      name: "Food",
      pl: "3",
    },
    {
      name: "DRINK LIST",
      pl: "4",
    },
  ]

  // const renderMenuSelection = () => {
  //   switch (selectedMenu) {
  //     case `ROMAN SPECIALTY "ROMAN STREET FOOD"`:
  //       return (
  //         <Menu
  //           gonationID={GONATION_ID}
  //           key={`ROMAN SPECIALTY "ROMAN STREET FOOD"`}
  //           poweredListID={"powered-list-1"}
  //           mode={"allInOnce"}
  //           noBack
  //         />
  //       )
  //     case `Romanacci "Pinsa"`:
  //       return (
  //         <>
  //           <span></span>
  //           <Menu
  //             gonationID={GONATION_ID}
  //             key={`Romanacci "Pinsa"`}
  //             poweredListID={"powered-list-2"}
  //             mode={"allInOnce"}
  //             noBack
  //           />
  //         </>
  //       )

  //     case "Single Items":
  //       return c

  //     case `DOLCI "DESSERTS"`:
  //       return (
  //         <>
  //           <span></span>
  //           <Menu
  //             gonationID={GONATION_ID}
  //             key={`DOLCI "DESSERTS"`}
  //             poweredListID={"powered-list-4"}
  //             mode={"allInOnce"}
  //             noBack
  //           />
  //         </>
  //       )

  //     case "Drinks":
  //       return (
  //         <>
  //           <span></span>
  //           <Menu
  //             gonationID={GONATION_ID}
  //             key="Drinks"
  //             poweredListID={"powered-list-8"}
  //             mode={"allInOnce"}
  //             noBack
  //           />
  //         </>
  //       )

  //     case "Combos":
  //       return (
  //         <>
  //           <span></span>
  //           <Menu
  //             gonationID={GONATION_ID}
  //             key="Combos"
  //             poweredListID={"powered-list-9"}
  //             mode={"allInOnce"}
  //             noBack
  //           />
  //         </>
  //       )

  //     default:
  //       return ""
  //   }
  // }

  const displayMenu = () =>
    menus
      .filter(menu => menu.name === selectedMenu)
      .map(menu => (
        <>
          <span></span>
          <Menu
            gonationID={GONATION_ID}
            key={menu.name}
            poweredListID={`powered-list-${menu.pl}`}
            mode="allInOnce"
            noBack
          />
        </>
      ))

  return (
    <>
      <Page className="romanacci">
        <Title>Select a menu</Title>
        <Dropdown
          options={options}
          onChange={({ value }) => setSelectedMenu(value)}
          value={selectedMenu}
          placeholder="Select a menu"
        />
        <MenuWrap>{displayMenu()}</MenuWrap>
        {/* <Menu
          gonationID={GONATION_ID}
          key={menus[0].name}
          poweredListID={`powered-list-3`}
          mode="allInOnce"
          noBack
        /> */}
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
