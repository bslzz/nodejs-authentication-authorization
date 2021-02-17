import { watchRegisterSaga } from './handlers/registerHandler';

export default function* rootSaga() {
  yield [watchRegisterSaga()];
}
