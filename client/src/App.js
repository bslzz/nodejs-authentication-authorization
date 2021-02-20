import React from 'react';
import Routes from './Routes';
import axios from 'axios';
import Register from './auth/Register';
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <>
      <Routes />
      <Register />
    </>
  );
};

export default App;
