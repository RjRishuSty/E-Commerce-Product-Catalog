import { Stack } from "@mui/material";
import React, { useContext } from "react";
import Mode from "../Mode/Mode";
import ProductsCart from "../Cart/ProductsCart";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import { ThemeContexts } from "../../App";
import FavoriteIcons from "../FavoriteIcon/FavoriteIcons";
const SideBarIconBox = ({ sidebar }) => {
  const { user, isMobile } = useContext(ThemeContexts);
  if (sidebar === "sidebar") {
    return (
      <>
        <Mode />
        <ProductsCart />
        <ProfileIcon />
        <FavoriteIcons/>
      </>
    );
  }

  return (
    <>
      {!isMobile && <Mode />}
      {!isMobile && user && (
        <>
          <ProductsCart />
          <FavoriteIcons/>
        </>
      )}
    </>
  );
};

export default SideBarIconBox;
