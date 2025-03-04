import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0a6205",
      light:'#e8e7e6',
      dark:'#043b01'
    },
    background: {
      default: "white",
      paper: "#f5f5f5",
    },
    text: {
      primary: "#000000",
      secondary: "#555555",
      light:'#0602DE',
    },
  },
  typography: {
    fontFamily: "'Raleway', serif",
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0b0b0b",
    },
    background: {
      default: "#0b0b0b",
      paper: "#3b055c",
    },
    text: {
      primary: "#ffffff",
      secondary: "#ffffff",
    },
  },
  typography: { fontFamily: "'Raleway', serif" },
});
