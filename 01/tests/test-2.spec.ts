import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://test.marche.dz/');
  await page.locator('#modal-primeira-compra').getByLabel('Close').click();
  await page.getByRole('link', { name: 'produto teste 1 produto teste' }).click();
  await page.locator('#form-adicionar-produtos').getByText('M', { exact: true }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click({
    clickCount: 4
  });
});