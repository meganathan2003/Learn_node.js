module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs,mjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "extends": "eslint:recommended",
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "indent": ["error", 2],
        "camelcase": "error",
        "no-unused-vars": "error",
        "consistent-return": "error",
        "no-undef": "error",
        "func-call-spacing": "error",
        "no-unused-vars": "error",
        // Add more rules for best practice
        "array-bracket-spacing": ["error", "never"],
        "object-curly-spacing": ["error", "always"],
        "comma-spacing": "error",
        "space-before-function-paren": ["error", "always"],
        "no-extra-parens": "error",
        "no-floating-decimal": "error",
        "no-multi-spaces": "error",
        "no-multiple-empty-lines": "error",
        "no-trailing-spaces": "error",
        "object-property-newline": "error",
        "keyword-spacing": "error",
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "arrow-spacing": "error",
        "brace-style": ["error", "1tbs"],
        "comma-style": "error",
        "eol-last": "error",
        "no-var": "error",
        "prefer-const": "error",
        "no-use-before-define": "error",
    }
}
