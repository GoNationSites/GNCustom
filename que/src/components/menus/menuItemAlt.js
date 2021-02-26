import React, { useState } from "react"
import styled from "styled-components"
import Price from "./price"
import PriceWithVariants from "./PriceWithVariants"
import Logo from "../../assets/logo.png"
import Lightbox from "react-image-lightbox"
import { theme } from "../../globalStyles"
import "react-image-lightbox/style.css"

const MenuItemAlt = ({ item, type, withDollar, hasMenuImages }) => {
  const [lightBox, setLightbox] = useState({
    isOpen: false,
    mainSrc: "",
  })

  const hasImage = !item.imageUrl.includes("default")

  // When copying a menu, for some reason the string URL gets a -copy attached at the end of it. This function removes it.
  const removeImageCopy = img =>
    img.includes("copy") ? img.substring(0, img.length - 5) : img

  const renderItemImage = () =>
    !item.imageUrl.includes("default") ? (
      <div class="menu-image">
        <img
          style={{ cursor: "pointer" }}
          onClick={() =>
            setLightbox({
              isOpen: true,
              mainSrc: item.imageUrl,
            })
          }
          src={
            item.imageUrl.includes("copy")
              ? removeImageCopy(item.imageUrl)
              : item.imageUrl
          }
          alt={item.name}
        />
      </div>
    ) : (
      ""
    )

  const renderVariants = () => {
    return (
      item.variants.length > 1 &&
      item.variants
        .filter(v => v.label.length)
        .map(variant => (
          <div>
            <span className="v-label">{variant.label}</span> -
            <span className="v-price">{variant.price}</span>
          </div>
        ))
    )
  }

  return (
    <>
      <MenuItemContainer
        hasImage={hasImage}
        noDescWithImg={hasImage && !item.desc.length}
      >
        <div class="grid-container">
          <div class="menu-item">
            {item.name}{" "}
            <span className="price">
              {item.variants.length && item.variants[0].price
                ? item.variants[0].price
                : ""}
            </span>
          </div>
          {item.desc.length ? (
            <div class="menu-description">
              <p>{item.desc}</p>
              {renderVariants()}
            </div>
          ) : (
            ""
          )}

          {renderItemImage()}
        </div>
      </MenuItemContainer>

      {lightBox.isOpen && (
        <Lightbox
          mainSrc={removeImageCopy(lightBox.mainSrc)}
          onCloseRequest={() => setLightbox({ isOpen: false })}
        ></Lightbox>
      )}
    </>
  )
}

export default MenuItemAlt

const getTemplateArea = (hasImage, noDescWithImg) => {
  if (noDescWithImg) {
    return `
        "menu-item menu-item menu-item" 
        "menu-image . ." 
        "menu-variants menu-variants ."
        `
  }
  if (hasImage) {
    return `"menu-item menu-item menu-item" 
    "menu-description menu-description menu-image" 
    "menu-variants menu-variants ."`
  }
  return `"menu-item menu-item menu-item" 
  "menu-description menu-description menu-description" 
  "menu-variants menu-variants ."`
}

const MenuItemContainer = styled.div`
  width: 50%;
  padding: 1.25rem 0.75rem;
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 0.5fr;
    grid-auto-rows: auto;
    /* grid-template-rows: auto auto auto; */
    gap: 0px 0px;
    grid-template-areas: ${({ hasImage, noDescWithImg }) =>
      getTemplateArea(hasImage, noDescWithImg)};
  }
  .menu-item {
    grid-area: menu-item;
    font-size: ${theme.sizes.XL};
    font-weight: bold;
    margin-bottom: 0.25rem;
  }
  .menu-price {
    grid-area: menu-price;
  }
  .menu-description {
    grid-area: menu-description;
    min-height: unset;
    p {
      font-size: 1rem;
      color: #3b1800;
      font-size: 1.25rem;
      text-transform: none;
      margin: 0;
    }
  }
  .menu-image {
    grid-area: menu-image;
    img {
      width: 100%;
      height: 100%;
      border-radius: 100%;
      width: 100px;
      height: 100px;
      object-fit: cover;
      @media (min-width: ${theme.breakpoints.tablet}) {
        width: 120px;
        height: 120px;
      }
    }
  }
  .menu-variants {
    grid-area: menu-variants;
    padding-top: 1rem;
    .v-label,
    .v-price {
      font-size: 1.2rem;
    }
  }
  .price {
    padding-left: 18px;
  }
  width: 100%;
  @media (min-width: ${theme.breakpoints.tablet}) {
    width: 50%;
    padding: 2rem;
  }
  @media (min-width: ${theme.breakpoints.desktopL}) {
    width: 33%;
  }
  @media (min-width: ${theme.breakpoints.desktopXL}) {
    width: 25%;
  }
`

const MenuItemInnerContainer = styled.div`
  margin-bottom: 1rem;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  box-shadow: 2px 2px #dddddd;
`

const MenuItemImage = styled.div`
  border-radius: 10px 10px 0 0;
  position: relative;
  cursor: pointer;
`
const ImageFill = styled.div`
  padding-bottom: 100%;
`

const ItemImg = styled.img`
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  left: 0;
  cursor: pointer;
`

const MenuItemContentContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding-bottom: 0;
  }
`

const MenuItemName = styled.p`
  font-size: 2rem;
  font-weight: bolder;
  margin: 0;
  margin-bottom: 1rem;
  color: black;
`

const MenuItemDescription = styled.p`
  white-space: break-spaces;
  @media (max-width: 768px) {
    line-height: 1.5rem;
    font-weight: 500;
    font-size: 14px;
  }
  font-family: sans-serif;
`

const NamePriceContainer = styled.div`
  display: flex;
`

const NamePriceContainerVariants = styled.div`
  display: block;
`
