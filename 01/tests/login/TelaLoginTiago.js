import { expect } from '@playwright/test';
import rotas from '../../src/rotas.js';
import loc from '../../src/login/localizadores-login.js';

export class TelaLogin {
    /**
     * @param {import('@playwright/test').page} page
     */
    constructor( page ){
        this.page = page;
    }

    async abrir(){
        await this.page.goto(rotas.login);
    }

    /**
     * Loga no sistema
     * 
     * @param {string} usuario
     * @param {string} senha
     */
    async login(usuario, senha) {
        await this.page.locator( loc.usuario ).fill( usuario );
        await this.page.locator( loc.senha ).fill( senha );
        await this.page.locator( loc.entrar ).click();
    }

    async tentalogarSemInformarDados() {
        await this.page.locator( '#form-logar-box' ).nth( 1 ).locator( 'button' ).click();
        await this.page.on('dialog', dialog => dialog.accept());
    }

    /**
     * Verifica se é exibida  uma mensagem  contendo o texto informado
     * 
     * @param {string} texto
     */
    async deveExibirMensagemCom( texto){
        const dialog = await this.page.waitForEvent( 'dialog' );
        expect( dialog.message() ).toContain( texto );
        dialog.accept();
    }

    async deveExibirCaixaDeSenhaDestacada(){
        await expect( this.page.locator(loc.formularioLogin.senha)).toHaveCSS("background-color", "rgb(255, 186, 186)");
    }
}