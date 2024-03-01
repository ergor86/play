import { test, expect } from '@playwright/test';
import rotas from '../../src/rotas.js';
import loc from '../../src/home/localizadores-home.js';

test.describe( 'Login pela Home', () => {

    test('Exibe mensagem quando a senha estiver incorreta', async ({ page }) => {

      // Given
      await page.goto( rotas.home );

      // When
      await page.locator( loc.modalPrimeiraCompra.tela )
        .locator( loc.modalPrimeiraCompra.fechar ).click();
      await page.locator( loc.menu.usuario ).hover();
      await page.locator( loc.formularioLogin.email ).click();
      await page.locator( loc.formularioLogin.email ).fill('exemplo@site.com');
      await page.locator( loc.formularioLogin.senha ).fill('123456');
      await page.locator( loc.formularioLogin.entrar ).click();

      // Then
      const dialog = await page.waitForEvent( 'dialog' );
      expect( dialog.message() ).toContain( 'incorreta' );
      dialog.accept();
  });

} );
