/**
 * @description :  ''
 * @param: initial states and payload
 * @return : new states for store
 * @author Antino Lab PVT.LTD.
 */

import ActionTypes from '../actions/index';

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };

    case ActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
