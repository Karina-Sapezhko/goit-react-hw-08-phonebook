import axios from 'axios';
import {
  loginRequest,
  loginSuccess,
  loginError,
  registerRequest,
  registerSuccess,
  registerError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getUserRequest,
  getUserSuccess,
  getUserError,
} from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = dataUser => async dispatch => {
  dispatch(registerRequest());
  try {
    const { data } = await axios.post('/users/signup', dataUser);
    token.set(data.token);
    dispatch(registerSuccess(data));
  } catch (error) {
    dispatch(registerError(error.message));
  }
};

export const logIn = dataUser => async dispatch => {
  dispatch(loginRequest());
  try {
    const { data } = await axios.post('/users/login', dataUser);
    token.set(data.token);
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

export const logOut = () => async dispatch => {
  dispatch(logoutRequest());
  try {
    await axios.post('/users/logout');
    token.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

export const getUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) return;

  token.set(persistedToken);
  dispatch(getUserRequest());

  try {
    const { data } = await axios.get('/users/current');
    dispatch(getUserSuccess(data));
  } catch (error) {
    dispatch(getUserError(error.message));
  }
};
