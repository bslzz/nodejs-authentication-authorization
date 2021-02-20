import { REGISTER } from '../constants';

const initialState = {
  isLoggedIn: false,
  errorMessage: '',
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default registerReducer;
