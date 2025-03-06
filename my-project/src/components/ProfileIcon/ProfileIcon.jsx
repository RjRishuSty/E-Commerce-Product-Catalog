import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import { NavLink } from "react-router-dom";
const ProfileIcon = () => {
  return (
    <NavLink to='/profile'>
      <PersonIcon size="large" sx={{ color: "icon.main" }}/>
    </NavLink>
  );
};

export default ProfileIcon;
