'use strict';

const Sequelize = require('sequelize');
const app = require('../../api');
const models = app.get('models');
const sequelize = app.get('sequelize');

// this file is not really necessary as the models are registered in server/models/index
// The export object must be disctionary of model names -> models
const db = Object.assign({
	Sequelize,
	sequelize
}, models);

module.exports = db;
