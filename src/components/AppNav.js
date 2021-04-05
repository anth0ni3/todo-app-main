import React from "react";
import { NavLink } from "react-router-dom";
import "./assets/css/AppNav.css";

const AppNav = () => {
  return (
    <div className="app-nav">
      <NavLink exact activeClassName="active-link" to="/">
        Todo
      </NavLink>
      <NavLink exact activeClassName="active-link" to="/about">
        About
      </NavLink>
    </div>
  );
};

export default AppNav;
