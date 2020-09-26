import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export default function ListItemContact({ name, number, id, handleClick }) {
  const [secondary, setSecondary] = React.useState(false);

  return (
    <div
      style={{
        display: 'flex',
        borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
        alignItems: 'center',
        width: '600px',
        padding: '0 60px',
      }}
    >
      <ListItemText
        primary={`${name} :   ${number}`}
        secondary={secondary ? 'Secondary text' : null}
      />
      <IconButton
        edge="end"
        aria-label="delete"
        onClick={() => handleClick(id)}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
}
