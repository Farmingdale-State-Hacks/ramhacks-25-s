import { test, expect } from '@playwright/test';

/**
 * Home page test suite
 * Testing the main landing page components and functionality
 */
test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the homepage before each test
    await page.goto('/');
  });

  test('has the correct title and hero section', async ({ page }) => {
    // Check page title
    await expect(page).toHaveTitle(/RamHacks/);

    // Verify hero section content
    const heroHeading = page.locator('h1:has-text("RamHacks")');
    await expect(heroHeading).toBeVisible();

    // Check for the subtitle text
    const subtitle = page.locator('h2:has-text("Fueling Innovation at Farmingdale State College")');
    await expect(subtitle).toBeVisible();

    // Verify the hero description is present
    const description = page.locator('p', { hasText: 'Join us for an exciting 24-hour hackathon' });
    await expect(description).toBeVisible();
  });

  test('displays date, location and participant information', async ({ page }) => {
    // Check for event details
    await expect(page.locator('text=April 26-27, 2025')).toBeVisible();
    await expect(page.locator('text=Farmingdale Campus')).toBeVisible();
    await expect(page.locator('text=150+ Participants')).toBeVisible();
  });

  test('has working registration buttons', async ({ page }) => {
    // Check for Register Now button and its attributes
    const registerButton = page.locator('button:has-text("Register Now")');
    await expect(registerButton).toBeVisible();

    // Get onclick attribute content (this is implementation-specific)
    // In real scenarios, you'd test the actual navigation
    const registerButtonHTML = await registerButton.evaluate(el => el.outerHTML);
    expect(registerButtonHTML).toContain('https://forms.gle/Xp6nnGfTPvzb7hFM9');

    // Check for Sponsor Us button
    const sponsorButton = page.locator('button:has-text("Sponsor Us")');
    await expect(sponsorButton).toBeVisible();

    // Verify sponsor button has correct mailto link
    const sponsorButtonHTML = await sponsorButton.evaluate(el => el.outerHTML);
    expect(sponsorButtonHTML).toContain('mailto:ferdt4@farmingdale.edu');
  });

  test('loads all main sections of the page', async ({ page }) => {
    // This test verifies that all main sections are present on the page

    // About section
    await expect(page.locator('section#about, [id="about"]')).toBeVisible();

    // Schedule section
    await page.locator('text=Schedule').scrollIntoViewIfNeeded();
    await expect(page.locator('section#schedule, [id="schedule"]')).toBeVisible();

    // Clubs section
    await page.locator('text=Clubs').scrollIntoViewIfNeeded();
    await expect(page.locator('section#clubs, [id="clubs"]')).toBeVisible();

    // Sponsors section
    await page.locator('text=Sponsors').scrollIntoViewIfNeeded();
    await expect(page.locator('section#sponsors, [id="sponsors"]')).toBeVisible();

    // FAQ section
    await page.locator('text=FAQ').scrollIntoViewIfNeeded();
    await expect(page.locator('section#faq, [id="faq"]')).toBeVisible();

    // Footer
    await page.locator('footer').scrollIntoViewIfNeeded();
    await expect(page.locator('footer')).toBeVisible();
  });
});
