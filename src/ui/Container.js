import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function BoxContainer({ maxWidth, children }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={maxWidth}>
        <Typography
          component="div"
          style={{
            backgroundColor: '#ffffff',
            height: 'auto',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            padding: '40px',
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          {children}
        </Typography>
      </Container>
    </React.Fragment>
  );
}
