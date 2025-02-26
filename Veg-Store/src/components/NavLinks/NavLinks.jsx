import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

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
                color: isActive ? "white" : "black",
                fontWeight: 600,
                display: "block",
              })}
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
              <li key={item.name}>
                <NavLink
                  to={item.to}
                  end
                  style={({ isActive }) => ({
                    color: isActive ? "#9e00ff" : "white",
                    fontWeight: isActive ? "700" : "500",
                    fontSize: "1.1rem",
                    textDecoration: "none",
                    letterSpacing:"0.2px"
                  })}
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
