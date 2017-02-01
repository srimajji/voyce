'use strict';

const service = require('feathers-sequelize');
const hooks = require('./hooks');

module.exports = function () {
	const app = this;
	const models = app.get('models');
	const options = {
		Model: models['feedback'],
		paginate: {
			default: 5,
			max: 25
		}
	};

	// Initialize our service with any options it requires
	app.use('feedbacks', service(options));

	// Get our initialize service to that we can bind hooks
	const feedbackService = app.service('feedbacks');

	// Set up our before hooks
	feedbackService.before(hooks.before);

	// Set up our after hooks
	feedbackService.after(hooks.after);
};
