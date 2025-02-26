import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import Home from "./Pages/Home/Home";
import { createContext, useEffect, useState } from "react";
import { lightTheme, darkTheme } from "./theme";
import { ThemeProvider } from "@emotion/react";
export const ThemeContexts = createContext();

const App = () => {
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
      ],
    },
  ]);
  return (
    <ThemeContexts.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={selectedTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ThemeContexts.Provider>
  );
};

export default App;
