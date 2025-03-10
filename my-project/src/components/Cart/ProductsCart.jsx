import React, { useContext } from "react";
// import Styles from './Products.module.css';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
import { ThemeContexts } from "../../App";
import { Badge } from "@mui/material";
const ProductsCart = () => {
  const { cartProducts } = useContext(ThemeContexts);
  return (
    <NavLink to="/cart">
      <Badge badgeContent={cartProducts.length} color="error" max={5}>
        <ShoppingCartIcon sx={{ color: "icon.main", fontSize: "2rem" }} />
      </Badge>
      
    </NavLink>
  );
};

export default ProductsCart;
