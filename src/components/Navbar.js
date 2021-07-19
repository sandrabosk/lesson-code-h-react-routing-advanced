import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <NavLink exact to="/" activeClassName="selected"> Home </NavLink>
        <NavLink to="/about" activeClassName="selected"> About </NavLink>
        <NavLink to="/projects" activeClassName="selected"> Projects </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;