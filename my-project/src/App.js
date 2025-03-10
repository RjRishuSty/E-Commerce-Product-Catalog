import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import Home from "./Pages/Home/Home";
import { createContext, useCallback, useEffect, useState } from "react";
import { lightTheme, darkTheme } from "./theme";
import { ThemeProvider } from "@emotion/react";
import About from "./Pages/About/About";
import { useMediaQuery } from "@mui/material";
import RegisterPage from "./Pages/Register/RegisterPage";
// AUTH0
import { useAuth0 } from "@auth0/auth0-react";
import { enqueueSnackbar } from "notistack";
import UserProfile from "./Pages/UserProfile/UserProfile";
import LoginPage from "./Pages/Login/LoginPage";
import axios from "axios";
export const ThemeContexts = createContext();

const App = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [isSidebar, setIsSideBar] = useState(false);
  const [formData, setFormData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState(()=>{
    const saveFavorite = JSON.parse(localStorage.getItem('favoriteProducts'));
    return saveFavorite || [];
  })
  const [isFavorite,setIsFavorite] = useState(()=>{
    if (!products || !favoriteProducts.length) return false;
  return favoriteProducts.some((item) => item.id === products.id);
  });

  console.log('fave',isFavorite);
  const [cartProducts, setCartProducts] = useState(()=>{
    const saveCart = JSON.parse(localStorage.getItem('cartProducts'));
    return saveCart || []
  });
  // LOgin with google (Auth0)
  const { user, isAuthenticated, logout, loginWithRedirect } = useAuth0();
  // product....
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`https://dummyjson.com/products`);
        setProducts(response.data.products);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);
  // Handle Menu open or close.............
  const handleMenu = () => {
    console.log("HandleMenubar");
    setIsSideBar(!isSidebar);
  };

  const [mode, setMode] = useState(
    () => localStorage.getItem("AppMode") || "light"
  );
  useEffect(() => {
    localStorage.setItem("AppMode", mode);
  }, [mode]);
  useEffect(() => {
    const getFormData = JSON.parse(localStorage.getItem("newUser"));
    setFormData(getFormData);
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem("login", JSON.stringify(true));
      enqueueSnackbar("Login successfully", { variant: "success" });
    } else {
      localStorage.removeItem("login");
    }
  }, [isAuthenticated]);

  // TODO: Add to Cart..................

  const handleAddToCart = useCallback((e) => {
    console.log("cart Handler");
    if (!isAuthenticated || !JSON.parse(localStorage.getItem("login"))) {
      enqueueSnackbar("Please log in to add items to your cart!", {
        variant: "error",
      });
      return;
    }
    const selectedProduct = products.find(
      (item) => item.id === Number(e.target.value)
    );

    if (selectedProduct) {
      const alreadyInCart = cartProducts.some(
        (item) => item.id === selectedProduct.id
      );

      if (alreadyInCart) {
        enqueueSnackbar("Already Exists in Cart", { variant: "warning" });
      } else {
        setCartProducts((prev) => [...prev, selectedProduct]);
        enqueueSnackbar("Product added to cart!", { variant: "success" });
      }
    }
  },[isAuthenticated, products])

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);

  // TODO: Favorite Product ..........................................

  const handleFavoriteProducts = (e)=>{
    console.log("Favorite Handler");
    if (!isAuthenticated || !JSON.parse(localStorage.getItem("login"))) {
      enqueueSnackbar("Please log in to add items to your Favorite!", {
        variant: "error",
      });
      return;
    }
    const selectedProduct = products.find((item)=>item.id === Number(e.target.value));
    if(selectedProduct){
      const alreadyInFav = favoriteProducts.some((item)=>item.id === selectedProduct.id);
      if (alreadyInFav) {
        enqueueSnackbar("Already Exists in Favorite", { variant: "warning" });
      } else {
        setFavoriteProducts((prev) => [...prev, selectedProduct]);
        enqueueSnackbar("Product added to Favorite!", { variant: "success" });
      }
    }
  }
  useEffect(()=>{
    localStorage.setItem('favoriteProducts',JSON.stringify(favoriteProducts));
  },[favoriteProducts])

  console.log("Favorite",favoriteProducts)
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
      element: <LoginPage />,
    },
    { path: "/register", element: <RegisterPage /> },
  ]);
  return (
    <ThemeContexts.Provider
      value={{
        mode,
        setMode,
        formData,
        isMobile,
        isSidebar,
        setIsSideBar,
        handleMenu,
        handleAddToCart,
        handleFavoriteProducts,
        isFavorite,
        user,
        isAuthenticated,
        logout,
        loginWithRedirect,
        isLoading,
        cartProducts,
        products,
      }}
    >
      <ThemeProvider theme={selectedTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ThemeContexts.Provider>
  );
};

export default App;
