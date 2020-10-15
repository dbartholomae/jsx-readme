module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-max-line-length": [0, "always", Infinity],
    "scope-case": [2, "always", ["camel-case", "pascal-case"]],
  },
};
