import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import useCookie from './hooks/useCookie';
import Home from './views/Home/Home';
import Blog from './views/Blog/Blog';

const AppRoutes = () => {
  const userIdCookie = useCookie();

  return (
    <Routes>
      <Route path="*" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route
        path="/blog"
        element={userIdCookie ? <Blog /> : <Navigate to="/home" replace />}
      />
    </Routes>
  );
};

export default AppRoutes;
