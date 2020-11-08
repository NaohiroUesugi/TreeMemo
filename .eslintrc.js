module.exports = {
  env: {
    es2020: true,
  },
  extends: [
    "react-app",
    "plugin:jsx-a11y/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
  ],
  plugins: ["jsx-a11y", "@typescript-eslint"],

  parser: "@typescript-eslint/parser",
  rules: {
    "import/no-anonymous-default-export": "error",
    "import/no-webpack-loader-syntax": "off",
    "react/react-in-jsx-scope": "off", // React is always in scope with Blitz
    "jsx-a11y/anchor-is-valid": "off", //Doesn't play well with Blitz/Next <Link> usage
    "react/prop-types": "off",
    "react/display-name": "off",
  },
}
