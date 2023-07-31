import { RuleSetRule } from 'webpack';
import { loader as miniCssLoader } from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders ({ isDev }: BuildOptions): RuleSetRule[] {
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

    const svgrLoader: RuleSetRule = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader: RuleSetRule = {
        test: /\.(png|jpe?g|gif|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const babelLoader: RuleSetRule = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    '@babel/plugin-syntax-jsx',
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true,
                        },
                    ],
                ],
            },
        },
    };

    return [babelLoader, typeScriptLoader, cssLoader, svgrLoader, fileLoader];
}
