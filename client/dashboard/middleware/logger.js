
/*
 A basic middleware logger
 See http://redux.js.org/docs/advanced/Middleware.html
 */

export const logger = store => next => action => {
	console.groupCollapsed(action.type); // eslint-disable-line no-console
	console.info('dispatching', action); // eslint-disable-line no-console
	const result = next(action);
	console.log('next state', store.getState()); // eslint-disable-line no-console
	console.groupEnd(action.type); // eslint-disable-line no-console
	return result;
};

export const crashReporter = store => next => action => {
	try {
		return next(action);
	} catch (err) {
		console.error('Caught an exception!', err); // eslint-disable-line no-console
		throw err;
	}
};

