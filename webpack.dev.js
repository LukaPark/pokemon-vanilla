const common = require("./webpack.common.js");

module.exports = {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		port: 3000,
		hot: true,
		compress: true,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
				exclude: /node_modules/,
			},
		],
	},
};
