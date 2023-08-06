import path from 'path';
import { BuildPaths } from '../build/types/config';
import { Configuration, RuleSetRule } from 'webpack';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';

export default ({ config }: { config: Configuration }): Configuration => {
    const paths: BuildPaths = {
        build: '',
        entry: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');

    if (config.module?.rules) {
        const rules = config.module.rules as RuleSetRule[];
        rules.map((rule: RuleSetRule) => {
            if (String(rule.test).includes('svg')) {
                return { ...rule, exclude: /\.svg$/i };
            }
            return rule;
        });
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                },
            ],
            type: 'javascript/auto',
            issuer: {
                and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
            },
        });
    }

    config.module?.rules?.push(buildCssLoaders(true));
    return config;
};
