import React from 'react';
import Container from '@mui/material/Container';
import classes from './style.module.scss';

const Home = () => {
  return (
    <Container maxWidth="sm" className={classes.container}>
      <h1>Home</h1>
    </Container>
  );
};

export default Home;
