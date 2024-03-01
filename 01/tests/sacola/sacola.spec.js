import { TelaSacola } from './TelaSacola.js';
import { test } from '@playwright/test';

test.describe( 'Sacola', () => {

    // test( 'Inicia vazia', async({ page }) => {
    //     // Given
    //     const tela = new TelaSacola( page );
    //     await tela.abrir();
    //     // When
    //     await tela.acionaOpcaoSacola();
    //     // Then
    //     await tela.deveAparecerUmaMensagemContendo( 'vazio' );
    // } );

    test('Remover item da sacola', async({page}) => {
        const tela = new TelaSacola(page);
        await tela.adicionarItemNaSacola();
        await tela.acionaOpcaoSacola();
        await tela.removerItemNaSacola();
        await page.waitForEvent('load');
        await tela.acionaOpcaoSacola();
        await tela.deveAparecerUmaMensagemContendo('vazio');
    });

} );