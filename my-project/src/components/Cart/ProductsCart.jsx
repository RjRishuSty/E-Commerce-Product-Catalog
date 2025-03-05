import React from "react";
// import Styles from './Products.module.css';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
const ProductsCart = () => {
  return (
    <NavLink to="/cart">
      <ShoppingCartIcon size="large" sx={{ color: "white" }} />
    </NavLink>
  );
};

export default ProductsCart;
