import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../../index.css';

const UserMenu = () => (
  <div className="box-menu">
    <NavLink
      activeClassName="nav-link-active"
      className="nav-link"
      to="/register"
    >
      Register
    </NavLink>
    <NavLink activeClassName="nav-link-active" className="nav-link" to="/login">
      Log In
    </NavLink>
  </div>
);
export default UserMenu;
