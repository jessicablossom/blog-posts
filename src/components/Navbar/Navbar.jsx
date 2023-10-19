import React from 'react';

import { Link, Stack } from '@mui/material';
import classes from './styles.module.scss';

const Navbar = () => {
  return (
    <div className={classes.navContainer}>
      <nav className={classes.navbar}>
        <Stack className={classes.row} direction="row" spacing={2}>
          <Link className={classes.item} href="/home" underline="none">
            Home
          </Link>
          <Link className={classes.item} href="/blog" underline="none">
            Blog
          </Link>
        </Stack>
      </nav>
    </div>
  );
};

export default Navbar;
