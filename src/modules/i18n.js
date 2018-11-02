import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import {
    reactI18nextModule
} from 'react-i18next';

let productionBackend = {};
if (process.env.NODE_ENV === 'production') {
    productionBackend = {
        backend: {
            loadPath: '/cv/locales/{{lng}}/{{ns}}.json'
        }
    };
}

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
        ...productionBackend
    });

export default i18n;