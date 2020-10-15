module.exports = {
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "README.md", "docs", "package.json"],
      },
    ],
    "@semantic-release/npm",
    ["@semantic-release/github", {
      addReleases: 'top',
      labels: ['chore'],
      releasedLabels: false,
    }],
  ],
};
