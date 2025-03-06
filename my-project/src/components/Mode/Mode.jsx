import Styles from './Mode.module.css';
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useContext } from "react";
import { ThemeContexts } from "../../App";
import { Box, Button } from "@mui/material";


const Mode = () => {
  const { mode, setMode } = useContext(ThemeContexts);
  const handleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  return (
    <Box component='div' className={Styles.modeButton}>
      <Button onClick={handleMode} variant="text" sx={{color:"icon.main"}}>
        {mode === "light" ? <DarkModeIcon size="large"/> : <LightModeIcon size="large"/>}
      </Button>
    </Box>
  );
};

export default Mode; 
