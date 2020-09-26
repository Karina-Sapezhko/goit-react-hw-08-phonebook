import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { useDispatch } from 'react-redux';
import { getUser } from './redux/auth/auth-operations';
import PrivateRoute from './components/routes/PrivateRoute';
import PublicRoute from './components/routes/PublicRoute';
import { Spinner } from './components/spinner/Spinner';
import Notification from './components/notification/Notification';

const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));
const NotFoundPages = lazy(() => import('./pages/NotFoundPages'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <Layout>
      <Notification />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <PublicRoute path="/register" restricted component={RegisterPage} />
          <PublicRoute path="/login" restricted component={LoginPage} />
          <PrivateRoute path="/contacts" component={ContactsPage} />
          <Route component={NotFoundPages} />
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
