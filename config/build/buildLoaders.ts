import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoaders } from './loaders/buildCssLoaders';
import { buildBabelLoader } from './loaders/buildBalelLoader';

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
    const cssLoader: RuleSetRule = buildCssLoaders(options.isDev);

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

    const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
    const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });

    return [
        fileLoader,
        svgrLoader,
        codeBabelLoader,
        tsxCodeBabelLoader,
        cssLoader,
    ];
}
