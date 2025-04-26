# Cypress Tests for RamHacks 2025 Website

This directory contains end-to-end tests for the RamHacks 2025 website using Cypress.

## Directory Structure

- `e2e/`: Test files for each feature
  - `home.cy.ts`: Tests for the homepage components
  - `navigation.cy.ts`: Tests for navigation and links
  - `faq.cy.ts`: Tests for the FAQ section
  - `schedule.cy.ts`: Tests for the schedule section
  - `responsive.cy.ts`: Tests for responsive design
  - `accessibility.cy.ts`: Tests for accessibility features

- `fixtures/`: Test data for use in tests
  - `example.json`: Contains site content data used in tests

- `support/`: Helper files
  - `commands.ts`: Custom Cypress commands
  - `e2e.ts`: Support file for E2E tests

- `types/`: TypeScript type definitions
  - `commands.d.ts`: Type definitions for custom commands
  - `index.d.ts`: Global type definitions

- `plugins/`: Cypress plugins
  - `index.js`: Plugin configuration

## Custom Commands

We've created several custom commands to make tests more readable and maintainable:

- `cy.scrollToSection(sectionName)`: Scrolls to and ensures a section is visible
- `cy.assertElementExists(selector)`: Checks that an element exists
- `cy.assertAllVisible(selectors)`: Checks that multiple elements are visible
- `cy.logPageTitle()`: Logs the current page title
- `cy.checkSectionA11y(sectionSelector)`: Checks accessibility attributes of a section

## Running Tests

### Prerequisites

- Make sure you have Node.js installed
- Make sure you have all dependencies installed by running `npm install` or `yarn install` or `bun install` in the project root

### Running Tests in Cypress UI

1. Start the development server in one terminal:

   ```bash
   bun run dev
   ```

2. In a separate terminal, open Cypress:

   ```bash
   bun run cypress
   ```

3. In the Cypress UI, select "E2E Testing"
4. Choose a browser (Chrome recommended)
5. Click "Start E2E Testing"
6. Click on any of the test files to run them

### Running Tests Headlessly

To run all tests in headless mode (good for CI/CD):

```bash
bun run cypress:run
```

To run a specific test file:

```bash
bunx cypress run --spec "cypress/e2e/home.cy.ts"
```

## Test Data

We use fixture data in `cypress/fixtures/example.json` to make tests more maintainable. This allows us to change site content in one place rather than updating multiple tests.

Example usage:

```typescript
cy.fixture('example.json').then((data) => {
  cy.contains(data.name).should('be.visible')
})
```

## CI/CD Integration

This project uses GitHub Actions for continuous integration and testing. The following workflows are set up:

### 1. Cypress-specific workflow (.github/workflows/cypress.yml)

- Runs on pushes and PRs that affect Cypress tests or application code
- Tests on multiple browsers (Chrome, Firefox)
- Saves screenshots and videos as artifacts
- Includes component testing

### 2. Combined Testing workflow (.github/workflows/combined-tests.yml)

- Runs both Cypress and Playwright tests in sequence
- Includes linting checks
- Generates a combined test report
- Optimizes build artifacts between jobs

### Running CI Tests Locally

To simulate the CI environment locally:

```bash
# Run the same tests that CI runs
bun run test:ci

# Run only Cypress tests as in CI
bun run cypress:ci
```

## Best Practices

1. Use the custom commands to make tests more readable
2. Leverage fixture data instead of hardcoding values
3. Use semantic selectors when possible
4. Group related tests in logical files
5. Use `beforeEach` hooks for common setup

## Troubleshooting

If tests are failing:

1. Make sure the development server is running
2. Check that the selectors in the tests match the actual elements
3. Review test failures in the Cypress UI to understand what's failing
4. For CI failures, check the GitHub Actions logs and artifacts
