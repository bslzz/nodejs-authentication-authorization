import {
  LOGIN,
  LOG_OUT,
  REGISTER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from '../constants';

export const registerUser = (user) => ({
  type: REGISTER,
  user,
});
export const registerSuccess = (success) => ({
  type: REGISTER_SUCCESS,
  success,
});
export const registerFail = (error) => ({
  type: REGISTER_FAIL,
  error,
});

export const loginUser = () => ({
  type: LOGIN,
});

export const logOutUser = () => ({
  type: LOG_OUT,
});
