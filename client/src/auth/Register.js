import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userInput;

  const registerChangeHandler = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5000/user/register',
        userInput
      );
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <form onSubmit={registerSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={registerChangeHandler}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={registerChangeHandler}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
