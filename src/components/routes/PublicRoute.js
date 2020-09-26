import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { getAuthorization } from '../../redux/auth/auth-selectors';

const PublicRoute = ({ component: Component, ...routeProps }) => {
  const state = useSelector(state => state);
  const isAuthenticated = getAuthorization(state);

  return (
    <Route
      {...routeProps}
      render={props =>
        isAuthenticated && routeProps.restricted ? (
          <Redirect to="/contacts" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
