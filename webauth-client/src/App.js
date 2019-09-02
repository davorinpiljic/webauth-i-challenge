import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
//components
import Login from "./Components/Login";
import Register from "./Components/Register";
import Users from "./Components/Users";
import Home from "./Components/Home";

export default function App() {
  const [collapsed, setCollapse] = useState(true);

  function toggleNavbar() {
    setCollapse(!collapsed);
  }

  return (
    <div className="App">
      <Navbar color="faded" light>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <NavbarBrand className="mr-auto">
          <Link to="/" style={{ textDecoration: "none !important" }}>
            Webauth Client
          </Link>
        </NavbarBrand>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <br />
            <NavItem onClick={toggleNavbar}>
              <Link to="/auth/register" style={{ textDecoration: "none" }}>
                <p>Register </p>
              </Link>
            </NavItem>
            <NavItem onClick={toggleNavbar}>
              <Link to="/auth/login" style={{ textDecoration: "none" }}>
                <p>Login </p>
              </Link>
            </NavItem>
            <NavItem onClick={toggleNavbar}>
              <Link to="/users" style={{ textDecoration: "none" }}>
                <p>Users </p>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Route exact path="/" exact component={Home} />
      <Route exact path="/auth/register" component={Register} />
      <Route exact path="/auth/login" component={Login} />
      <Route exact path="/users" component={Users} />
    </div>
  );
}
