import React from 'react';
import { Container, Typography } from '@mui/material';
import './home.css';
import Login from '../../components/Login/Login';

const Home = () => {
  return (
    <Container maxWidth="md" className="container">
      <Typography className="main-title" variant="h2">
        Acceso
      </Typography>
      <Login />
    </Container>
  );
};

export default Home;
