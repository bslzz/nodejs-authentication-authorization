// import { all } from 'redux-saga/effects';
// import { watchRegisterSaga } from './handlers/registerHandler';

import { takeEvery } from 'redux-saga/effects';
import { REGISTER } from '../redux/constants';
import { registerHandlerSaga } from './registerHandler.saga.';

// console.log(watchRegisterSaga);

// export default function* rootSaga() {
//   yield all[watchRegisterSaga()];
// }

export function* watchRegisterSaga() {
  yield takeEvery(REGISTER, registerHandlerSaga);
}
