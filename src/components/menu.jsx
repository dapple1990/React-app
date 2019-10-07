import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Menu = () => (
  <div>
    <Navbar className="navbar-opacity" bg="light" variant="light">
      <Nav className="mr-auto">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/coffee">Facts</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Nav>
    </Navbar>
  </div>
);

export default Menu;
