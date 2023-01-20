import React from 'react';
import { IntlProvider } from 'react-intl';
import { LOCALES } from '18n/locales';
import { messages } from '18n/messages';
import Pages from 'pages';
import { useEffect } from 'react';
import axiosInstance from 'utilities/axiosInstance';

const App = () => {
  const locale = LOCALES.ENGLISH;

  useEffect(() => {
    axiosInstance.get('');
  }, []);

  return (
    <IntlProvider messages={messages[locale]} locale={locale} defaultLocale={LOCALES.ENGLISH}>
      <Pages />
    </IntlProvider>
  );
};

export default App;
