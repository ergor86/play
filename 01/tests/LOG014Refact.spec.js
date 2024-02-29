import {test, expect} from '@playwright/test';
import { TelaLogin } from './TelaLoginTiago';
import loc from '../../01/src/login/localizadores-login.js';

test.describe('Login', () => {
    test('Login com usuario e senha vazios', async ({ page })=>{
        const tela = new TelaLogin(page);
        await tela.abrir();
        await page.locator(loc.modalPrimeiraCompra.tela).locator(loc.modalPrimeiraCompra.fechar).click();
        await tela.login()
    });
});