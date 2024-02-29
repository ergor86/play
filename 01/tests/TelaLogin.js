export class TelaLogin {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor( page){
        this.page = page;
        this.usuario = page.locator('[name= "email"]');
        this.senha = page.locator('[name="senha"]');
        this.entrar = page.locator('button[class="button button_effect"]');
        this.mensagem = page.on('dialog',dialog.message());
    }

    async abrir(){
        await page.goto('http://test.marche.dz/');
    }

    /**
    * Loga no sistema.
    *
    * @param {string} usuario
    * @param {string} senha
    */
    async logar( usuario, senha ) {
        await this.usuario.fill( usuario );
        await this.senha.fill( senha );
        await this.entrar.click();
    }
        
}