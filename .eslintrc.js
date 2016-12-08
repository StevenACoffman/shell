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
        "react/self-closing-comp": "error",
        "react/jsx-wrap-multilines": "error",
        "no-class-assign": "off"
    },
    "options": {"fix":true}
};
