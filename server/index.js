'use strict';

const app = require('./app');
const port = app.get('port');
const server = app.listen(port);
const logger = require('./utils/logger');

server.on('listening', () =>
	logger.info(`Feathers application started on ${app.get('host')}:${port}`)
);
