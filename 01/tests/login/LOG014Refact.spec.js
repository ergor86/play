import {test, expect} from '@playwright/test';
import { TelaLogin } from './TelaLoginTiago.js';
import loc from '../../src/login/localizadores-login.js';
import { TelaHome } from '../home/TelaHome.js';

test.describe('Login', () => {
    test('Login com usuario e senha vazios', async ({ page })=>{
        const telaHome = new TelaHome(page);
        const telaLogin = new TelaLogin(page);
        await telaHome.abrir();
        await page.locator(loc.modalPrimeiraCompra.tela).locator(loc.modalPrimeiraCompra.fechar).click();
        await telaHome.clicarEmFavoritarPrimeiroProdutoVitrine();
        await telaLogin.tentalogarSemInformarDados();
        await telaLogin.deveExibirCaixaDeSenhaDestacada();
        
        
    });
});