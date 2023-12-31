import { RuleSetRule } from 'webpack';
import { loader as miniCssLoader } from 'mini-css-extract-plugin';

export const buildCssLoaders = (isDev: boolean): RuleSetRule => {
    return {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
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
};
