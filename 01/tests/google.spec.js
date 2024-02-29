import { test, expect } from '@playwright/test';
test( 'deve encontrar site do Playwright no Google', async ({ page }) => {
    await page.goto( 'https://google.com' );
    await page.getByRole( 'combobox' ).fill( 'playwright' );
    await page.keyboard.press( 'Enter' );
    const elemento = await page.getByText(
        'Fast and reliable end-to-end testing' );
    await expect( elemento ).toBeDefined();
} );