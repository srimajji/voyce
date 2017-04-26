'use strict';

const path = require('path');
const compress = require('compression');
const feathers = require('feathers');
const favicon = require('serve-favicon');
const morgan = require('morgan');
const rest = require('feathers-rest');
const logger = require('./utils/logger');
const root = process.cwd();

const api = require('./api');
const app = feathers();

app.configure(rest())

	// set log config using the custom logger.js
	.use(morgan('combined', { 'stream': logger.stream }))

	// compress
	.use(compress());

// serve webpack files via '/dist'
if (process.env.NODE_ENV === 'development') {
	const webpackConfig = require('../webpack.dev.config.js');
	const webpack = require('webpack');
	const webpackCompiler = webpack(webpackConfig);
	app.use(require('webpack-dev-middleware')(webpackCompiler, {
		publicPath: webpackConfig.output.publicPath,
		stats: {
			assets: true,
			colors: true,
			version: false,
			hash: false,
			timings: true,
			chunks: false,
			chunkModules: false
		},
		noInfo: false,
		quiet: false,
	}))

		// configure webpack hot reload for react
		.use(require('webpack-hot-middleware')(webpackCompiler));
} else {
	app.use('/dist', feathers.static(path.join(root, 'public/dist')));
}

// serve public folder via '/'
app.use('/', feathers.static(path.join(root, 'public')))

	// serve public/dist folder via '/'
	.use('/', feathers.static(path.join(root, 'public/dist')))

	// serve sub-app feathers from api.js
	.use('/api', api)

	// serve form html
	// .get('/gripe', serveForm)

	// route everything else to client/react-router
	.get('/*', serveIndex)

	// set favicon
	.use(favicon(path.join(__dirname, '..', 'public/favicon.ico')));

const port = process.env.PORT || 3030;
const server = app.listen(port);
api.setup(server);

function serveIndex(req, res) {
	res.sendFile('index.html', { root: path.join(root, 'public') });
}

function serveForm(req, res) { // eslint-disable-line no-unused-vars
	res.sendFile('form.html', { root: path.join(root, 'public') });
}

server.on('listening', () => {
	logger.info(`Feathers application started on localhost:${port}`);

	// Sync models
	const User = api.get('models').user;

	User.findOne().then(user => {
		if (!user) {
			api.service('users').create({
				email: 'sri@sri.com',
				password: 'password',
				name: 'Sri Majji',
				roles: ['superadmin', 'owner', 'user']
			}
			).then((user) => {
				logger.info('Created user', user.toJSON());
			});
		}
	});
});
