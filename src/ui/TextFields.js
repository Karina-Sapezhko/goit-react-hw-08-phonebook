import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function TextFields({ type, label, value, setState }) {
  return (
    <TextField
      style={{
        width: '100%',
        margin: '10px',
      }}
      id="standard-basic"
      type={type}
      value={value}
      label={label}
      variant="outlined"
      onChange={({ target: { value } }) => setState(value)}
    />
  );
}
