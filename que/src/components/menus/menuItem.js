import React, { useState } from "react"
import styled from "styled-components"
import Price from "./price"
import PriceWithVariants from "./PriceWithVariants"
import Logo from "../../assets/logo.png"
import NewItemBadge from "./newItemBadge"
import Lightbox from "react-image-lightbox"
import { theme } from "../../globalStyles"

const MenuItem = ({ item, type, withDollar, hasMenuImages }) => {
  const [lightBox, setLightbox] = useState({
    isOpen: false,
    mainSrc: "",
  })
  const getMenuItemType = () => {
    switch (type) {
      case "someCase":
      default:
        return defaultType()
    }
  }

  // When copying a menu, for some reason the string URL gets a -copy attached at the end of it. This function removes it.
  const removeImageCopy = img =>
    img.includes("copy") ? img.substring(0, img.length - 5) : img

  const calcRaveRants = item => item.raves / (item.raves + item.rants)

  const defaultType = () => (
    <MenuItemInnerContainer>
      {lightBox.isOpen && (
        <Lightbox
          mainSrc={removeImageCopy(lightBox.mainSrc)}
          onCloseRequest={() => setLightbox({ isOpen: false })}
        ></Lightbox>
      )}
      {item.photo_id ? (
        <MenuItemImage
          onClick={() =>
            setLightbox({
              isOpen: true,
              mainSrc: item.imageUrl,
            })
          }
        >
          <ImageFill />
          {!item.imageUrl.includes("default") ? (
            <ItemImg
              src={
                item.imageUrl.includes("copy")
                  ? removeImageCopy(item.imageUrl)
                  : item.imageUrl
              }
              alt="menu item"
            />
          ) : (
            ""
          )}
        </MenuItemImage>
      ) : !item.imageUrl.includes("default") ? (
        <MenuItemImage>
          <ImageFill />
          <ItemImg src={Logo} alt="default menu item" />
        </MenuItemImage>
      ) : (
        ""
      )}
      <MenuItemContentContainer className="menu-item-container">
        {item.variants.length && item.variants[0].label === "" ? (
          <NamePriceContainer>
            <MenuItemName className="menu-item">{item.name}</MenuItemName>
            <Price withDollar={withDollar} variants={item.variants} toSide />
          </NamePriceContainer>
        ) : (
          <NamePriceContainerVariants>
            <MenuItemName>{item.name}</MenuItemName>
            <PriceWithVariants
              withDollar={withDollar}
              variants={item.variants}
              toSide
            />
          </NamePriceContainerVariants>
        )}
        {item.desc ? (
          <MenuItemDescription>{item.desc}</MenuItemDescription>
        ) : (
          ""
        )}
      </MenuItemContentContainer>
    </MenuItemInnerContainer>
  )

  return <MenuItemContainer>{getMenuItemType()}</MenuItemContainer>
}

export default MenuItem

const MenuItemContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  margin-bottom: 1rem;
  @media (min-width: 599px) {
    width: calc(50% - (0.5rem * 2));
    margin: 0.5rem;
  }

  @media (min-width: 767px) {
    width: calc(33.333% - (0.5rem * 2));
  }

  @media (min-width: 1200px) {
    width: calc(33% - (0.5rem * 2));
  }
  /* @media (min-width: 1600px) {
    width: calc(20% - (0.5rem * 2));
  } */
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
