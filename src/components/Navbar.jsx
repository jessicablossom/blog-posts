import React from 'react';
import { Link } from 'react-router-dom';
import classes from './styles.module.scss';

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <ul>
        <li className={classes.item}>
          <Link to="/home">Home</Link>
        </li>
        <li className={classes.item}>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
