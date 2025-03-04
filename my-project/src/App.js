import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import Home from "./Pages/Home/Home";
import { createContext, useEffect, useState } from "react";
import { lightTheme, darkTheme } from "./theme";
import { ThemeProvider } from "@emotion/react";
import About from "./Pages/About/About";
import { useMediaQuery } from "@mui/material";
export const ThemeContexts = createContext();

const App = () => {
  const isMobile = useMediaQuery("(max-width:800px)");
  const [isSidebar, setIsSideBar] = useState(false);
  const handleMenu = () => {
    setIsSideBar(!isSidebar);
  };

  const [mode, setMode] = useState(
    () => localStorage.getItem("AppMode") || "light"
  );
  useEffect(() => {
    localStorage.setItem("AppMode", mode);
  }, [mode]);

  const selectedTheme = mode === "light" ? lightTheme : darkTheme;

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);
  return (
    <ThemeContexts.Provider
      value={{ mode, setMode, isMobile, isSidebar, setIsSideBar, handleMenu }}
    >
      <ThemeProvider theme={selectedTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ThemeContexts.Provider>
  );
};

export default App;
