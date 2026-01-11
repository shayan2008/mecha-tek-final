import { test, expect } from '@playwright/test';

test('homepage has expected content and saves a screenshot', async ({ page }) => {
  await page.goto('http://localhost:5176');
  await expect(page.locator('h1')).toContainText('Shayan Doroudiani');

  // Scroll to the certificates section
  await page.locator('#certificates').scrollIntoViewIfNeeded();

  // Wait for any images to load (optional but good practice)
  await page.waitForLoadState('networkidle');

  // Verify that the certificate image is visible
  const certificateImage = page.locator('img[alt="Mechatronics Course Certificate"]');
  await expect(certificateImage).toBeVisible();

  await page.screenshot({ path: 'screenshot.png', fullPage: true });
});
