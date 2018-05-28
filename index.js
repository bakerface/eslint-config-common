"use strict";

module.exports = {
  env: {
    node: true,
    es6: true
  },
  extends: [
    "eslint:recommended",
    "plugin:unicorn/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "prettier"
  ],
  plugins: [
    "import",
    "prettier",
    "unicorn"
  ],
  rules: {
    "prettier/prettier": "error"
  }
};
