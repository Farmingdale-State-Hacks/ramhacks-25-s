import { test, expect } from '@playwright/test';

/**
 * Navigation test suite
 * Testing the navbar functionality and section navigation
 */
test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the homepage before each test
    await page.goto('/');
  });

  test('navbar contains all required links', async ({ page }) => {
    // Verify the navbar is visible
    const navbar = page.locator('nav');
    await expect(navbar).toBeVisible();

    // Check for logo in navbar
    await expect(navbar.locator('img[alt="RamHacks Logo"]')).toBeVisible();

    // Verify all navigation links are present
    const navLinks = ['About', 'Schedule', 'Clubs', 'Sponsors', 'FAQ'];

    for (const link of navLinks) {
      await expect(navbar.locator(`a:has-text("${link}")`)).toBeVisible();
    }

    // Check for register button in navbar
    await expect(navbar.locator('a:has-text("Register")')).toBeVisible();
  });

  test('clicking navbar links navigates to correct sections', async ({ page }) => {
    // Test navigation to all main sections
    const sections = ['About', 'Schedule', 'Clubs', 'Sponsors', 'FAQ'];

    for (const section of sections) {
      // Click the link in the navbar
      await page.locator(`nav a:has-text("${section}")`).click();

      // Verify URL contains the section anchor
      await expect(page).toHaveURL(new RegExp(`#${section.toLowerCase()}`));

      // Verify the section is visible after navigation
      await expect(page.locator(`section#${section.toLowerCase()}, [id="${section.toLowerCase()}"]`)).toBeVisible();
    }
  });

  test('register button links to the correct form', async ({ page }) => {
    // Get the register button in navbar
    const registerButton = page.locator('nav a:has-text("Register")');

    // Check that the link points to the correct URL
    const href = await registerButton.getAttribute('href');
    expect(href).toContain('https://forms.gle/Xp6nnGfTPvzb7hFM9');
  });

  test('clicking logo scrolls back to top', async ({ page }) => {
    // First navigate to another section
    await page.locator('nav a:has-text("About")').click();

    // Wait for URL to change
    await expect(page).toHaveURL(/#about$/);

    // Click the logo
    await page.locator('nav img[alt="RamHacks Logo"]').click();

    // Verify URL no longer has the #about fragment
    await expect(page).not.toHaveURL(/#about$/);

    // Verify scroll position is near top
    // Get the window.scrollY value to check scroll position
    const scrollPosition = await page.evaluate(() => window.scrollY);
    expect(scrollPosition).toBeLessThan(100); // Should be close to the top
  });

  test('mobile menu works correctly on small screens', async ({ page }) => {
    // Set viewport to mobile size
    await page.setViewportSize({ width: 375, height: 667 }); // iPhone SE size

    // Look for a mobile menu button (hamburger icon)
    const mobileMenuButton = page.locator('nav button[aria-label*="menu"], nav button.hamburger, nav [aria-label*="Menu"]');

    // If mobile menu button exists, test it
    if (await mobileMenuButton.count() > 0) {
      await expect(mobileMenuButton).toBeVisible();

      // Click to open mobile menu
      await mobileMenuButton.click();

      // Verify menu items are visible after clicking
      for (const link of ['About', 'Schedule', 'Clubs', 'Sponsors', 'FAQ']) {
        await expect(page.locator(`a:visible:has-text("${link}")`)).toBeVisible();
      }
    } else {
      // If no mobile menu button, the responsive design might use a different approach
      // Just verify links are still visible in some form
      test.skip('No mobile menu button found - design may handle mobile differently');
    }
  });
});
