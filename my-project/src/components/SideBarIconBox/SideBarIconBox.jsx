import { Stack } from "@mui/material";
import React from "react";
import Mode from "../Mode/Mode";
import ProductsCart from "../Cart/ProductsCart";

const SideBarIconBox = () => {
  return (
    <Stack
      component="div"
      sx={{ width: "100%", height: "auto", border: "2px solid red",display:'flex',justifyContent:'space-between',alignItems:'center' }}
    >
      <Mode />
      <ProductsCart />
    </Stack>
  );
};

export default SideBarIconBox;
