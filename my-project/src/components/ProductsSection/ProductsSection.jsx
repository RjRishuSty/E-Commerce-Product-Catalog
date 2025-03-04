import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Styles from "./ProductsSection.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../Card/Cards";

const ProductsSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`https://dummyjson.com/products`);
        setProducts(response.data.products);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);
  return (
    <Box className={Styles.productsSection}>
      <Container>
        {!isLoading ? (
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
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <CircularProgress color="success" />
            <Typography color="success" mt={3} variant="h5" fontWeight="500">
              Loading products...
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default ProductsSection;
