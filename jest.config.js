module.exports = {
  roots: ["<rootDir>/src", "<rootDir>/examples"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*"],
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  testRegex: ".*test\\.(t|j)sx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
