import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Dropdown from "react-dropdown"
import axios from "axios"
import jsonpAdapter from "axios-jsonp"

import "react-dropdown/style.css"
import "bootstrap/dist/css/bootstrap.min.css"

import "../../index.css"
import Menu from "../../components/menus/Menu"
import AccordionMenu from "../../components/AccordionMenu"

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

const Logo = styled.img`
  max-width: 300px;
  width: 100%;
`

const Header = styled.div`
  display: flex;
  justify-content: center;
`

const Index = () => {
  const [menuData, setMenuData] = useState([])
  const [bizData, setBizData] = useState(null)
  const gonationId = "bzn-RX6J48-DRp_PyZSrURTQBQ"
  const pl = "8"

  useEffect(() => {
    async function fetchData() {
      const { data } = await fetchMenu(gonationId, pl)
      const aboutData = await fetchBusiness(gonationId)
      setBizData(aboutData.data)
      setMenuData(data)
    }
    fetchData()
    return () => {}
  }, [])

  const fetchMenu = (id, pl) => {
    try {
      return axios({
        url: `https://data.prod.gonation.com/pl/get?profile_id=${id}&powerlistId=powered-list-${pl}`,
        adapter: jsonpAdapter,
      })
    } catch (e) {
      console.error("Error when fetching menu data: ", e, "color: red")
    }
  }

  const fetchBusiness = id => {
    try {
      return axios({
        url: `https://data.prod.gonation.com/profile/getname/?profile_id=${id}`,
        adapter: jsonpAdapter,
      })
    } catch (e) {
      console.error("Error when fetching menu data: ", e, "color: red")
    }
  }

  return (
    <>
      <Page>
        <Header>
          {bizData && bizData.avatar !== null ? (
            <Logo
              src={`${bizData.avatar.imageBaseUrl}/${bizData.avatar.imagePrefix}`}
            />
          ) : (
            ""
          )}
        </Header>

        <MenuWrap>
          {menuData.length ? (
            <AccordionMenu menuData={menuData}></AccordionMenu>
          ) : (
            ""
          )}
        </MenuWrap>
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
