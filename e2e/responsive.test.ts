import { test, expect, devices } from '@playwright/test';

/**
 * Responsive design test suite
 * Testing how the website behaves across different device sizes
 */
test.describe('Responsive Design', () => {
  test('displays correctly on desktop', async ({ page }) => {
    // Set viewport to desktop size
    await page.setViewportSize({ width: 1280, height: 800 });

    // Navigate to homepage
    await page.goto('/');

    // Check navbar is visible
    await expect(page.locator('nav')).toBeVisible();

    // Verify hero section is visible with correct content
    await expect(page.locator('h1:has-text("RamHacks")')).toBeVisible();

    // Check navigation links are displayed horizontally
    // This is implementation-specific and may need adjustment based on your design
    const navLinksContainer = page.locator('nav > ul, nav > div > ul');
    if (await navLinksContainer.count() > 0) {
      const displayStyle = await navLinksContainer.evaluate(el => {
        return window.getComputedStyle(el).display;
      });

      // On desktop, navigation is usually flex, inline-flex, or inline-block
      expect(['flex', 'inline-flex', 'inline-block', 'block']).toContain(displayStyle);
    }

    // Check register buttons are side by side in hero section
    const buttonContainer = page.locator('button:has-text("Register Now")').locator('xpath=../..');
    const flexDirection = await buttonContainer.evaluate(el => {
      return window.getComputedStyle(el).flexDirection;
    });

    expect(flexDirection).toBe('row');
  });

  test('displays correctly on tablet', async ({ browser }) => {
    // Create a new context with iPad device settings
    const context = await browser.newContext({
      ...devices['iPad Mini'],
    });
    const page = await context.newPage();

    // Navigate to homepage
    await page.goto('/');

    // Check navbar is visible
    await expect(page.locator('nav')).toBeVisible();

    // Verify hero section is visible with correct content
    await expect(page.locator('h1:has-text("RamHacks")')).toBeVisible();

    // Verify content is properly sized for tablet
    // For example, check that the container has appropriate width
    const mainContainer = page.locator('.container, main > div').first();
    const containerWidth = await mainContainer.evaluate(el => {
      return window.getComputedStyle(el).width;
    });

    // The width should be appropriate for tablet (this is just an example)
    const width = parseInt(containerWidth);
    expect(width).toBeLessThanOrEqual(900); // Most tablets are under 900px

    // Close the context to clean up
    await context.close();
  });

  test('displays correctly on mobile', async ({ browser }) => {
    // Create a new context with mobile device settings
    const context = await browser.newContext({
      ...devices['iPhone 12'],
    });
    const page = await context.newPage();

    // Navigate to homepage
    await page.goto('/');

    // Check for mobile menu or hamburger icon if present
    const menuButton = page.locator('button[aria-label*="menu"], nav button.hamburger, button[aria-label*="Menu"]');

    if (await menuButton.count() > 0) {
      // If there's a mobile menu button, it should be visible
      await expect(menuButton).toBeVisible();

      // Test clicking it opens the menu
      await menuButton.click();

      // Check that menu items are now visible
      await expect(page.locator('nav a:has-text("About")')).toBeVisible();
    } else {
      // If no mobile menu, the links might still be visible in a different layout
      await expect(page.locator('nav')).toBeVisible();
    }

    // Verify content is properly sized for mobile
    await expect(page.locator('h1:has-text("RamHacks")')).toBeVisible();

    // On mobile, buttons are usually stacked
    const buttonContainer = page.locator('button:has-text("Register Now")').locator('xpath=../..');
    const flexDirection = await buttonContainer.evaluate(el => {
      return window.getComputedStyle(el).flexDirection;
    });

    // On mobile, they should stack vertically
    expect(flexDirection).toBe('column');

    // Close the context to clean up
    await context.close();
  });

  test('ensures text remains readable on all screen sizes', async ({ browser }) => {
    // List of devices to test
    const deviceList = [
      devices['iPhone SE'],
      devices['iPad Mini'],
      devices['Desktop Chrome']
    ];

    for (const device of deviceList) {
      // Create a context for this device
      const context = await browser.newContext({
        ...device,
      });
      const page = await context.newPage();

      // Navigate to homepage
      await page.goto('/');

      // Check for key text elements and ensure they're visible
      await expect(page.locator('h1:has-text("RamHacks")')).toBeVisible();
      await expect(page.locator('p', { hasText: 'Join us for an exciting 24-hour hackathon' })).toBeVisible();

      // Scroll to various sections to check their visibility
      for (const section of ['About', 'Schedule', 'FAQ']) {
        await page.locator(`text=${section}`).scrollIntoViewIfNeeded();
        await expect(page.locator(`section#${section.toLowerCase()}, [id="${section.toLowerCase()}"]`)).toBeVisible();
      }

      // Scroll to footer and check visibility
      await page.locator('footer').scrollIntoViewIfNeeded();
      await expect(page.locator('footer')).toBeVisible();

      // Clean up
      await context.close();
    }
  });
});
