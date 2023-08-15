module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'standard-with-typescript',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:i18next/recommended',
        'prettier',
        'plugin:storybook/recommended',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
        {
            files: [
                '**/src/**/*.test.{ts,tsx}',
                '**/src/**/*.stories.{ts,tsx}',
            ],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
    },
    plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks'],
    rules: {
        indent: [2, 4, { SwitchCase: 1 }],
        // '@typescript-eslint/ban-ts-comment': 'off',
        // 'react/jsx-indent': [2, 4],
        // '@typescript-eslint/indent': [2, 4 ],
        'react/jsx-filename-extension': [
            2,
            {
                extensions: ['.js', '.jsx', '.tsx'],
            },
        ],
        'react/reauire-default-props': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-props': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        '@typescript-eslint/semi': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/member-delimiter-style': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-floating-promises': 'warn',
        '@typescript-eslint/space-before-function-paren': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/ban-ts-comment': 'warn',
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: ['data-testid'],
            },
        ],
        'max-len': [
            'error',
            {
                ignoreComments: true,
                code: 150,
            },
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-misused-promises': [
            2,
            {
                checksVoidReturn: {
                    attributes: false,
                },
            },
        ],
        '@typescript-eslint/consistent-type-exports': 'off',
        '@typescript-eslint/no-dynamic-delete': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/await-thenable': 'off',
        '@typescript-eslint/no-invalid-void-type': 'off',
        'n/no-callback-literal': 'off',
        '@typescript-eslint/array-type': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
};
