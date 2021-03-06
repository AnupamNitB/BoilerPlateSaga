import {all, call} from 'redux-saga/effects';
import {loginSaga} from './sagas/login-saga';

export default function* rootSaga() {
  yield all([call(loginSaga)]);
}
