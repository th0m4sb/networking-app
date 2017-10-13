'use strict';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from '../reducers';

export default function configureStore() {
  const store = createStore(
    reducers,
    undefined,
    composeWithDevTools(
      applyMiddleware(thunk)
    ),
  );

  return store;
}
