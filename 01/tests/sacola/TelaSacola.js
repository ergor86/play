import loc from '../../src/sacola/localizadores-sacola.js';
import {loc as locProduto}  from '../../src/produto/localizadores-produto.js';
import rotas from '../../src/rotas.js';
import { expect } from '@playwright/test';
import { TelaHome } from '../home/TelaHome.js';
import { TelaProduto } from '../produto/TelaProduto.js';

export class TelaSacola { // POM

    /**
     * @param {import("@playwright/test").Page} page
     */
    constructor( page ) {
        this.page = page;
    }

    
    async abrir() {
        const telaHome = new TelaHome( this.page );
        await telaHome.abrir();
        await telaHome.fecharDialogoDePrimeiraCompra();
        return telaHome;
    }

    async acionaOpcaoSacola() {
        await this.page.locator( loc.opcaoSacola ).first().click();
    }

    async deveAparecerUmaMensagemContendo( texto ) {
        await expect( this.page.locator( loc.textoSacola ) ).toContainText( texto );
    }

    async adicionarItemNaSacola() {
        const telaHome = await this.abrir();
        await telaHome.clicarNoPrimeiroProdutoDaVitrine();
        await this.page.waitForEvent('load');
        const telaProduto = new TelaProduto(this.page);
        await telaHome.arrastaPraBaixo(200);
        await telaProduto.adicionarProdutoDoTamanhoNaSacola(locProduto.tamanhos.M);
        await telaProduto.fecharDialogoComprarMaisProdutos();
    }

    async removerItemNaSacola(){
        await this.page.locator(loc.botaoRemoverItemDaSacola).click();
        await this.page.waitForTimeout(3000);
    }
}