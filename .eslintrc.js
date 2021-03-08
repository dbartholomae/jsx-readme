module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
    "plugin:react/recommended",
    "plugin:jest/recommended",
    "plugin:jest-formatting/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "react/prop-types": 0,
    "@typescript-eslint/ban-ts-comment": [
      2,
      { "ts-expect-error": "allow-with-description" }
    ],
    "@typescript-eslint/naming-convention": [
      2,
      {
        selector: "variable",
        format: ["camelCase", "PascalCase", "UPPER_CASE"]
      }
    ],
    "no-else-return": [
      2,
      { allowElseIf: false }
    ]
  }
};
