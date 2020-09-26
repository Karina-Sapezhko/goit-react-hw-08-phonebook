import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../../redux/auth/auth-operations';
import { geteName } from '../../../redux/auth/auth-selectors';
import LogoutButton from '../../../ui/LogoutButton';

const UserMenu = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const name = geteName(state);

  const handleClick = () => dispatch(logOut());
  return (
    <div>
      <span>Welcome, {name}</span>
      <LogoutButton handleClick={handleClick} type="button" text={'Log out'} />
    </div>
  );
};
export default UserMenu;
