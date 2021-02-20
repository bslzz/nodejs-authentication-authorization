import React from 'react';
import Routes from './Routes';
import axios from 'axios';

axios.defaults.withCredentials = true;

const App = () => {
  return (
    <>
      <Routes />
    </>
  );
};

export default App;
