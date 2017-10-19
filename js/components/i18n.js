'use strict';
import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import { IntlProvider } from 'react-intl';

import {getTranslations} from '../i18n';

export default class I18nProvider extends PureComponent {

  render() {
    const locale = 'fr';

    return (
      <IntlProvider
        locale={locale}
        textComponent={Text}
        messages={getTranslations(locale)}
      >
        { this.props.children }
      </IntlProvider>
    );
  }
}
