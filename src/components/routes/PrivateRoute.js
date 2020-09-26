import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { getAuthorization } from '../../redux/auth/auth-selectors';

const PrivateRoute = ({ component: Component, ...routeProps }) => {
  const state = useSelector(state => state);
  const isAuthenticated = getAuthorization(state);

  return (
    <Route
      {...routeProps}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
