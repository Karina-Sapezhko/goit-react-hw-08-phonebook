import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function MainButton({ type, text }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button type={type} variant="contained" color="primary">
        {text}
      </Button>
    </div>
  );
}
