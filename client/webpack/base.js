var path = require('path');

module.exports = {
	context: __dirname,
	entry: '../app',
	output: {
		path: path.resolve('./static/build/'),
		filename: '[name]-[hash].js'
	},
	resolve: {
		alias: {
			app: path.resolve(__dirname, '../app'),
			components: path.resolve('../app/components'),
			lib: path.resolve(__dirname, '../app/lib'),
			modules: path.resolve(__dirname, '../app/modules'),
			middleware: path.resolve(__dirname, '../app/middleware'),
			css: path.resolve(__dirname, '../app/css'),
			imports: path.resolve(__dirname, '../app/css/_imports.scss')
		}
	},
	plugins: [],
	module: {
		rules: [{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}, {
			test: /\.scss$/,
			use: ['style-loader', 'css-loader', 'sass-loader']
		}, {
			test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			use: "url-loader"
		},
		{
			test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
			use: 'file-loader'
		}]
	}
};