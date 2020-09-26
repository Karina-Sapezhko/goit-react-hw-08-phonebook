import React from 'react';
import Button from '@material-ui/core/Button';


export default function LogoutButton({ text, handleClick, type }) {
  return (
    <Button
      style={{
        color: '#ffffff',
        border: '1px solid #ffffff',
        marginLeft: '10px',
      }}
      type={type}
      variant="outlined"
      onClick={handleClick}
    >
      {text}
    </Button>
  );
}
