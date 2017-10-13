'use strict';

import { AppNavigator } from '../router';
import { NavigationActions } from 'react-navigation';

export default (state, action) => {
  const {type, routeName} = action;
  
  if (state && type === NavigationActions.NAVIGATE && routeName === state.routes[state.routes.length - 1].routeName) {
    return state;
  }

  if (type === "Navigation/custom") {
    const routes = [
      ...state.routes,
    ];
    return {
      ...state,
      routes: routes,
      index: routes.length - 1,
    };
  }

  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
}