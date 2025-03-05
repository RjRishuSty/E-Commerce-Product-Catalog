import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#012803",  
      light: "#049a4a",
    },
    secondary: {
      main: "#fff",
    },
    accent: {
      main: "#0400f2",
      light:'#ffc307',
      primary:'#fff'
    },
    background: {
      default: "#dcfedd",
      paper: "#ffffff",
    },
    text: {
      primary: "#ffffff",
      secondary: "#000000",
    },
  },
  typography: {
    fontFamily: "'Raleway', serif"
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#6afb76",
      light: "#012803",
    },
    secondary: {
      main: "#049a4a",
    },
    accent: {
      main: "#041fdb",
      light:'#e3ad05',
      primary:'#fff'
    },
    background: {
      default: "#012302",
      paper: "#014d05",
    },
    text: {
      primary: "#000",
      secondary: "#ffff",
    },
  },
  typography: {
    fontFamily: "'Raleway', serif",
  },
});
