# Testing Documentation for RamHacks Website

This document provides an overview of the testing infrastructure for the RamHacks website.

## Table of Contents

1. [Testing Strategy](#testing-strategy)
2. [Available Testing Commands](#available-testing-commands)
3. [Test Directory Structure](#test-directory-structure)
4. [CI/CD Integration](#cicd-integration)
5. [Best Practices](#best-practices)
6. [Handling Test Data](#handling-test-data)
7. [Troubleshooting Common Issues](#troubleshooting-common-issues)
8. [Adding New Tests](#adding-new-tests)
9. [Additional Resources](#additional-resources)

## Testing Strategy

The RamHacks website employs a comprehensive testing strategy using both Cypress and Playwright for end-to-end testing. These frameworks were chosen to ensure the application functions correctly across different browsers and devices.

- **Cypress** is used for component testing and end-to-end tests that require detailed interaction with the DOM
- **Playwright** is used for cross-browser testing and more complex end-to-end scenarios

## Available Testing Commands

The following commands are available for running tests:

```bash
# Run all tests (Cypress and Playwright)
bun run test

# Cypress specific commands
bun run cypress             # Opens the Cypress UI for interactive testing
bun run cypress:run         # Runs Cypress tests headlessly
bun run cypress:component   # Runs component tests

# Playwright specific commands
bun run test:e2e            # Runs Playwright end-to-end tests
bun run playwright          # Opens Playwright UI for interactive testing

# CI specific commands (used in GitHub Actions)
bun run test:ci             # Runs tests in CI environment with appropriate settings
```

## Test Directory Structure

```
├── cypress/                  # Cypress test files
│   ├── configs/              # Cypress configuration
│   ├── e2e/                  # End-to-end test specs
│   ├── fixtures/             # Test data
│   ├── plugins/              # Cypress plugins
│   ├── support/              # Support files and custom commands
│   └── types/                # TypeScript type definitions
│
├── tests/                    # Playwright test files
│   ├── e2e/                  # End-to-end tests
│   ├── fixtures/             # Test data
│   └── utils/                # Test utilities
│
├── cypress.config.ts         # Cypress configuration file
└── playwright.config.ts      # Playwright configuration file
```

## CI/CD Integration

Tests are automatically run as part of our CI/CD pipeline in GitHub Actions:

- The `testing.yml` workflow runs general tests on pushes/PRs to the `main` branch
- The `playwright.yml` workflow runs Playwright end-to-end tests on pushes/PRs to `master`/`main` or can be triggered manually

Test results and reports are uploaded as artifacts in GitHub Actions, making it easy to analyze test results after a pipeline run.

## Best Practices

When writing tests, follow these best practices:

1. **Isolated tests**: Each test should be independent and not rely on the state from other tests
2. **Use data attributes**: Use `data-testid` attributes for selecting elements rather than CSS selectors
3. **Meaningful assertions**: Write clear assertions that verify the expected behavior
4. **Avoid flaky tests**: Design tests to be deterministic and reliable
5. **Test critical paths**: Focus on testing the most important user journeys
6. **Keep tests DRY**: Use fixtures, commands, and utilities to avoid code duplication
7. **Clean up after tests**: Reset any state changes made during tests

## Handling Test Data

Both Cypress and Playwright support fixtures for managing test data:

- Cypress fixtures are stored in `cypress/fixtures/`
- Playwright fixtures can be defined in test files or in `tests/fixtures/`

For dynamic data, consider using factories or generators rather than hardcoded values. For database-dependent tests, use the Docker-based PostgreSQL instance and ensure proper cleanup after tests.

## Troubleshooting Common Issues

### Cypress

- **Timeout errors**: Increase timeout settings in `cypress.config.ts` or use `{ timeout: 10000 }` in your test commands
- **Element not found**: Ensure elements are visible before interacting with them using `cy.should('be.visible')`
- **Cross-origin errors**: Update `chromeWebSecurity` setting in Cypress config

### Playwright

- **Browser launch issues**: Ensure browsers are installed with `npx playwright install`
- **Timing problems**: Use `await page.waitForSelector()` instead of fixed delays
- **Screenshot differences**: Update expected screenshots or adjust comparison tolerance

## Adding New Tests

To add a new test:

1. Identify the feature or component to test
2. Determine whether to use Cypress or Playwright based on the testing needs
3. Create a new test file in the appropriate directory
4. Write tests following the best practices outlined above
5. Run the tests locally to ensure they pass
6. Submit a PR with your new tests

### Example Cypress Test

```typescript
describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the hero section', () => {
    cy.get('[data-testid="hero-section"]').should('be.visible');
    cy.get('[data-testid="hero-title"]').should('contain', 'RamHacks');
  });
});
```

### Example Playwright Test

```typescript
import { test, expect } from '@playwright/test';

test('navigation menu works', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('[data-testid="nav-menu"]')).toBeVisible();

  await page.click('[data-testid="about-link"]');
  await expect(page).toHaveURL(/.*#about/);
});
```

## Additional Resources

- [Cypress Documentation](https://docs.cypress.io/)
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Testing Library](https://testing-library.com/docs/)
- Internal documentation on [Component Testing Best Practices](./component-testing.md)

For questions or issues related to testing, please reach out to the development team or create an issue on GitHub.
