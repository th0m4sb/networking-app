'use strict';

const initialState = {
  initialized: false,
};

export default (state = initialState, action = {}) => {
  let { type } = action;
  
  if (type === 'app/APP_INITIALIZED') {
    return {
      ...state,
      initialized: true,
    }
  }

  return state;
}