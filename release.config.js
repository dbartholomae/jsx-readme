module.exports = {
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "README.md", "docs", "package.json"],
      },
    ],
    "@semantic-release/npm",
  ],
};
