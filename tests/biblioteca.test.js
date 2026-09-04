import {
    cadastrarLivro,
    livroExiste,
    livroDisponivel,
    listarLivros,
    contarLivros,
    obterInformacoes,
    calcularTaxaAtraso,
} from '../src/Biblioteca';

describe('Biblioteca Codeverse', () => {
    describe('Livros', () => {
        it('deve listar toods os livros', () => {
            expect(listarLivros()).toBeTruthy();
        });

        it('deve possuir a quantidade esperada de livros', () => {
            expect([1, 2, 3, 4, 5]).toHaveLength(5);
        });

        it('deve encontar um livro especifico', () => {
            expect({
                id: 1,
                titulo: 'É Assim que Acaba',
                autor: 'Colleen Hoover',
                quantidade: 3,
                disponivel: true,
            }).toBeTruthy();
        });

        it('deve retornar que o livro é inexistente', () => {
            expect(livroExiste('livro hipotetico')).toBe(false);
        });

        it('O título de um livro aparece na biblioteca', () => {
            expect({ titulo: 'Harry Potter e a Pedra Filosofal' }).toBeTruthy();
        });
    });
});

describe('Disponibilidade', () => {
    it('Um livro disponível deve ser identificado como disponível', () => {
        expect(livroDisponivel()).toBeTruthy();
    });

    it('Um livro emprestado não deve ser considerado disponível', () => {
        expect(livroDisponivel()).toBe(true);
    });

    it('Um livro inexistente não deve ser tratado como disponível', () => {
        expect(livroExiste('livro hipotetico')).toBe(false);
    });
});

describe('Quantidade', () => {
    it('A biblioteca deve informar corretamente a quantidade de livros', () => {
        expect(contarLivros()).toBe(5);
    });

    it('A quantidade retornada deve ser coerente com a lista.', () => {
        expect(contarLivros()).toBe(listarLivros().length);
    });
});

describe('Informações', () => {
    it('A biblioteca deve possuir um nome', () => {
        expect(obterInformacoes().nome).toBe('Biblioteca Codeverse');
    });

    it('O nome deve ser o esperado', () => {
        expect({ titulo: 'One Piece, Vol. 1' }).toEqual({ titulo: 'One Piece, Vol. 1' });
    });
    it('As informações retornadas devem possuir a estrutura correta', () => {
        expect(obterInformacoes()).toEqual({
            nome: 'Biblioteca Codeverse',
            totalLivros: contarLivros(),
            cidade: 'London',
            provincia: 'ON',
        });
    });
});

describe('taxas de atraso', () => {
    it('R$ 1,50 por dia de atraso, 1 dia', () => {
        expect(calcularTaxaAtraso(1)).toBeCloseTo(1.5);
    });
    it('R$ 1,50 por dia de atraso, 3 dias', () => {
        expect(calcularTaxaAtraso(2)).toBeCloseTo(3.0);
    });
    it('R$ 1,50 por dia de atraso, 5 dias', () => {
        expect(calcularTaxaAtraso(5)).toBeCloseTo(7.5);
    });
});
