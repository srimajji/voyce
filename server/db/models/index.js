'use strict';

const Sequelize = require('sequelize');
const app = require('../../api');
const models = app.get('models');
const sequelize = app.get('sequelize');

console.log('IN THIS FILE');
// The export object must be disctionary of model names -> models
const db = Object.assign({
	Sequelize,
	sequelize
}, models);

models.exports = db;