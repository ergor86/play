import { test, expect } from '@playwright/test';

test('Login com email e senha vazios não deverá ser permitido', async ({ page }) => {
  await page.goto('http://test.marche.dz/');
  await page.locator('#modal-primeira-compra').getByLabel('Close').click();
  await page.getByRole('link', { name: '󰭕' }).click();
  await page.getByRole('button', { name: 'Entrar', exact: true }).click();
  page.on( 'dialog', dialog => {
    expect( dialog.message ).toContain( 'E-mail ou senha incorreta' );
    dialog.accept();
  } );
});