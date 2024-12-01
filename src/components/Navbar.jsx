import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "../Navbar.css";

function Navbar() {
  return (
    <header>
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Marvel Logo" />
        </div>

        {/* Liens de navigation */}
        <nav className="nav-links">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Personnages
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/comics"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Comics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favorites"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Favoris
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
