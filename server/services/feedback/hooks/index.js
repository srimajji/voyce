'use strict';

const hooks = require('feathers-hooks-common');
const auth = require('feathers-authentication').hooks;

exports.before = {
	all: [
		auth.verifyToken(),
		auth.populateUser(),
		auth.restrictToAuthenticated()
	],
	find: [],
	get: [],
	create(hook) {
		if (hook.data.description && !hook.data.title) {
			hook.data.title = hook.data.description.slice(0, 140);
		}
	},
	update: [],
	patch: [],
	remove: []
};

exports.after = {
	all: [
		hooks.populate({ company: { service: 'companies', field: 'companyId' } }),
		hooks.remove('companyId')
	],
	find: [],
	get: [],
	create: [],
	update: [],
	patch: [],
	remove: []
};
