
/* global io, window */

import feathers from 'feathers-client';
import reduxifyServices, { getServicesStatus } from 'feathers-reduxify-services';
import reduxifyAuthentication from 'feathers-reduxify-authentication';

import { mapServicePathsToNames, prioritizedListServices } from './service';

const socket = io({ path: '/ws/', transports: ['websocket'] });

// Configure feathers-client
const app = feathers()
	.configure(feathers.socketio(socket))
	.configure(feathers.hooks())
	.configure(feathers.authentication({
		storage: window.localStorage, // store the token in localStorage and initially sign in with that
	}));

socket.io.engine.on('upgrade', function (transport) {
	console.log('transport changed');
	app.authenticate();
});

export default app;

// Reduxify feathers-authentication
export const feathersAuthentication = reduxifyAuthentication(app,
	{ isUserAuthorized: (user) => true } // user must be verified to authenticate
);

// Reduxify feathers services
export const feathersServices = reduxifyServices(app, mapServicePathsToNames);

// Convenience method to get status of feathers services, incl feathers-authentication
export const getFeathersStatus =
	(servicesRootState, names = prioritizedListServices) =>
		getServicesStatus(servicesRootState, names);
