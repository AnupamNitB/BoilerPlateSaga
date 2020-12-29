import ActionTypes from '../actions/index';

export const signInStart = () => ({
  type: ActionTypes.SIGN_IN_START,
});

export const signInSuccess = (user) => ({
  type: ActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: ActionTypes.SIGN_IN_FAILURE,
  payload: error,
});
