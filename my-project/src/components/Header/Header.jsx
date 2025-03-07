import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import Logo from "../Logo/Logo";
import SideBar from "../SideBar/SideBar";
import { useContext } from "react";
import { ThemeContexts } from "../../App";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { Link } from "react-router-dom";
import Profile from "../UserProfile/Profile";
import Search from "../Search/Search";
import IconBtn from "../Icons/IconsBtn";
const Header = () => {
  const { isMobile, isSidebar, handleMenu, isAuthenticated } =
    useContext(ThemeContexts);

  return (
    <AppBar position="static" sx={{ p: 0.5, backgroundColor: "primary.main " }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Logo />
        {!isMobile && <Search />}

        <Box
          component="div"
          sx={{
            // border:'2px solid red',
            minWidth:'15%',
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IconBtn />

          {!isMobile && (
            <>
              {isAuthenticated ? (
                <Profile />
              ) : (
                <>
                  <Button
                    component={Link}
                    to="/login"
                    variant="text"
                    sx={{
                      textTransform: "capitalize",
                      fontWeight: 600,
                      letterSpacing: 0.5,
                      color:'text.dark',
                      marginRight:2
                    }}
                    startIcon={<LoginIcon sx={{color:'icon.main'}}/>}
                  >
                    Login
                  </Button>
                  <Button
                    component={Link}
                    to="/register"
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      fontWeight: 600,
                      letterSpacing: 0.5,
                      color:'text.dark',
                      backgroundColor:'background.main'
                    }}
                    endIcon={<HowToRegIcon sx={{color:'icon.main'}}/>}
                  >
                    Register
                  </Button>
                </>
              )}
            </>
          )}
        </Box>
        {/* Mobile Menu Button */}
        {isMobile && (
          <Box>
            <IconButton sx={{ color: "accent.primary" }}>
              <MenuSharpIcon onClick={handleMenu} sx={{ fontSize: "2rem" }} />
            </IconButton>
            {isSidebar && <SideBar />}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
