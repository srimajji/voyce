
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store';
import { feathersServices, feathersAuthentication } from './feathers'; // does feathers init
import App from './containers';
import './utils/react-tap-event';

// __processEnvNODE_ENV__ is replaced during the webpack build process
const nodeEnv = process.env.NODE_ENV; // eslint-disable-line no-undef, camelcase

console.log(`..This bundle was built for the ${nodeEnv} env.`); // eslint-disable-line no-console

// Initialize Redux
const store = configureStore();

// Sign in with the JWT currently in localStorage
if (localStorage['feathers-jwt']) {
	store.dispatch(feathersAuthentication.authenticate())
		.then(() => {
			//initLogger(store.dispatch, feathersServices.logs);
			//logger('info', 'Agent connected'); // todo You may want to remove this

		})
		.catch(err => {
			console.error('info', 'authenticate catch', err); // eslint-disable-line no-console
			return err;
		});
}

// Initialize App
const container = <AppContainer><App store={store} /></AppContainer>;
ReactDOM.render(
	container,
	document.getElementById('root')
);

// Initialize hot module
if (module.hot) {
	module.hot.accept('./containers/index', () => {
		const RootContainer = require('./containers').default;
		ReactDOM.render(
			<AppContainer>
				<RootContainer store={store} />
			</AppContainer>,
			document.getElementById('root')
		);
	})
}