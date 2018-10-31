import React from 'react';
import ReactDOM from 'react-dom';

import {
	Route,
	Switch,
	Router
} from 'react-router-dom';

import {
	ThemeProvider
} from 'react-jss';

import {
	createBrowserHistory
} from 'history';

import Main from './views/Main';

import theme from './styles/theme';

import './assets/css/normalize.css?v=8.0.0';

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<Main />
	</ThemeProvider>,
	document.getElementById('root')
);
