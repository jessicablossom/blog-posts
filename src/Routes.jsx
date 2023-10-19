import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './views/Home/Home';
import Blog from './views/Blog/Blog';

const RedirectHome = () => {
  const navigate = useNavigate();
  navigate('/home');
  return null;
};

const AppRoutes = () => (
  <Routes>
    <Route path="*" element={<RedirectHome />} />
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/blog" element={<Blog />} />
  </Routes>
);

export default AppRoutes;
