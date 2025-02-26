import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar
} from "@mui/material";

import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import NavLinks from "../NavLinks/NavLinks";
import Mode from "../Mode/Mode";
import { useState } from "react";
import Logo from "../Logo/Logo";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{p:0.5}}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo Section */}
        <Logo/>
        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <NavLinks linkType="header" />
        </Box>

        {/* Login/Logout Buttons */}
        <Box>
          <Mode/>
          <Button variant="text" color="inherit">
            Login
          </Button>
          <Button variant="text" color="inherit">
            Logout
          </Button>
        </Box>

        {/* Mobile Menu Button */}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton color="inherit" onClick={handleMenuOpen}>
            <MenuSharpIcon />
          </IconButton>
          <Menu
            id="mobile-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            keepMounted
          >
            <MenuItem onClick={handleMenuClose}>
              <NavLinks linkType="header" />
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
