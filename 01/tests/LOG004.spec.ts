import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://test.marche.dz/cliente/acesso?continue=/');
  await page.getByRole('button', { name: 'Entrar', exact: true }).click();
  await page.getByRole('button', { name: 'Entrar', exact: true }).click();
  await page.getByRole('button', { name: 'Entrar', exact: true }).click();
  await page.getByRole('button', { name: 'Entrar', exact: true }).click();
  await page.getByRole('button', { name: 'Entrar', exact: true }).click();
  await page.getByRole('button', { name: 'Entrar', exact: true }).click();
  await page.getByRole('button', { name: 'Entrar', exact: true }).click();
  await page.getByRole('button', { name: 'Entrar', exact: true }).click();
  await page.getByRole('button', { name: 'Entrar', exact: true }).click();
  await page.getByRole('button', { name: 'Entrar', exact: true }).click();
  await page.getByRole('button', { name: 'Entrar', exact: true }).click();
  await page.getByRole('button', { name: 'Entrar', exact: true }).click();
  await page.getByRole('button', { name: 'Entrar', exact: true }).click();
  await page.getByRole('button', { name: 'Entrar', exact: true }).click();
  await page.getByLabel('E-mail').click();
  await page.getByLabel('E-mail').fill('andre@oi.com.br');
  await page.getByLabel('Senha\nMostrar senha').click();
  await page.getByLabel('Senha\nMostrar senha').fill('123456789');
  await page.getByRole('button', { name: 'Entrar', exact: true }).click();
  //teste não apresentou a tela de recaptcha
});