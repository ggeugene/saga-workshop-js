module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  plugins: ["react", "prettier", "react-hooks"],
  extends: [
    "react-app",
    "airbnb",
    "prettier",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  root: true,
  rules: {
    "import/prefer-default-export": "off",
    "react/button-has-type": "off",
    "default-param-last": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
