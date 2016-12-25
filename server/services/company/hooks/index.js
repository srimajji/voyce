'use strict';

const auth = require('feathers-authentication').hooks;
const permissions = require('feathers-permissions');

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
	all: [],
	find: [],
	get: [],
	create: [],
	update: [],
	patch: [],
	remove: []
};
