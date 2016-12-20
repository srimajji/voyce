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
		logging: logger.info
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

	sequelize.sync();
};
