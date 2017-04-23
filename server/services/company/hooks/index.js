'use strict';

const auth = require('feathers-authentication').hooks;
const logger = require('../../../utils/logger');

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
			hook.result.addUser(hook.params.user)
				.then(() => {
					return hook;
				}).catch(error => {
					logger.error(error);
				});
		},
	],
	update: [],
	patch: [],
	remove: []
};
