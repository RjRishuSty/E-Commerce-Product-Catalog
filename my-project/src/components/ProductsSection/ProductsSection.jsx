import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Styles from "./ProductsSection.module.css";
import { useContext } from "react";
import Cards from "../Card/Cards";
import { ThemeContexts } from "../../App";

const ProductsSection = () => {
  const {isLoading,products } = useContext(ThemeContexts);

  

  return (
    <Box className={Styles.productsSection} sx={{ py: 5 }}>
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
