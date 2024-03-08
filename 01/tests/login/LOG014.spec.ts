import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://test.marche.dz/');
  await page.locator('#modal-primeira-compra').getByLabel('Close').click();
  await page.locator('#splide01-slide03 > .product-shortview > figure > .produto__espiar-curtir > .adicionar-lista-desejos').click();
  await page.locator('.button.right').nth(0).click();
  page.on( 'dialog', dialog => dialog.accept() );
  await page.locator( 'input.inputErroEfeito"').click();
  
});