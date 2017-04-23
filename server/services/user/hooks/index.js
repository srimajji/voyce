'use strict';

const hooks = require('feathers-hooks-common');
const auth = require('feathers-authentication').hooks;

exports.before = {
	all: [
		function (hook) {
			hook.params.sequelize = {
				include: [{ model: hook.app.service('companies').Model, through: { attributes: [] } }],
			};
		},
	],
	find: [
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
	get: [
		auth.verifyToken(),
		auth.populateUser(),
		auth.restrictToAuthenticated(),
		auth.restrictToOwner({ ownerField: 'id' }),
		auth.restrictToRoles({
			roles: ['superadmin'],
			fieldName: 'roles',
			idField: 'id',
			owner: false
		}),
	],
	create: [
		function (hook) {
			hook.data.roles = ['user'];
		},
		auth.hashPassword()
	],
	update: [
		auth.verifyToken(),
		auth.populateUser(),
		auth.restrictToAuthenticated(),
		auth.restrictToOwner({ ownerField: 'id' }),
	],
	patch: [
		auth.verifyToken(),
		auth.populateUser(),
		auth.restrictToAuthenticated(),
		auth.restrictToOwner({ ownerField: 'id' })
	],
	remove: [
		auth.verifyToken(),
		auth.populateUser(),
		auth.restrictToAuthenticated(),
		auth.restrictToOwner({ ownerField: 'id' })
	]
};

exports.after = {
	all: [
		hooks.remove('password'),
	],
	find: [],
	get: [],
	create: [],
	update: [],
	patch: [],
	remove: []
};
