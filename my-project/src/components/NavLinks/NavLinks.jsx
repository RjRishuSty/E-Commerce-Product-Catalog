import { Link, NavLink } from "react-router-dom";
import Styles from "./NavLinks.module.css";
import { useContext } from "react";
import { ThemeContexts } from "../../App";
import { Box, Button, Typography } from "@mui/material";

const NavLinks = ({ linkType }) => {
  const { user, logout } = useContext(ThemeContexts);
  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
    { name: "Products", to: "/products" },
  ];

  switch (linkType) {
    case "footer":
      return (
        <nav>
          {links.map((item) => (
            <NavLink
              to={item.to}
              key={item.name}
              end
              style={({ isActive }) => ({
                color: isActive ? "#ffc307" : "white",
                fontWeight: 600,
                display: "block",
                marginBottom: "0.8rem",
                fontSize:'1.1rem'
              })}
              onMouseEnter={(e) => (e.target.style.color = "#ffcc57")}
              onMouseLeave={(e) =>
                (e.target.style.color =
                  item.to === window.location.pathname
                    ? '"#ffc307"'
                    : "#ffffff")
              }
            >
              {user && (item.to === "/login" || item.to === "/sign-up")
                ? null
                : item.name}
            </NavLink>
          ))}
          {user && (
            <>
              <Box sx={{ mb: 1 }}>
                <Typography
                  component={Link}
                  to="/view-profile"
                  sx={{
                    color: "white",
                    fontWeight: 600,
                    cursor: "pointer",
                    fontSize:'1.1rem'
                  }}
                >
                  View Profile
                </Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <Typography
                  onClick={logout}
                  sx={{
                    color: "white",
                    fontWeight: 600,
                    cursor: "pointer",
                    textTransform:'capitalize',
                    fontSize:'1.1rem'
                  }}
                >
                  Logout
                </Typography>
              </Box>
            </>
          )}
        </nav>
      );

    case "header":
      return (
        <nav>
          <ul
            style={{
              display: "flex",
              gap: "20px",
              listStyle: "none",
              padding: 0,
            }}
          >
            {links.map((item) => (
              <li key={item.name} className={Styles.navItem}>
                <NavLink
                  to={item.to}
                  end
                  style={({ isActive }) => ({
                    color: isActive ? "#ffc307" : "#ffffff",
                    fontWeight: isActive ? "700" : "500",
                    fontSize: "1rem",
                    textDecoration: "none",
                    letterSpacing: "0.2px",
                  })}
                  onMouseEnter={(e) => (e.target.style.color = "#ffcc57")}
                  onMouseLeave={(e) =>
                    (e.target.style.color =
                      item.to === window.location.pathname
                        ? "ffc307"
                        : "#ffffff")
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      );

    default:
      return null;
  }
};

export default NavLinks;
