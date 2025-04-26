# Playwright Tests for RamHacks 2025 Website

This directory contains end-to-end tests for the RamHacks 2025 website using Playwright.

## Test Structure

- `home.test.ts`: Tests for the homepage content and structure
- `navigation.test.ts`: Tests for navigation and links across the site
- `faq.test.ts`: Tests for the FAQ section and accordion functionality
- `schedule.test.ts`: Tests for the schedule section
- `responsive.test.ts`: Tests for responsive design across different device sizes

## Running Tests

### Prerequisites

- Make sure you have Node.js installed
- Make sure you have all dependencies installed by running `npm install` or `yarn install` or `bun install` in the project root

### Installing Playwright

If you haven't installed Playwright's dependencies yet, run:

```bash
npx playwright install
```

This will install the necessary browser engines (Chromium, Firefox, WebKit).

### Running Tests in UI Mode

1. Start the development server in one terminal:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun run dev
   ```

2. In a separate terminal, run Playwright in UI mode:

   ```bash
   npx playwright test --ui
   ```

This opens the Playwright UI where you can run and debug tests visually.

### Running Tests Headlessly

To run all tests in headless mode (good for CI/CD):

```bash
npx playwright test
```

To run a specific test file:

```bash
npx playwright test home.test.ts
```

To run tests in headed mode (where you can see the browsers):

```bash
npx playwright test --headed
```

## Understanding the Test Configuration

The Playwright configuration is in `playwright.config.ts` in the project root. It defines:

- Which browsers to run tests on
- Parallel test execution settings
- Viewport sizes and device emulation
- Screenshot and trace options

## Testing on Different Browsers

The configuration includes tests for:

- Chromium (Chrome, Edge)
- Firefox
- WebKit (Safari)
- Mobile devices (via emulation)

You can run tests on a specific browser with:

```bash
npx playwright test --project=chromium
npx playwright test --project="Mobile Chrome"
```

## Test Reports

After running tests, view the HTML report with:

```bash
npx playwright show-report
```

## Best Practices Used in These Tests

1. Page object model pattern for organization
2. Resilient selectors (text-based when possible)
3. Waiting for elements automatically
4. Testing across multiple browsers and devices
5. Grouping related tests with describe blocks
6. Shared setup with beforeEach
