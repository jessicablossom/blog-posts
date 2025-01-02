const { defineConfig } = require('cypress');

module.exports = defineConfig({
	projectId: 'mg9tqs',
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		specPattern: 'cypress/e2e/**/*.spec.js',
	},
});
