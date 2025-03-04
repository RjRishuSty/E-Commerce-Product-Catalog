import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";

import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import NavLinks from "../NavLinks/NavLinks";
import LoginIcon from "@mui/icons-material/Login";
// import LogoutIcon from "@mui/icons-material/Logout";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import Mode from "../Mode/Mode";
import Logo from "../Logo/Logo";
import SideBar from "../SideBar/SideBar";
import { useContext } from "react";
import { ThemeContexts } from "../../App";
import { Link } from "react-router-dom";

const Header = () => {
  const { isMobile, isSidebar, handleMenu } = useContext(ThemeContexts);
  return (
    <AppBar position="static" sx={{ p: 0.5 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Logo />

        {!isMobile && <NavLinks linkType="header" />}
        {/* Login/register/logout Buttons */}
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Mode />
          {!isMobile && (
            <>
              <Button
              component={Link}
              to='/login'
                variant="text"
                color="inherit"
                sx={{
                  textTransform: "capitalize",
                  fontWeight: 600,
                  letterSpacing: 0.5,
                }}
                
                startIcon={<LoginIcon />}
              >
                Login
              </Button>
              <Button
              component={Link}
              to='/register'
                variant="text"
                color="inherit"
                sx={{
                  textTransform: "capitalize",
                  fontWeight: 600,
                  letterSpacing: 0.5,
                }}
                endIcon={<HowToRegIcon />}
              >
                Register
              </Button>
              {/* <Button
                variant="text"
                color="inherit"
                sx={{
                  textTransform: "capitalize",
                  fontWeight: 600,
                  letterSpacing: 0.5,
                }}
                endIcon={<HowToRegIcon />}
              >
                Logout
              </Button> */}
            </>
          )}
        </Box>
        {/* Mobile Menu Button */}
        {isMobile && (
          <Box>
            <IconButton color="inherit">
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
