import {loc} from '../../src/produto/localizadores-produto.js';
import rotas from '../../src/rotas.js';

export class TelaProduto {

    /**
     * @param {import("@playwright/test").Page} page
     */
    constructor( page ) {
        this.page = page;
    }

    async clicarNoTamanho(tamanho) {
        await this.page.locator(tamanho).click();
    }

    async adicionarProdutoDoTamanhoNaSacola(tamanho) {
        await this.clicarNoTamanho(tamanho);
        await this.adicionarProdutoNaSacola();
    }

    async fecharDialogoComprarMaisProdutos(){
        await this.page.locator(loc.botaoFecharDialogoComprarMaisProdutos).first().click();
    }
    async adicionarProdutoNaSacola() {
        await this.page.locator(loc.botaoAdicionarProdutoASacola).click();
    }

    async adicioarUnidadeProduto(){
        await this.page.getByRole('button', { name: '+' }).click();
    }
}