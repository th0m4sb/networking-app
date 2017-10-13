'use strict';

import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from '../reducers';

export default function configureStore(onComplete) {
  const store = createStore(
    reducers,
    undefined,
    composeWithDevTools(
      applyMiddleware(thunk)
    ),
  );

  return store;
}
