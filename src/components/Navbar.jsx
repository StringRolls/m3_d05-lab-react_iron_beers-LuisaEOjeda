import React from "react";
import { NavLink } from "react-router-dom";

//import home from "../assets/NavBar.logo.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink exact to="/">
        🏠
      </NavLink>
    </div>
  );
}
