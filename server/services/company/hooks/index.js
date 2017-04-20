'use strict';

const auth = require('feathers-authentication').hooks;

exports.before = {
	all: [
		auth.verifyToken(),
		auth.populateUser(),
		auth.restrictToAuthenticated(),
		auth.restrictToRoles({
			roles: ['superadmin'],
			fieldName: 'roles',
			idField: 'id',
			owner: false
		})
	],
	find: [],
	get: [],
	create: [],
	update: [],
	patch: [],
	remove: []
};

exports.after = {
	all: [],
	find: [],
	get: [],
	create: [
		function (hook) {
			const data = {
				companyId: hook.result.dataValues.id,
				userId: 1,

			};
			hook.app.service('companyUsers').create(data).then(result => {
				return hook;
			}).catch(error => console.log(error));
		}
	],
	update: [],
	patch: [],
	remove: []
};
