const loc = {

    modalPrimeiraCompra: {
        tela: '#modal-primeira-compra',
        fechar: 'a.close-reveal-modal',
    },

    menu: {
        usuario: 'a.header_login__linklogin',
    },

    formularioLogin: {
        email: '#header #form-logar-box input[type="email"]',
        senha: '#header #form-logar-box input[type="password"]',
        entrar: '#header #form-logar-box button',
    },

    produtosVitrine: {
        primeiroProduto: '.home_produtos__list#splide01-list li.is-active:nth-child(1) figure',
        botaoFavoritoPrimeiroProduto: '.home_produtos__list#splide01-list li.is-active:nth-child(1) .adicionar-lista-desejos.deslogado'
    }

};

export default loc;
