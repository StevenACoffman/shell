module.exports = {
    "extends": ["eslint:recommended","react-app"],
    "plugins": [
        "react"
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env": {
        "es6": true,
        "browser": true,
        "node": true,
        "jquery": true,
        "mocha": true
    },
    "rules": {
        "indent": ["warn", 4],
        "linebreak-style": ["error","unix"],
        "quotes": ["error","double"],
        "semi": ["error","always"],
        "react/jsx-indent": ["error", 4],
        "jsx-quotes": ["error", "prefer-double"],
        "react/jsx-no-undef": "error",
        "no-console": "warn",
        "no-debugger": "warn",
        "no-var": "warn",
        "react/self-closing-comp": "error",
        "react/jsx-wrap-multilines": "error",
        "no-class-assign": "off",
        "react/display-name": ["warn", {"ignoreTranspilerName": false}],
        "react/forbid-prop-types": ["warn", {"forbid": ["any"]}],
        "react/jsx-boolean-value": "warn",
        "react/jsx-curly-spacing": "warn",
        "react/jsx-key": "warn",
        "react/jsx-no-duplicate-props": "warn",
        "react/jsx-no-undef": "warn",
        "react/jsx-pascal-case": "warn",
        "react/jsx-uses-react": "warn",
        "react/jsx-uses-vars": "warn",
        "react/no-danger": "warn",
        "react/no-did-mount-set-state": "warn",
        "react/no-did-update-set-state": "warn",
        "react/no-direct-mutation-state": "warn",
        "react/no-multi-comp": "warn",
        "react/no-unknown-property": "warn",
        "react/prefer-es6-class": "warn",
        "react/prop-types": "warn",
        "react/react-in-jsx-scope": "warn",
        "react/self-closing-comp": "warn",
        "react/sort-comp": "warn",
        "import/extensions": "warn"
    }
};
