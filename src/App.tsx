import { LOCALES } from '18n/locales';
import { messages } from '18n/messages';
import { IntlProvider } from 'react-intl';

import React from 'react';

export const App = () => {
  const locale = LOCALES.ENGLISH;

  return (
    <IntlProvider messages={messages[locale]} locale={locale} defaultLocale={LOCALES.ENGLISH}>
      <></>
    </IntlProvider>
  );
};
