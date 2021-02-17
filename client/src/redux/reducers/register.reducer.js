import { REGISTER } from '../constants';

const initialState = {
  email: '',
  password: '',
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
