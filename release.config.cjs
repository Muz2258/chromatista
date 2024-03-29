module.exports = {
	branches: ["master"],
	plugins: [
		"@semantic-release/commit-analyzer",
		"@semantic-release/release-notes-generator",
		"@semantic-release/npm",
		[
			"@semantic-release/github",
			{
				assets: ["dist/**"],
			},
		],
		"@semantic-release/changelog",
		"@semantic-release/git",
	],
};
