import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import classes from './styles.module.scss';

const Loader = () => {
  return (
    <div className={classes.loaderContainer}>
      <CircularProgress size={100} thickness={2} color="error" />
    </div>
  );
};

export default Loader;
