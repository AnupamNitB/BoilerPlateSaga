import {takeLatest, put, all, call} from 'redux-saga/effects';

import ActionTypes from '../actions/index';

import {signInSuccess, signInFailure} from '../actions/index';

export function* loginApi() {
  console.log('i am fired');
}
