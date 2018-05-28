"use strict";

const path = require("path");

module.exports = {
  extends: [
    path.join(__dirname, "index.js"),
    "plugin:react/recommended",
    "prettier/react"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true
  },
  plugins: [
    "react"
  ],
  settings: {
    "import/ignore": [
      "node_modules"
    ],
    "import/resolver": {
      "babel-module": {}
    }
  }
};
