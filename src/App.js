import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <>
        <header>
          <Navbar />
        </header>
        <AppRoutes />

        <footer>
          <p>&copy; 2023 by Jess</p>
        </footer>
      </>
    </BrowserRouter>
  );
};

export default App;
