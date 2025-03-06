import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import Home from "./Pages/Home/Home";
import { createContext, useEffect, useState } from "react";
import { lightTheme, darkTheme } from "./theme";
import { ThemeProvider } from "@emotion/react";
import About from "./Pages/About/About";
import { useMediaQuery } from "@mui/material";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
// AUTH0
import { useAuth0 } from "@auth0/auth0-react";
import { enqueueSnackbar } from "notistack";
import UserProfile from "./Pages/UserProfile/UserProfile";
export const ThemeContexts = createContext();

const App = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [isSidebar, setIsSideBar] = useState(false);
  // LOgin with google (Auth0)
  const {user, isAuthenticated,logout,loginWithRedirect} = useAuth0();
  
  // Handle Menu open or close.............
  const handleMenu = () => {
    setIsSideBar(!isSidebar);
  };

  const [mode, setMode] = useState(
    () => localStorage.getItem("AppMode") || "light"
  );
  useEffect(() => {
    localStorage.setItem("AppMode", mode);
  }, [mode]);

  useEffect(() => {
    if(user){
      return enqueueSnackbar("Login successfully", {variant:'success'})
    }
  },[user]);

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
        {
          path: "/profile",
          element: <UserProfile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    { path: "/sign-up", element: <Register /> },
  ]);
  return (
    <ThemeContexts.Provider
      value={{ mode, setMode, isMobile, isSidebar, setIsSideBar, handleMenu,user, isAuthenticated,logout,loginWithRedirect }}
    >
      <ThemeProvider theme={selectedTheme}>
        <RouterProvider router={router}/>
      </ThemeProvider>
    </ThemeContexts.Provider>
  );
};

export default App;
