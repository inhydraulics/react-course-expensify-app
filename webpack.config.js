const path = require("path");
//const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
	//console.log('env', env);
	// const CSSExtract = new ExtractTextPlugin('styles.css');
	const CSSExtract = new MiniCssExtractPlugin({
		filename: "styles.css",
	});

	const isProduction = env === "production";
	return {
		entry: "./src/app.js",
		mode: "development",
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /(node_modules|bower_components)/,
					loader: "babel-loader",
				},
				{
					test: /\.s?css$/,
					//use: ["style-loader", "css-loader", "sass-loader"],
					// use: CSSExtract.extract({
					// 	use: ["css-loader", "sass-loader"]
					// })
					use: [
						MiniCssExtractPlugin.loader,
						{ loader: "css-loader", options: { sourceMap: true } },
						{ loader: "sass-loader", options: { sourceMap: true } },
					],
				},
			],
		},
		plugins: [CSSExtract],
		resolve: { extensions: ["*", ".js", ".jsx"] },
		devtool: isProduction ? "source-map" : "inline-source-map",
		output: {
			path: path.resolve(__dirname, "public", "dist"),
			//publicPath: "/dist/",
			filename: "bundle.js",
		},
		devServer: {
			contentBase: path.join(__dirname, "public"),
			port: 3000,
			publicPath: "/dist/",
			historyApiFallback: true,
		},
	};
};
