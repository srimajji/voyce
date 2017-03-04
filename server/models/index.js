'use strict';

const Sequelize = require('sequelize');
const User = require('./user');
const Company = require('./company');
const Feedback = require('./feedback');
const CompanyUser = require('./companyUser');
const logger = require('../utils/logger');

module.exports = function () {
	const app = this;
	const dbConfig = app.get('datasource');
	const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
		host: dbConfig.host,
		dialect: 'mysql',
		logging: logger.debug,
		define: { underscored: true },
	});
	app.set('sequelize', sequelize);
	app.configure(User);
	app.configure(Company);
	app.configure(Feedback);
	app.configure(CompanyUser);
	app.set('models', sequelize.models);

	Object.keys(sequelize.models).forEach(function (modelName) {
		if ('associate' in sequelize.models[modelName]) {
			sequelize.models[modelName].associate();
		}
	});
};
