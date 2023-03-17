import { NavLink } from "react-router-dom";

const setActive = ({ isActive }) => {
  return { color: isActive ? "orange" : "lightseagreen" };
};

function Header() {
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/" style={setActive}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" style={setActive}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={setActive}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup" style={setActive}>
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink to="/hooksignup" style={setActive}>
              Hook Sign Up
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
