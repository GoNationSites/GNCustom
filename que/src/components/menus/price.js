import React from "react"
import styled from "styled-components"
const Price = ({ variants, withDollar, toSide }) => (
  <MenuPriceContainer>
    {variants[0].labelTitle ? (
      <MenuItemPriceLabel>{variants[0].labelTitle}</MenuItemPriceLabel>
    ) : (
      ""
    )}
    <MenuItemPriceLabel>{variants[0].label}</MenuItemPriceLabel>{" "}
    <MenuItemPrice>
      {withDollar ? "$" : ""}
      {variants[0].price}
    </MenuItemPrice>
  </MenuPriceContainer>
)

export default Price

const MenuPriceContainer = styled.div`
  flex-grow: 1;
  font-size: 1.5rem;
`

const MenuItemPriceLabel = styled.p`
  margin: 0;
`
const MenuItemPrice = styled.p`
  margin: 0;
  text-align: right;
`
