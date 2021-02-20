import { REGISTER, REGISTER_FAIL, REGISTER_SUCCESS } from '../constants';

const initialState = {
  isLoggedIn: false,
  successMsg: ' ',
  errorMsg: ' ',
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        successMsg: ' ',
        errorMsg: ' ',
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        successMsg: action.success,
        errorMsg: '',
      };
    case REGISTER_FAIL:
      return {
        ...state,
        errorMsg: action.error,
        successMsg: '',
      };
    default:
      return state;
  }
};

export default registerReducer;
