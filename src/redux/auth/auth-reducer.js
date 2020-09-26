import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {

  loginSuccess,
  loginError,

  registerSuccess,
  registerError,

  logoutSuccess,
  logoutError,
 
  getUserSuccess,
  getUserError,
  notificationAuthAction,
} from './auth-actions';

const userState = { name: null, email: null };

const user = createReducer(userState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => userState,
  [getUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});

const setError = (_, { payload }) => payload;

const error = createReducer('', {
  [notificationAuthAction]: setError,
  [registerError]: setError,
  [loginError]: setError,
  [logoutError]: setError,
  [getUserError]: setError,
});

const isAuthenticated = createReducer(false, {
  [registerSuccess]: () => true,
  [loginSuccess]: () => true,
  [getUserSuccess]: () => true,
  [registerError]: () => false,
  [loginError]: () => false,
  [getUserError]: () => false,
  [logoutSuccess]: () => false,
});

export const userReducer = combineReducers({
  user,
  isAuthenticated,
  token,
  error,
});
