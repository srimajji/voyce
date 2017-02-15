const autoprefixer = require('autoprefixer');
const normalize = require('postcss-normalize');
const cssNext = require('postcss-cssnext');
const path = require('path');
const webpack = require('webpack');

module.exports = {
	devtool: 'inline-source-map',
	entry: {
		newFeedback: ['babel-polyfill', './client/gripe/index.js'],
		adminPanel: ['babel-polyfill', './client/adminPanel/index.js'],
	},
	output: {
		path: path.resolve(__dirname, '..', 'public/dist'),
		filename: '[name].bundle.js',
		publicPath: '/dist/'
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.OldWatchingPlugin(),
		// new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
			React: 'React',
			react: 'React',
			'window.react': 'React',
			'window.React': 'React'
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('development'),
				'API_URL': JSON.stringify('http://localhost:3030/api/')
			}
		}),
		new webpack.NoErrorsPlugin()
	],
	resolve: {
		alias: {
			'react': path.resolve(__dirname, 'node_modules', 'react'),
			'react-dom': path.resolve(__dirname, 'node_modules', 'react-dom')
		},
		extensions: ['', '.js', '.jsx', '.scss', '.css', '.jpg'],
		modulesDirectories: ['node_modules'],
	},
	postcss: [normalize, cssNext],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loaders: ['babel'],
				exclude: path.join(__dirname, '/node_modules/'),
				include: path.join(__dirname, '/client/')
			},
			{
				test: /\.css$/,
				loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss?sourceMap',
				include: path.resolve(__dirname, 'node_modules', 'react-toolbox')
			},
			{
				test: /\.scss$/,
				loaders: ['style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap'],
				include: path.resolve(__dirname, 'client')
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
				loader: 'url-loader?limit=100000',
				//loader: 'file-loader?name=res/[name].[ext]?[hash]',
				include: path.resolve(__dirname, 'client')
			},
			{
				test: /\.json$/,
				loader: 'json'
			}

		]
	}
};
