import { Box, Menu, MenuItem, Stack, Typography } from "@mui/material";
import Styles from "./Profile.module.css";
import React, { useContext, useState } from "react";
import { ThemeContexts } from "../../App";
import { Link, useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

const Profile = () => {
  const navigate = useNavigate(null);
  const { user, logout, formData } = useContext(ThemeContexts);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMouseEnter = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    localStorage.removeItem("login");
    navigate("/");
    return enqueueSnackbar("Logout your account!", { variant: "warning" });
  };
  return (
    <Stack component="section">
      <Box component="div" className={Styles.profile}>
        {user ? (
          <img
            src={user.picture}
            alt={user.name.length > 6 ? user.name.slice(0, 5) : user.name}
            className={Styles.profileImg}
            onMouseEnter={handleMouseEnter}
          />
        ) : (
          formData &&
          formData.fullname && (
            <Typography
              sx={{ fontWeight: 800, color: "text.dark" }}
              onMouseEnter={handleMouseEnter}
            >
              {formData.fullname.length > 6
                ? formData.fullname.slice(0, 6)
                : formData.fullname}
            </Typography>
          )
        )}
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
        <MenuItem component={Link} to="/profile">
          View Profile
        </MenuItem>
        <MenuItem onClick={user ? logout : handleLogout}>Logout</MenuItem>
      </Menu>
    </Stack>
  );
};

export default Profile;
