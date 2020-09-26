import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../index.css';
import { getAuthorization } from '../redux/auth/auth-selectors';

const HomePage = () => {
  const state = useSelector(state => state);
  const isAuthenticated = getAuthorization(state);
  return (
    <div className="container-home">
      <p className="text-home">
        «PhoneBook» is a simple contacts application.You can add people contact
        informations to the «PhoneBook». You can also delete your phone number.
      </p>
      <p className="text-home">Add new phone numbers using «PhoneBook»!</p>
      {isAuthenticated ? (
        <NavLink className="nav-link-home" to="/contacts">
          Contacts
        </NavLink>
      ) : (
        <div className="box-menu">
          <NavLink className="nav-link-home" to="/register">
            Register
          </NavLink>
          <NavLink className="nav-link-home" to="/login">
            Log In
          </NavLink>
        </div>
      )}
    </div>
  );
};
export default HomePage;
