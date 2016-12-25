'use strict';

const auth = require('feathers-authentication').hooks;
const local = require('feathers-authentication-local').hooks;
const hooks = require('feathers-hooks-common');
const populate = require('feathers-populate-hook');
const permissions = require('feathers-permissions');

exports.before = {
	all: [],
	find: [
		auth.authenticate('jwt'),
		populate('user', { service: '/users', field: 'userId' }),
		permissions.hooks.checkPermissions({ service: '/users' }),
		permissions.hooks.isPermitted()
	],
	get: [
		auth.authenticate('jwt'),
		populate('user', { service: '/users', field: 'userId' }),
		permissions.hooks.checkPermissions({ service: '/users' }),
		permissions.hooks.isPermitted()
	],
	create: [
		local.hashPassword({ passwordField: 'password' })
	],
	update: [
		auth.authenticate('jwt'),
		populate('user', { service: '/users', field: 'userId' }),
		permissions.hooks.checkPermissions({ service: '/users' }),
		permissions.hooks.isPermitted()
	],
	patch: [
		auth.authenticate('jwt'),
		populate('user', { service: '/users', field: 'userId' }),
		permissions.hooks.checkPermissions({ service: '/users' }),
		permissions.hooks.isPermitted()
	],
	remove: [
		auth.authenticate('jwt'),
		populate('user', { service: '/users', field: 'userId' }),
		permissions.hooks.checkPermissions({ service: '/users' }),
		permissions.hooks.isPermitted()
	]
};

exports.after = {
	all: [hooks.remove('password')],
	find: [],
	get: [],
	create: [],
	update: [],
	patch: [],
	remove: []
};
