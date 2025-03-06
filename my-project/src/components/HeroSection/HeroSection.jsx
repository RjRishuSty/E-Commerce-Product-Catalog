import { Stack } from "@mui/material";
import Styles from "./HeroSection.module.css";
import React, { useContext } from "react";
import SwiperBox from "../SwiperBox/SwiperBox";
import { ThemeContexts } from "../../App";
import Search from "../Search/Search";

const HeroSection = () => {
  const { isMobile } = useContext(ThemeContexts);
  return (
    <Stack
      className={Styles.heroSection}
      sx={{ backgroundColor: "primary.main" }}
    >
      {isMobile ? <Search /> : <SwiperBox sectionType="hero" />}
      
    </Stack>
  );
};

export default HeroSection;
