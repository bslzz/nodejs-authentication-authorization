import { call, takeEvery } from 'redux-saga/effects';
import { REGISTER } from '../../redux/constants';
import { registerRequestSaga } from '../requests/registerRequest';

console.log(registerRequestSaga);
function* registerHandlerSaga({ user }) {
  try {
    console.log(user);
    yield call(registerRequestSaga);
  } catch (error) {
    console.warn(error);
  }
}

export function* watchRegisterSaga() {
  yield takeEvery(REGISTER, registerHandlerSaga);
}
