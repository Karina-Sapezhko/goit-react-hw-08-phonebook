import React from 'react';
import BoxContainer from '../../ui/Container';
import AppBar from './appBar/AppBar';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <AppBar />
      </header>

      <main>
        <BoxContainer maxWidth={'md'} children={children} />
      </main>
    </>
  );
};
export default Layout;
