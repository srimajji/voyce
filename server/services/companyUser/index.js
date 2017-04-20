'use strict';

const service = require('feathers-sequelize');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;


module.exports = function () {
	const app = this;
	const CompanyUser = app.get('models').companyUser;
	const options = {
		Model: CompanyUser,
		paginate: {
			default: 5,
			max: 25
		}
	};

	// Initialize our service with any options it requires
	app.use('companyUsers', service(options));

	// Get our initialize service to that we can bind hooks
	const companyService = app.service('companyUsers');

	// disable external access
	companyService.before({
		all: [
			auth.verifyToken(),
			auth.populateUser(),
			auth.restrictToAuthenticated(),
			auth.restrictToRoles({
				roles: ['superadmin'],
				fieldName: 'roles',
				idField: 'id',
				owner: false
			}),
			function (hook) {
				console.log(hook);
			}
		]
	});
};
