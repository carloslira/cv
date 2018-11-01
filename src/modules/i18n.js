import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import {
    reactI18nextModule
} from 'react-i18next';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(reactI18nextModule)
    .init({
        debug: true,
        fallbackLng: 'en-US',
        ns: ['translations'],
        defaultNS: 'translations',
        react: {
            wait: true
        },
        backend: {
            loadPath: '/cv/locales/{{lng}}/{{ns}}.json'
        }
    });

export default i18n;