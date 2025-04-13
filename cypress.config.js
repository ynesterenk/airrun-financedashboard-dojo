// cypress.config.js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // Set the base URL of your development server
    // This should match the URL where `npm start` serves your app
    baseUrl: 'http://localhost:8080', // Adjust port if yours is different

    // Optional: Default viewport size
    // viewportWidth: 1280,
    // viewportHeight: 720,

    setupNodeEvents(on, config) {
      // implement node event listeners here (if needed later)
    },

    // Optional: Turn off video recording if you don't need it
    video: false,
  },
});