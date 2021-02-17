import { combineReducers } from 'redux';
import registerReducer from './register.reducer';

const rootReducer = combineReducers({
  auth: registerReducer,
});

export default rootReducer;
