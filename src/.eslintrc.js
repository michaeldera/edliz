module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        useJSXTextNode: true,
        project: './tsconfig.json',
        tsconfigRootDir: './',
    },
    extends: ['plugin:prettier/recommended', 'eslint:recommended'],
    plugins: ['react-hooks'],
    rules: {
        'no-async-promise-executor': 'error',
        'require-atomic-updates': 'error',
        'array-callback-return': 'error',
        'react/prop-types': 0,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        // Disable below rule because we need to sometimes import svg using svgr and sometimes using file-loader ¯\_(ツ)_/¯
        'import/no-webpack-loader-syntax': 0,
    },
}
