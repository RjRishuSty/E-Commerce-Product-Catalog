// import Styles from './Mode.module.css';
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useContext } from "react";
import { ThemeContexts } from "../../App";
import { Button } from "@mui/material";


const Mode = () => {
  const { mode, setMode } = useContext(ThemeContexts);
  const handleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  return (
    <>
      <Button onClick={handleMode} variant="text" color="inherit">
        {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </Button>
    </>
  );
};

export default Mode;
