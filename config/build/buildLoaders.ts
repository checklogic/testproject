import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoaders } from './loaders/buildCssLoaders';
import { buildBabelLoader } from './loaders/buildBalelLoader';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
    const typeScriptLoader: RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const cssLoader: RuleSetRule = buildCssLoaders(isDev);

    const svgrLoader: RuleSetRule = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader: RuleSetRule = {
        test: /\.(png|jpe?g|gif|woff|ttf|webp)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const babelLoader = buildBabelLoader();

    return [babelLoader, typeScriptLoader, cssLoader, svgrLoader, fileLoader];
}
