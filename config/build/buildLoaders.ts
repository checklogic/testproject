import { RuleSetRule } from 'webpack';
import { loader as miniCssLoader } from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
	const typeScriptLoader: RuleSetRule = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	const cssLoader: RuleSetRule = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? 'style-loader' : miniCssLoader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: /.module./,
						localIdentName: isDev
							? '[path][name]__[local]--[hash:base64:5]'
							: '[hash:base64:8]',
					},
				},
			},
			'sass-loader',
		],
	};

	const svgrLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	};

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	};

	return [typeScriptLoader, cssLoader, svgrLoader, fileLoader];
}
