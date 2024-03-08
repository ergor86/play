import loc from '../../src/home/localizadores-home.js';
import rotas from '../../src/rotas.js';

export class TelaHome {

    /**
     * @param {import("@playwright/test").Page} page
     */
    constructor( page ) {
        this.page = page;
    }

    async abrir() {
        await this.page.goto( rotas.home );
    }


    async fecharDialogoDePrimeiraCompra() {
        await this.page.locator( loc.modalPrimeiraCompra.tela )
            .locator( loc.modalPrimeiraCompra.fechar ).click();
    }

    async arrastaPraBaixo(y) {
        await this.page.mouse.wheel(0, y);
    }

    async clicarNoPrimeiroProdutoDaVitrine() {
        await this.arrastaPraBaixo(300);
        await this.page.locator(loc.produtosVitrine.primeiroProduto).click();
    }

    async clicarEmFavoritarPrimeiroProdutoVitrine() {
        await this.arrastaPraBaixo(400);
        await this.page.waitForSelector(loc.produtosVitrine.botaoFavoritoPrimeiroProduto);
        await this.page.locator(loc.produtosVitrine.botaoFavoritoPrimeiroProduto).click();
    }
    
}