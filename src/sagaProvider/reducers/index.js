/**
 * @reducers
 * @description  : Combine All Reducers
 * @CreatedBy  : Anupam Gupta
 */

import {combineReducers} from 'redux';

import loaderReducer from './loaderReducer';

// combine all reducers
const rootReducer = combineReducers({
  loader: loaderReducer,
});
export default rootReducer;
