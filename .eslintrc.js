module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "module": true

    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        'space-before-function-paren': ['error', 'never'],
        'semi': ['error', 'always'],
        'indent': ['error', 4],
        'eqeqeq': 'off'
    }
};