import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link, Stack, Button } from '@mui/material';
import './index.css';

const applySelected = (currentRoute, href) =>
  currentRoute === href ? 'selected' : 'nav-item ';

const Navbar = () => {
  const location = useLocation();

  const userIdCookie = document.cookie
    .split('; ')
    .find((row) => row.startsWith('userId='));
  const isLoggedIn = !!userIdCookie;

  const handleLogout = () => {
    document.cookie = 'userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    window.location.href = '/home';
  };

  return (
    <div className="nav-container">
      <nav className="navbar">
        <Stack className="row" direction="row" spacing={2}>
          {!isLoggedIn && (
            <Link
              className={`${applySelected(location.pathname, '/home')}`}
              href="/home"
              underline="none"
            >
              Home
            </Link>
          )}
          <Link
            className={`${applySelected(location.pathname, '/blog')}`}
            href="/blog"
            underline="none"
          >
            Blog
          </Link>
          {isLoggedIn && (
            <Button
              className="button-link"
              variant="text"
              onClick={handleLogout}
            >
              Cerrar sesión
            </Button>
          )}
        </Stack>
      </nav>
    </div>
  );
};

export default Navbar;
