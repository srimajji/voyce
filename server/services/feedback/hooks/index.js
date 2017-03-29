'use strict';

const hooks = require('feathers-hooks-common');
const auth = require('feathers-authentication').hooks;

exports.before = {
	all: [],
	find: [
		auth.verifyToken(),
		auth.populateUser(),
		auth.restrictToAuthenticated(),
		auth.restrictToRoles({
			roles: ['superadmin', 'owner'],
			fieldName: 'roles',
			idField: 'id',
			owner: false
		}),
	],
	get: [
		auth.verifyToken(),
		auth.populateUser(),
		auth.restrictToAuthenticated(),
		auth.restrictToRoles({
			roles: ['superadmin', 'user'],
			fieldName: 'roles',
			idField: 'id',
			owner: false
		}),
	],
	create(hook) {
		if (hook.data.description && !hook.data.title) {
			hook.data.title = hook.data.description.slice(0, 140);
		}
	},
	update: [
		auth.verifyToken(),
		auth.populateUser(),
		auth.restrictToAuthenticated(),
		auth.restrictToRoles({
			roles: ['superadmin'],
			fieldName: 'roles',
			idField: 'id',
			owner: false
		}),
	],
	patch: [
		auth.verifyToken(),
		auth.populateUser(),
		auth.restrictToAuthenticated(),
		auth.restrictToRoles({
			roles: ['superadmin'],
			fieldName: 'roles',
			idField: 'id',
			owner: false
		}),
	],
	remove: [
		auth.verifyToken(),
		auth.populateUser(),
		auth.restrictToAuthenticated(),
		auth.restrictToRoles({
			roles: ['superadmin'],
			fieldName: 'roles',
			idField: 'id',
			owner: false
		}),
	]
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
