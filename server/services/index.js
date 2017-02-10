'use strict';
const authentication = require('./authentication');
const userService = require('./user');
const companyService = require('./company');
const feedbackService = require('./feedback');
const logService = require('./log');
const models = require('../models');

module.exports = function () {
	const app = this;

	app.configure(models);
	app.configure(authentication);
	app.configure(userService);
	app.configure(companyService);
	app.configure(feedbackService);

	app.use('/logs', logService);

};
