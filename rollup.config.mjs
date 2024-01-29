const formats = ["es", "umd"];

export default {
	input: "src/main.js",
	output: formats.map((format) => {
		return {
			file: `dist/bundle.${format}.js`,
			format: format,
			name: "Chromatista",
			exports: "auto",
			compact: true,
			sourcemap: "hidden",
		};
	}),
};
