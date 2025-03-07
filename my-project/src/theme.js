import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "rgba(250, 250, 250,95)",  
      light: "rgb(227, 227, 229)",
      dark:'rgb(44, 42, 42)'
    },
    icon:{
      main:'rgb(34, 193, 3)'
    },
    background:{
      main:'rgba(241, 235, 235,90)',
      light:"rgb(239, 239, 239)",
      dark:'rgb(111, 109, 109)'
    },
     text:{
      main:'rgb(59, 57, 57)',
      light:"rgb(134, 132, 132)",
      dark:'rgb(5, 5, 5)'
    }
  },
  typography: {
    fontFamily: "'Raleway', serif"
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "rgb(49, 48, 48)",
      light: "rgb(56, 56, 57)",
      dark:' rgb(72, 72, 72)'
    },
    icon:{
      main:'rgb(34, 193, 3)'
    },
    background:{
      main:'rgb(59, 57, 57)',
      light:"rgb(134, 132, 132)",
      dark:'rgb(5, 5, 5)'
    },
     text:{
      main:'rgb(244, 243, 243)',
      light:"rgb(188, 186, 186)",
      dark:'rgb(237, 234, 234)'
    }
  },
  typography: {
    fontFamily: "'Raleway', serif",
  },
});
