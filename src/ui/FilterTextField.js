import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function FilterTextField({
  handleFilterChange,
  value,
  type,
  label,
}) {
  return (
    <TextField
      style={{
        width: '500px',
      }}
      id="standard-basic"
      label={label}
      value={value}
      type={type}
      onChange={handleFilterChange}
    />
  );
}
