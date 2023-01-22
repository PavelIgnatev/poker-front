import React, { useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { LOCALES } from '18n/locales';
import { messages } from '18n/messages';
import { getAccessToken } from 'store/token';
import Pages from 'pages';
import 'store';

import 'assets/style/index.scss';

const App = () => {
  const locale = LOCALES.ENGLISH;

  useEffect(() => {
    getAccessToken();
  }, []);

  return (
    <IntlProvider messages={messages[locale]} locale={locale} defaultLocale={LOCALES.ENGLISH}>
      <Pages />
    </IntlProvider>
  );
};

export default App;
