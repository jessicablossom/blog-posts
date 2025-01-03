import { test, expect } from '@playwright/test';

test('Should log in', async ({ page }) => {
	// Paso 1: Loguearse
	await page.goto('http://localhost:3000/home');
	await page.waitForTimeout(2000);
	await page.fill('input[name="user"]', 'admin');
	await page.fill('input[name="password"]', '123456');
	await page.click('#submit');
	await expect(page).toHaveURL(/.*\/blog/);
	await page.waitForTimeout(1000);

	await page.click('#create');

	await page.waitForTimeout(3000);
});
