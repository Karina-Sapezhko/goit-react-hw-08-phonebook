import React from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import fadeLogoStyles from '../../../animationStyles/logo.module.css';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { getAuthorization } from '../../../redux/auth/auth-selectors';
import '../../../index.css';

const AppBar = () => {
  const state = useSelector(state => state);
  const isAuthenticated = getAuthorization(state);
  return (
    <div className="container-header">
      <CSSTransition
        in={true}
        appear={true}
        classNames={fadeLogoStyles}
        timeout={500}
        unmountOnExit
      >
        <h1 className="title-logo">PhoneBook</h1>
      </CSSTransition>
      <div className="box-nav">
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
      </div>
    </div>
  );
};
export default AppBar;
