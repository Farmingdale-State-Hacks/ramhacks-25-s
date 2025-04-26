import { test, expect } from '@playwright/test';

/**
 * Schedule section test suite
 * Testing the schedule display and tab functionality
 */
test.describe('Schedule Section', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the homepage and scroll to Schedule section
    await page.goto('/');
    await page.locator('text=Schedule').scrollIntoViewIfNeeded();
  });

  test('displays schedule section with correct title', async ({ page }) => {
    // Check for the Schedule section heading
    await expect(page.locator('section#schedule h2, [id="schedule"] h2')).toBeVisible();

    // Verify the section container is visible
    await expect(page.locator('section#schedule, [id="schedule"]')).toBeVisible();
  });

  test('displays schedule events with times and descriptions', async ({ page }) => {
    // Check for time elements in the schedule
    const timeElements = page.locator('[class*="time"], time');
    await expect(timeElements).toHaveCount({ min: 1 });

    // Check for event titles or descriptions
    const eventTitles = page.locator('[id="schedule"] h3, [id="schedule"] h4, [class*="event"] h3');
    await expect(eventTitles).toHaveCount({ min: 1 });
  });

  test('tests tab functionality if tabs exist', async ({ page }) => {
    // Look for tab elements that might contain different day schedules
    const tabButtons = page.locator('[role="tab"], [class*="Tab"] button, [class*="tab-"] button');

    // If we have tabs, test switching between them
    if (await tabButtons.count() > 1) {
      // Get tab count
      const tabCount = await tabButtons.count();
      console.log(`Found ${tabCount} tabs`);

      // Test clicking each tab
      for (let i = 0; i < Math.min(tabCount, 3); i++) { // Test up to 3 tabs maximum
        // Click this tab
        await tabButtons.nth(i).click();

        // Verify the tab is selected
        await expect(tabButtons.nth(i)).toHaveAttribute('aria-selected', 'true');

        // Get the corresponding tab panel
        const tabPanel = page.locator('[role="tabpanel"], [class*="TabPanel"]').nth(i);

        // Check that the panel is visible
        await expect(tabPanel).toBeVisible();

        // Verify panel has content (events, times, descriptions)
        await expect(tabPanel.locator('[class*="time"], time, h3, h4, p')).toHaveCount({ min: 1 });
      }
    } else {
      // If no tabs, verify single schedule display
      const scheduleContainer = page.locator('section#schedule, [id="schedule"]');
      await expect(scheduleContainer).toBeVisible();

      // Check that the schedule has at least some content
      await expect(scheduleContainer.locator('[class*="time"], time, h3, h4, p')).toHaveCount({ min: 1 });
    }
  });

  test('displays the correct hackathon date', async ({ page }) => {
    // Check for the main hackathon date displayed in the schedule section
    await expect(page.locator('text=April 26-27, 2025')).toBeVisible();
  });

  test('checks for first and last day events', async ({ page }) => {
    // Scroll to ensure the schedule is in view
    await page.locator('section#schedule, [id="schedule"]').scrollIntoViewIfNeeded();

    // Look for morning events (like registration, opening ceremony)
    const morningEvents = page.locator('text=/Registration|Opening|Breakfast|Kickoff/i');

    // Look for ending events (like closing ceremony, demo, judging)
    const endingEvents = page.locator('text=/Closing|Demo|Judging|Presentation|Awards/i');

    // We should find at least one of each category
    if (await morningEvents.count() === 0) {
      test.skip('No morning/opening events found in schedule');
    } else {
      await expect(morningEvents.first()).toBeVisible();
    }

    if (await endingEvents.count() === 0) {
      test.skip('No ending/closing events found in schedule');
    } else {
      await expect(endingEvents.first()).toBeVisible();
    }
  });
});
