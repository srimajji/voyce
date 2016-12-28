'use strict';

const populate = require('feathers-populate-hook');
const hooks = require('feathers-hooks-common');
const auth = require('feathers-authentication').hooks;
const permissions = require('feathers-permissions');

exports.before = {
	all: [
		// auth.authenticate('jwt'),
		// permissions.hooks.checkPermissions({ service: 'users' })
	],
	find: [
		auth.authenticate('jwt'),
		permissions.hooks.checkPermissions({ service: 'users' })
	],
	get: [
		auth.authenticate('jwt'),
		permissions.hooks.checkPermissions({ service: 'users' })
	],
	create(hook) {
		if (hook.data.description && !hook.data.title) {
			hook.data.title = hook.data.description.slice(0, 140);
		}
	},
	update: [
		auth.authenticate('jwt'),
		permissions.hooks.checkPermissions({ service: 'users' })
	],
	patch: [
		auth.authenticate('jwt'),
		permissions.hooks.checkPermissions({ service: 'users' })
	],
	remove: [
		auth.authenticate('jwt'),
		permissions.hooks.checkPermissions({ service: 'users' })
	]
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
