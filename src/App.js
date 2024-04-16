import React from 'react';
import { ToastContainer } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.css';


import Route from './routes';

const App = () => {
  return (
    <React.Fragment>
      <Route />
      <ToastContainer />
    </React.Fragment>
  );
};

export default App;
