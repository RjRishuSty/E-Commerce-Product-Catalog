import { Box, Typography } from "@mui/material";
import Styles from "./Logo.module.css";
import AutoAwesomeSharpIcon from "@mui/icons-material/AutoAwesomeSharp";

const Logo = () => {
  return (
    <Box className={Styles.logoSection} sx={{flexGrow:{md:0,sm:1,xs:1}}}>
      <Typography
        variant="h6"
        color="#2a55e5"
        sx={{
          display: "flex",
          alignItems: "center",
          fontWeight: 800,
          letterSpacing: "1px",
          textAlign: "end",
        }}
      >
        <span style={{ fontSize: "2rem" }}>M</span>iniKart
      </Typography>
      <Box className={Styles.caption}>
        <Typography
          variant="caption"
          sx={{ color: "rgb(145, 142, 142)", fontSize: "1rem", fontWeight: 700 }}
        >
          Explore{" "}
          <span
            style={{ color: "#ffc307", fontWeight: 600, fontSize: "0.7rem" }}
          >
            Plus
          </span>
        </Typography>
        <AutoAwesomeSharpIcon sx={{ fontSize: "1rem", color: "#ffc307" }} />
      </Box>
    </Box>
  );
};

export default Logo;
