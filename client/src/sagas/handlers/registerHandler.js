import { call, takeEvery } from 'redux-saga/effects';
import { REGISTER } from '../../redux/constants';
import { registerRequestSaga } from '../requests/registerRequest';

console.log(registerRequestSaga);
function* registerHandlerSaga() {
  try {
    const user = yield call(registerRequestSaga);
    console.log(user);
  } catch (error) {
    console.warn(error);
  }
}

export function* watchRegisterSaga() {
  yield takeEvery(REGISTER, registerHandlerSaga);
}
