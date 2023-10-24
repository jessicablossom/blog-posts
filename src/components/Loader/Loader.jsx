import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <CircularProgress size={100} thickness={2} color="error" />
    </div>
  );
};

export default Loader;
