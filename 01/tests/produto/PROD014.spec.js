import {test, expect} from '@playwright/test';
import { TelaHome } from '../home/TelaHome';
import { TelaProduto } from './TelaProduto';
import { TelaSacola } from '../sacola/TelaSacola';
import {loc as locProduto}  from '../../src/produto/localizadores-produto.js';

test.describe('Produto', () => {
    test('Quantidade de itens não deve ultrapassar o estipulado no admin', async ({ page })=> {
        const telaSacola = new TelaSacola(page);
        const telaHome = new TelaHome(page);
        const telaProduto = new TelaProduto(page);
        await telaSacola.abrir();
        await telaHome.clicarNoPrimeiroProdutoDaVitrine();
        await telaProduto.clicarNoTamanho(locProduto.tamanhos.M);
        await telaHome.arrastaPraBaixo(300);
        do{  
            await telaProduto.adicioarUnidadeProduto();
        }while( page.on('dialog', dialog => {
            const message = dialog.message();
            expect(message).toMatch(/Quantidade Indisponível./);
           
        }));        
    });
});