import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:9999',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
