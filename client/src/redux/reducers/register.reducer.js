import { REGISTER } from '../constants';

const initialState = {
  users: [],
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        users: action.user,
      };
    default:
      return state;
  }
};

export default registerReducer;
