import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Customer from './pages/Customer';
import Home from './pages/Home';
import Login from './auth/Login';
import Register from './auth/Register';

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/customer" component={Customer}>
          <Customer />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
