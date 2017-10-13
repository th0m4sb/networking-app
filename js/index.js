'use strict';

import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

import Router from './router';

console.disableYellowBox = true;

class Root extends Component {
  constructor() {
    super();

    this.state = {
      store: configureStore(),
    }
  }
  render() {
    return (
      <Provider store={this.state.store}>
        <View style={{flex: 1,}}>
          <StatusBar
            translucent={true}
            backgroundColor="rgba(0, 0, 0, 0.2)"
            barStyle="default"
          />
          <Router />
        </View>
      </Provider>
    );
  }
}
export default Root;