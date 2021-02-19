import React, { useState } from 'react';
// import axios from 'axios';

const Login = () => {
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userInput;

  const loginChangeHandler = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post(
      //   'http://localhost:5000/user/login',
      //   userInput
      // );
    } catch (error) {
      console.warn(error);
    }
  };
  return (
    <form onSubmit={loginSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={loginChangeHandler}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={loginChangeHandler}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
