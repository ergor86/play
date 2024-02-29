import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Pesquisar', { exact: true }).click();
  await page.getByLabel('Pesquisar', { exact: true }).click();
  await page.getByLabel('Pesquisar', { exact: true }).fill('qualidade de software');
  await page.getByRole('combobox', { name: 'Pesquisar' }).click();
  await page.getByRole('combobox', { name: 'Pesquisar' }).press('ArrowRight');
  await page.getByRole('combobox', { name: 'Pesquisar' }).fill('testes unit');
  await page.getByRole('combobox', { name: 'Pesquisar' }).click();
  await page.getByRole('combobox', { name: 'Pesquisar' }).fill('IA');
  //await page.getByRole('button', { name: 'Pesquisar', exact: true }).click();
  await page.getByRole('combobox', { name: 'Pesquisar' }).click();

});