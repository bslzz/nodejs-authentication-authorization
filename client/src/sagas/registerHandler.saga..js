import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { registerFail, registerSuccess } from '../redux/actions/authAction';

export function* registerHandlerSaga({ user }) {
  try {
    function registerRequestSaga() {
      return axios.post('http://localhost:5000/user/register', user);
    }
    const res = yield call(registerRequestSaga);

    yield put(registerSuccess(res.data.msg));
  } catch (error) {
    yield put(registerFail(error.response.data.msg));
  }
}
