/** @jsx jsx */
import { jsx, Box } from 'theme-ui'

import React, {useState} from "react"
// import isNewWithinWeek from "../../helpers/isNewWithinWeek"
// import Price from "./price"

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
  const removeImageCopy = img => img.includes('copy') ? img.substring(0, img.length - 5) : img

  const calcRaveRants = item => item.raves / (item.raves + item.rants)

  const defaultType = () => (
    <Box>Item here</Box>
  )

  return <Box>{defaultType()}</Box>
}

export default MenuItem
