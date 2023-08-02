/* eslint-disable indent */
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

export function buildPlugins({
    paths,
    isDev,
}: BuildOptions): WebpackPluginInstance[] {
    const devPlugins: WebpackPluginInstance[] = isDev
        ? [
              new HotModuleReplacementPlugin(),
              new ReactRefreshWebpackPlugin(),
              new BundleAnalyzerPlugin({
                  openAnalyzer: false,
              }),
          ]
        : [];

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
        }),

        ...devPlugins,
    ];
}
