import { NavLink, Link } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
  let activeStyle = {
    fontWeight: 500,
    transform: "scale(1.04)",
    transition: "transform 0.2s ease",
    color: "royalblue",
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <div className="navbar__title">MERNitems</div>
      </Link>
      <ul className="navbar__ul">
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Item List
        </NavLink>
        <NavLink
          to="/add-item"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Add Item
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
