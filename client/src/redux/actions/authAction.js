import { LOGIN, LOG_OUT, REGISTER } from '../constants';

export const registerUser = (user) => ({
  type: REGISTER,
  user,
});

export const loginUser = () => ({
  type: LOGIN,
});

export const logOutUser = () => ({
  type: LOG_OUT,
});
