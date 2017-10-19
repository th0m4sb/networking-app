'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import AppScreen from '../app';

const mapNavigationParamsToProps = (SomeComponent) => {
  return (props) => {
    const {navigation} = props;
    const {state: {params}} = navigation;
    return <SomeComponent {...props} {...params} />
  }
};

export const AppNavigator = StackNavigator({
  AppScreen: { screen: mapNavigationParamsToProps(AppScreen) },
}, {
  initialRouteName: 'AppScreen',
  headerMode: 'none',
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator
    navigation={addNavigationHelpers({ dispatch, state: nav })}
  />
);

const mapStateToProps = store => ({
  nav: store.navigation,
});

export default connect(mapStateToProps)(AppWithNavigationState);