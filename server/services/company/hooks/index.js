'use strict';

const auth = require('feathers-authentication').hooks;
const permissions = require('feathers-permissions');

exports.before = {
	all: [],
	find: [],
	get: [],
	create: [
		auth.authenticate('jwt'),
		permissions.hooks.checkPermissions({ service: 'users' })
	],
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
	all: [],
	find: [],
	get: [],
	create: [],
	update: [],
	patch: [],
	remove: []
};
