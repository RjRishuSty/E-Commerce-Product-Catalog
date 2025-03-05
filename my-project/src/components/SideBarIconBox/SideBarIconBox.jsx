import { Stack } from "@mui/material";
import React, { useContext } from "react";
import Mode from "../Mode/Mode";
import ProductsCart from "../Cart/ProductsCart";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import { ThemeContexts } from "../../App";

const SideBarIconBox = () => {
  const { user } = useContext(ThemeContexts);

  return (
    <Stack
      component="div"
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        mt:3,
        padding:'10px',
        backgroundColor:'primary.dark'
      }}
    >
      <Mode />
      {user && (
        <>
          <ProductsCart />
          <ProfileIcon />
        </>
      )}
    </Stack>
  );
};

export default SideBarIconBox;
