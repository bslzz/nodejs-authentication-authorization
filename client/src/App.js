import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Customer from './pages/Customer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}>
          Home
        </Route>
        <Route path="/register" component={Register}>
          Register
        </Route>
        <Route path="/login" component={Login}>
          Login
        </Route>
        <Route path="/customer" component={Customer}>
          Customer
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
