'use strict';

const Sequelize = require('sequelize');
const user = require('./user');
const company = require('./company');
const feedback = require('./feedback');
const logger = require('../utils/logger');

module.exports = function () {
	const app = this;
	const sequelize = new Sequelize(app.get('mysql'), {
		dialect: 'mysql',
		logging: logger.debug,
		define: { underscored: true },
	});
	app.set('sequelize', sequelize);
	app.configure(user);
	app.configure(company);
	app.configure(feedback);
	app.set('models', sequelize.models);
	Object.keys(sequelize.models).forEach(function (modelName) {
		if ('associate' in sequelize.models[modelName]) {
			sequelize.models[modelName].associate();
		}
	});

	sequelize.sync({ force: true }).then(() => {
		// temp to test rest
		app.service('users').create({
			email: 'sri@sri.com',
			password: 'password',
			name: 'Sri Majji',
		}).then((user) => {
			logger.info('Created user', user.toJSON());
		});

		app.service('companies').create({
			alias: 'bestbuy',
			name: 'bestbuy',
			location: 'Geary St, San Francisco',
			categories: '[employee, building, food]',
			website: 'http://bestbuy.com'
		}).then((company) => {
			logger.info('Created company', company.toJSON());
		});
	});
};
