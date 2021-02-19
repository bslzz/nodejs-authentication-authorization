import { combineReducers } from 'redux';
import registerReducer from './register.reducer';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
  auth: registerReducer,
  form: reduxFormReducer,
});

export default rootReducer;
