module.exports = {
    env: {
        browser: true,
        es2017: true,
        webextensions: true,
    },
    extends: "eslint:recommended",
    globals: {
        $: false,
        user: false,
        lastReadJournalEntryId: false,
    },
    parserOptions: {
        ecmaVersion: 9,
    },
    rules: {
        'array-bracket-newline': ['error', 'consistent'],
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            functions: 'only-multiline',
        }],
        'indent': [
            'error',
            4,
            {
                SwitchCase: 1,
                outerIIFEBody: 'off',
            },
        ],
        'no-unneeded-ternary': ['error'],
        'no-unused-vars': [
            'error',
            { args: 'none' },
        ],
        'no-var': ['warn'],
        'object-curly-spacing': ['error', 'never'],
        'object-curly-newline': ['error'],
        'prefer-const': ['error'],
        'semi': ['error', 'always'],
    },
};
