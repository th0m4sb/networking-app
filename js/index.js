'use strict';

import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';

import I18nProvider from './components/i18n';

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
        <I18nProvider>
          <View style={{flex: 1,}}>
            <StatusBar
              translucent={true}
              backgroundColor="rgba(0, 0, 0, 0.2)"
              barStyle="default"
            />
            <Router />
          </View>
        </I18nProvider>
      </Provider>
    );
  }
}
export default Root;