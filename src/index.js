import React from 'react';
import ReactDOM from 'react-dom';

import {
    ThemeProvider
} from 'react-jss';

import './modules/i18n';

import Main from './views/Main';

import theme from './styles/theme';

import './assets/css/normalize.css?v=8.0.0';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Main />
    </ThemeProvider>,
    document.getElementById('root')
);
