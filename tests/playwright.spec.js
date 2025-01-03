import { test, expect } from '@playwright/test';

test('Should log in, add, edit, and delete a post, and log out', async ({ page }) => {
	// Paso 1: Loguearse
	await page.goto('http://localhost:3000/home');
	await page.waitForTimeout(2000);
	await page.fill('input[name="user"]', 'admin');
	await page.fill('input[name="password"]', '123456');
	await page.click('#submit');
	await expect(page).toHaveURL(/.*\/blog/);
	await page.waitForTimeout(2000);

	// Paso 2: Agregar post
	await page.click('#create');
	await page.waitForTimeout(1000);
	await page.screenshot({ path: 'create-post.png' });
	await page.fill('input[name="title"]', 'Testing Playwright');
	await page.fill('input[name="author"]', 'John Smith');
	await page.fill(
		'textarea[name="description"]',
		`What you'll learn: The solutions Playwright provides for testing. The features of Playwright App, Playwright Cloud, UI Coverage, and Playwright Accessibility. Our mission and what we believe in. Key differences between Playwright and other testing tools`
	);
	await page.click('input[name="author"]');
	await page.click('#upload');
	const inputFile = page.locator('input[type="file"]');
	await inputFile.setInputFiles('test-image.jpg');
	await page.waitForTimeout(1000);
	await page.click('#save');
	await page.waitForTimeout(1000);
	await expect(page.locator('text=Playwright')).toBeVisible();

	// Paso 3: Editar post
	await page.click('#more');
	await page.click('#edit-post');
	await page.waitForTimeout(1000);
	await page.fill('input[name="title"]', '');
	await page.fill('input[name="title"]', 'Testing Playwright + Edited');
	await page.click('#save');
	await page.waitForTimeout(2000);
	await page.reload();
	await page.waitForTimeout(2000);

	await expect(page.locator('text=Testing Playwright + Edited')).toBeVisible();

	// Paso 4: Borrar post
	await page.locator('.post-card').first().click();
	await page.waitForTimeout(1000);
	await page.click('#more');
	await page.click('#delete-post');
	await page.screenshot({ path: 'delete-post.png' });
	await expect(page.locator('text=Confirmar eliminación')).toBeVisible();
	await page.click('#confirm');
	await page.waitForTimeout(2000);
	await page.reload();
	await page.waitForTimeout(2000);
	await expect(page.locator('text=Testing Playwright')).not.toBeVisible();
});
