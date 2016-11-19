module.exports = {
    "extends": ["eslint:recommended","react-app"],
    "rules": {
        "indent": ["warn", 4],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "react/jsx-indent": ["error", 4],
        "jsx-quotes": ["error", "prefer-double"],
        "react/jsx-no-undef": "error",
        "react/self-closing-comp": "error",
        "react/jsx-wrap-multilines": "error",
        "no-class-assign": "off"
    }
};
