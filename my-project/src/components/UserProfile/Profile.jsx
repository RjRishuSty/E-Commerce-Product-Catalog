import { Box, Menu, MenuItem, Stack } from "@mui/material";
import Styles from "./Profile.module.css";
import React, { useContext, useState } from "react";
import { ThemeContexts } from "../../App";

const Profile = () => {
  const { user, logout } = useContext(ThemeContexts);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMouseEnter = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Stack component="section">
      <Box component="div" className={Styles.profile}>
        <img
          src={user.picture}
          alt={user.name.length > 6 ? user.name.slice(0, 5) : user.name}
          className={Styles.profileImg}
          onMouseEnter={handleMouseEnter}
        />
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        onMouseLeave={handleClose}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: "150px",
            borderRadius: "8px",
          },
        }}
      >
        <MenuItem>View Profile</MenuItem>
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </Stack>
  );
};

export default Profile;
