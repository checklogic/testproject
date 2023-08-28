import HtmlWebpackPlugin from 'html-webpack-plugin';
import {
    WebpackPluginInstance,
    ProgressPlugin,
    DefinePlugin,
    HotModuleReplacementPlugin,
} from 'webpack';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
// eslint-disable-next-line import/default
import CopyPlugin from 'copy-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';

export function buildPlugins({
    paths,
    isDev,
    apiUrl,
    project,
    needAnalyser,
}: BuildOptions): WebpackPluginInstance[] {
    const devPlugins: WebpackPluginInstance[] = isDev
        ? [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()]
        : [];

    if (needAnalyser) {
        devPlugins.push(
            new BundleAnalyzerPlugin({
                openAnalyzer: false,
                analyzerPort: 9222,
            })
        );
    }

    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        }),
        new CopyPlugin({
            patterns: [{ from: paths.locales, to: paths.buildLocales }],
        }),
        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: true,
        }),

        ...devPlugins,
    ];
}
