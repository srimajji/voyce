'use strict';

const Sequelize = require('sequelize');
const user = require('./user');
const company = require('./company');
const feedback = require('./feedback');
const logger = require('../utils/logger');

module.exports = function () {
	const app = this;
	const dbConfig = app.get('datasource');
	const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
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

	/* sequelize.sync().then(() => {
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
			categories: ['food', 'employee', 'building', 'merchendise'],
			website: 'http://bestbuy.com'
		}).then((company) => {
			logger.info('Created company', company.toJSON());
			app.service('feedbacks').create({
				companyId: 1,
				title: 'This is a sample feedback',
				description: 'This is a sample description',
				type: 'water'
			}).then((feedback) => {
				logger.info('Created feedback', feedback.toJSON());

			}).catch(error => {
				logger.error(error);
				const Feedback = app.get('models').feedback;
				const Company = app.get('models').company;

				Company.findOne().then(company => {
					logger.info(company)
					company.getFeedbacks().then(feedbacks => {
						console.log(feedbacks);
					})
				});

				Feedback.findOne({ include: [{ model: Company }] }).then(feedback => {
					logger.info(feedback.toJSON());
				}).catch(error => logger.error(error));
			})
		});
	}); 
	*/
};
