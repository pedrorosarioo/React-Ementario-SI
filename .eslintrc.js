module.exports = {
    extends: 'airbnb',
    env: {
        browser: true,
        node: true,
    },
    plugins: ['react'],
    parser: 'babel-eslint',
    rules: {
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
            },
        ],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': 0,
        'react/require-default-props': 'off',
        'react/jsx-closing-bracket-location': [
            1,
            {
                selfClosing: 'after-props',
                nonEmpty: 'after-props',
            },
        ],
        'react/no-array-index-key': 0,
        'class-methods-use-this': 'off',
        'import/prefer-default-export': 0,
        'no-underscore-dangle': 0,
        'max-len': ['error', { code: 80 }],
        'arrow-body-style': ['error', 'always'],
    },
};
