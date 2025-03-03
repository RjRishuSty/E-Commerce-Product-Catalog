import { Box, Container, Grid } from "@mui/material";
import Styles from "./HeroSection.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../Card/Cards";

const HeroSection = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(`https://dummyjson.com/products`);
      setProducts(response.data.products);
    };
    fetchProducts();
  }, []);
  return (
    <Box className={Styles.HeroSection}>
      <Container sx={{ border: "1px solid yellow" }}>
        {products.length > 0 ? (
          <Grid container spacing={3}>
            {products.map((item) => {
              return (
                <Grid item xs={12} sm={6} md={3} key={item.id}>
                  <Cards item={item} />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          "Loading....."
        )}
      </Container>
    </Box>
  );
};

export default HeroSection;
