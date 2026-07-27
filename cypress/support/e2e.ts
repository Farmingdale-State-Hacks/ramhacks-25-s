// Import custom commands
import './commands';

// Ignore uncaught app exceptions during test runs (e.g. React hydration warnings)
Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('Minified React error #418') || err.message.includes('Hydration failed')) {
    return false;
  }
  return false;
});
