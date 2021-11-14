module.exports = {
    branches: "master",
    repositoryUrl: "https://github.com/tush-tr/github-actions-ci-workflow",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/github",
    ],
};
