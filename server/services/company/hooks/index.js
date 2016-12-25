'use strict';

const populate = require('feathers-populate-hook');
const auth = require('feathers-authentication').hooks;
const permissions = require('feathers-permissions');

exports.before = {
	all: [
		auth.authenticate('jwt'),
		populate('user', { service: '/users', field: 'userId' }),
		permissions.hooks.checkPermissions({ service: '/users' })
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
