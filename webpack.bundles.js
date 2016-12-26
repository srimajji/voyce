const path = require('path');

module.exports = {
	newFeedback: ['babel-polyfill', path.resolve(__dirname, 'client/newFeedback/index.js')],
	adminPanel: ['babel-polyfill', path.resolve(__dirname, 'client/adminPanel/index.js')]
};