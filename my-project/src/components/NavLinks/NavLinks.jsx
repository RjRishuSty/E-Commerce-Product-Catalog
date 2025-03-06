import {  NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContexts } from "../../App";
import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
const NavLinks = ({ linkType }) => {
  const { user, logout } = useContext(ThemeContexts);
  let links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
    { name: "Products", to: "/products" },
  ];
  if (linkType === "sidebar" || linkType === "footer") {
    if (user) {
      links.push({ name: "Logout", to: "#", onClick: logout });
    } else {
      links.push(
        { name: "Login", to: "/login" },
        { name: "Signup", to: "/sign-up" }
      );
    }
  }

  return (
    <nav
      style={{
        width: "auto",
        height: "auto",
        display: "flex",
        justifyContent: "start",
        alignItems: "start",
        flexDirection: "column",
      }}
    >
      {links.map((item) =>
        item.name === "Logout" ? (
          linkType === "footer" ? null : (
            <Button
              variant="contained"
              startIcon={<LogoutIcon sx={{ color: "icon.main" }} />}
              sx={{ backgroundColor: "background.main", mt: 3 }}
              onClick={logout}
            >
              {item.name}
            </Button>
          )
        ) : (
          <NavLink
            to={item.to}
            key={item.name}
            style={({ isActive }) => ({
              color: isActive
                ? "#2a55e5"
                : linkType === "footer"
                ? "white"
                : "#DAC107",
              fontWeight: 600,
              marginBottom: "10px",
            })}
          >
            {item.name}
          </NavLink>
        )
      )}
    </nav>
  );
};

export default NavLinks;
