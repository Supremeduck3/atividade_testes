import { cadastrarLivro,livroDisponivel,livroExiste, listarLivros,contarLivros,obterInformacoes,calcularTaxaAtraso} from '../src/biblioteca.js';

// describe() agrupa testes relacionados em um bloco
describe('Biblioteca - adiciona ou elimina livros', () => {

    // it(): cada um é UM caso de teste
    it('criarLivro - deve fazer o que a função promete', () => {
        // expect(valorRecebido).matcher(valorEsperado)
        expect(
            cadastrarLivro({
                autor: 'jeff k',
                disponivel: false,
                quantidade: 1,
                titulo: 'diario de um banana',
            }),
        ).toBeTruthy();
    });
    it(' LivroDisponivel - Deve verificar se um titulo existe', () => {
        expect(livroDisponivel("diario de um banana")).toBeFalsy()
    });

    it(' QuantidadeDeLivros - Tem a funcão de ver quantos livros tem na biblioteca cadastrados', () => {
        expect(listarLivros()).toBe(10)
    })
});
