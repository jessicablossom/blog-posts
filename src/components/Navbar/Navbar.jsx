import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link, Stack } from '@mui/material';
import './index.css';

const applySelected = (currentRoute, href) =>
  currentRoute === href ? 'selected' : 'nav-item ';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="nav-container">
      <nav className="navbar">
        <Stack className="row" direction="row" spacing={2}>
          <Link
            className={`${applySelected(location.pathname, '/home')}`}
            href="/home"
            underline="none"
          >
            Home
          </Link>
          <Link
            className={`${applySelected(location.pathname, '/blog')}`}
            href="/blog"
            underline="none"
          >
            Blog
          </Link>
        </Stack>
      </nav>
    </div>
  );
};

export default Navbar;
