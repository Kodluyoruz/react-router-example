import React from "react";
import "../App.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <Link to="/">Home</Link>
      <Link to="/contact">Contacts</Link>
      <NavLink to="/about" activeClassName="active">
        About
      </NavLink>
    </div>
  );
};

export default Navbar;
