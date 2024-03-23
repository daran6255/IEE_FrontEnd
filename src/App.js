import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.css';

import Route from './routes';
import LayoutComponent from './pages/dashboard';
import Login from './pages/login';

const App = () => {
  // State to track whether the user is logged in or not
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle successful login
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Route />
  );
};

export default App;
