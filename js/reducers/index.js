'use strict';
import {combineReducers} from 'redux';
import app from './app';
import navigation from './navigation';

const appReducer = combineReducers({
  app,
  navigation,
});

const rootReducer = (state, action) => {
  let { type } = action;
  if (type === 'app/CLEAR_CACHE') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer
