var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var ip = require('ip');

var config = require('./base.js');

var ipAddress = ip.address();
var serverAddress = 'http://' + ipAddress + ':3000';

config.entry = [
	'react-hot-loader/patch',
	'webpack-dev-server/client?' + serverAddress,
	'webpack/hot/only-dev-server',
	'../app'
];

config.output.publicPath = serverAddress + '/static/build/';

config.devtool = 'inline-source-map';

config.module.rules = config.module.rules.concat([{
	test: /\.jsx?$/,
	include: path.join(__dirname, '../app'),
	use: [{
		loader: 'react-hot-loader/webpack',
	}, {
		loader: 'babel-loader',
		options: {
			presets: ['es2015', 'stage-0', 'react']
		}
	}]
}]);

config.plugins = config.plugins.concat([
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NamedModulesPlugin(),
	new webpack.NoEmitOnErrorsPlugin(),
	new BundleTracker({ filename: './client/webpack/stats.local.json' }),
]);

config.devServer = {
	host: ipAddress,
	port: 3000,
	historyApiFallback: true,
	headers: { 'Access-Control-Allow-Origin': '*' }
};

module.exports = config;