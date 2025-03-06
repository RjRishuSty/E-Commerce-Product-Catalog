import { Box } from "@mui/material";
import HeroSection from "../../components/HeroSection/HeroSection";
import ProductsSection from "../../components/ProductsSection/ProductsSection";

const Home = () => {
  return (
    <Box
      component="main"
      sx={{ backgroundColor: "primary.main" }}
    >
      <HeroSection />
      <ProductsSection />
    </Box>
  );
};

export default Home;
