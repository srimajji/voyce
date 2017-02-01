'use strict';

const authentication = require('feathers-authentication');
const authManagement = require('feathers-authentication-management');
const local = require('feathers-authentication-local');
const jwt = require('feathers-authentication-jwt');

module.exports = function () {
	const app = this;

	let config = app.get('auth');
	app.configure(authentication(config))
		.configure(jwt())
		.configure(local());
};
