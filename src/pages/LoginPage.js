import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/auth-operations';
import TextFields from '../ui/TextFields';
import '../index.css';
import MainButton from '../ui/MainButton';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const hendleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
  };
  return (
    <div className="box-form">
      <h2>User account</h2>
      <h3>Log in using your email and password</h3>
      <form onSubmit={hendleSubmit} className="form-auth" autoComplete="off">
        <TextFields
          type={'email'}
          label="email"
          value={email}
          setState={setEmail}
        />
        <TextFields
          type={'password'}
          label="password"
          value={password}
          setState={setPassword}
        />
        <MainButton type="submit" text="log in" />
      </form>
    </div>
  );
};
export default LoginPage;
