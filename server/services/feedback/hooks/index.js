'use strict';

const populate = require('feathers-populate-hook');
const hooks = require('feathers-hooks-common');
// const auth = require('feathers-authentication').hooks;
// const permissions = require('feathers-permissions');

exports.before = {
	all: [
		// auth.authenticate('jwt'),
		// permissions.hooks.checkPermissions({ service: 'users' })
	],
	find: [],
	get: [],
	create: [],
	update: [],
	patch: [],
	remove: []
};

exports.after = {
	all: [
		populate({ company: { service: 'companies', f_key: 'id', l_key: 'companyId', one: true } }),
		hooks.remove('companyId')
	],
	find: [],
	get: [],
	create: [],
	update: [],
	patch: [],
	remove: []
};
