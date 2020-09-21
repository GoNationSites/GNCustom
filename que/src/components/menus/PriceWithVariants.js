import React from "react"
import styled from "styled-components"
import ListBullet from "./ListBullet"
const Price = ({ variants, withDollar, toSide }) => {
  const renderPrices = () =>
    variants
      .filter(el => {
        return el.label !== ""
      })
      .map(variant => (
        <VariantContainer
          key={(((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)}
        >
          {variant.labelTitle ? (
            <LabelTitle>{variant.labelTitle}</LabelTitle>
          ) : (
            ""
          )}
          <Variant>
            <MenuItemPriceLabel>
              <ListBullet /> {variant.label}
            </MenuItemPriceLabel>
            {" - "} &nbsp;
            <MenuItemPriceVariants>
              {withDollar ? "$" : ""}
              {variant.price}
            </MenuItemPriceVariants>
          </Variant>
        </VariantContainer>
      ))

  return <VariantsContainer>{renderPrices()}</VariantsContainer>
}

export default Price

const VariantsContainer = styled.div``

const VariantContainer = styled.div`
  display: flex;
`

const LabelTitle = styled.div`
  display: flex;
`

const Variant = styled.div`
  margin-bottom: 8px;
  display: flex;
`

const MenuItemPriceLabel = styled.div`
  margin: 0;
  margin-right: 8px;
`

const MenuItemPriceVariants = styled.div``
