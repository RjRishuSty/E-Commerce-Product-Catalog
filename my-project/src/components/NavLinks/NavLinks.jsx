import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Styles from "./NavLinks.module.css";

const NavLinks = ({ linkType }) => {
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
              })}
              onMouseEnter={(e) => (e.target.style.color = "#ffcc57")}
              onMouseLeave={(e) =>
                (e.target.style.color =
                  item.to === window.location.pathname
                    ? '"#ffc307"'
                    : "#ffffff")
              }
            >
              {item.name}
            </NavLink>
          ))}
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

NavLinks.propTypes = {
  linkType: PropTypes.string.isRequired,
};

export default NavLinks;
