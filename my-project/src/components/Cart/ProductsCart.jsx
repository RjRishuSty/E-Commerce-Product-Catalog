import React from "react";
// import Styles from './Products.module.css';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
const ProductsCart = () => {
  return (
    <NavLink to="/cart">
      <ShoppingCartIcon size="large" sx={{ color: "icon.main" }} />
    </NavLink>
  );
};

export default ProductsCart;
