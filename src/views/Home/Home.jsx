import React from 'react';
import { Container, Typography } from '@mui/material';
import classes from './style.module.scss';

const Home = () => {
  return (
    <Container maxWidth="md" className={classes.container}>
      <Typography className={classes.mainTitle} variant="h2">
        Acceso
      </Typography>
    </Container>
  );
};

export default Home;
