import 'intl';
import moment from 'moment';
import {addLocaleData} from 'react-intl';
import frLocaleData from 'react-intl/locale-data/fr';
import enLocaleData from 'react-intl/locale-data/en';

import 'moment/locale/fr';
import 'moment/locale/en-gb';

import fr from '../../assets/i18n/fr.json';
import en from '../../assets/i18n/en.json';

export const DEFAULT_LOCALE = 'fr';

const TRANSLATIONS = {
  fr,
  en,  
};

addLocaleData(frLocaleData);
addLocaleData(enLocaleData);

export function getTranslations(locale) {
  moment.locale(locale || DEFAULT_LOCALE);

  return TRANSLATIONS[locale] || TRANSLATIONS[DEFAULT_LOCALE];
}
