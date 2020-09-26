import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/auth-operations';
import MainButton from '../ui/MainButton';
import TextFields from '../ui/TextFields';
import '../index.css';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const hendleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
  };
  return (
    <div className="box-form">
      <h2>Register an account</h2>
      <form onSubmit={hendleSubmit} className="form-auth" autoComplete="off">
        <TextFields
          type={'text'}
          label="name"
          value={name}
          setState={setName}
        />
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
        <MainButton type="submit" text="register" />
      </form>
    </div>
  );
};
export default RegisterPage;
