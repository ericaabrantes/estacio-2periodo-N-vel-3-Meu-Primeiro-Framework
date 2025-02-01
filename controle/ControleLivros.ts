import { Livro } from "../modelo/Livros";

let livros: Array<Livro> = [
    new Livro(1, 1, "Livro 1", "Resumo do livro 1", ["Autor 1"]),
    new Livro(2, 2, "Livro 2", "Resumo do livro 2", ["Autor 2"]),
    new Livro(3, 3, "Livro 3", "Resumo do livro 3", ["Autor 3"]),
];

export class ControleLivro {
    obterLivros(): Array<Livro> {
        return livros;
    }
    incluir(livro: Livro): void {
        livro.codigo = livros.length > 0 ? Math.max(...livros.map(l => l.codigo)) + 1 : 1;
        livros.push(livro);
    }
    excluir(codigo: number): void {
        const index = livros.findIndex(l => l.codigo === codigo);
        if (index !== -1) {
            livros.splice(index, 1);
        }
    }
}