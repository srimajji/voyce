
import { routerReducer } from 'react-router-redux';

import { feathersServices, feathersAuthentication } from './feathers';

export default {
	routing: routerReducer, // reducers required by react-router-redux
	auth: feathersAuthentication.reducer,
	feedbacks: feathersServices.feedbacks.reducer,
};
