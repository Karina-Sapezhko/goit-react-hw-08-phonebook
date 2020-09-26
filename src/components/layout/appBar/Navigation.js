import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAuthorization } from '../../../redux/auth/auth-selectors';
import '../../../index.css';

const Navigation = () => {
  const state = useSelector(state => state);
  const isAuthenticated = getAuthorization(state);

  return (
    <div className="box-menu">
      <NavLink
        activeClassName="nav-link-active"
        className="nav-link"
        exact
        to="/"
      >
        Home
      </NavLink>
      {isAuthenticated && (
        <NavLink
          activeClassName="nav-link-active"
          className="nav-link"
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
