import cypress from "cypress";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

const defineConfig = cypress.defineConfig || (cypress as unknown as { default: { defineConfig: typeof cypress.defineConfig } }).default?.defineConfig;

export default defineConfig({
  viewportWidth: 1000,
  viewportHeight: 800,
  defaultCommandTimeout: 40000,
  pageLoadTimeout: 120000,
  video: false,
  watchForFileChanges: false,
  scrollBehavior: 'center',
  retries: {
    runMode: 1,
    openMode: 0,
  },
  e2e: {
    baseUrl: "http://127.0.0.1:3000",
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
    },
  },
});
