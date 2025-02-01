import React, { useEffect, useState } from "react";
import { ControleLivro } from "./../controle/ControleLivros";
import { ControleEditora } from "../controle/ControleEditora";
import { Livro } from "../modelo/Livros";

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

const LinhaLivro = ({ livro, excluir }: { livro: Livro; excluir: (codigo: number) => void }) => {
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);
    return (
        <tr>
            <td>
                <button onClick={() => excluir(livro.codigo)}>Excluir</button>
            </td>
            <td>{livro.titulo}</td>
            <td>{livro.resumo}</td>
            <td>{nomeEditora}</td>
            <td>
                <ul>
                    {livro.autores.map((autor, index) => (
                        <li key={index}>{autor}</li>
                    ))}
                </ul>
            </td>
        </tr>
    );
};

const LivroLista = () => {
    const [livros, setLivros] = useState<Array<Livro>>([]);
    const [carregado, setCarregado] = useState<boolean>(false);

    useEffect(() => {
        setLivros(controleLivro.obterLivros());
        setCarregado(true);
    }, [carregado]);

    const excluir = (codigo: number) => {
        controleLivro.excluir(codigo);
        setCarregado(false);
    };

    return (
        <main>
            <h1>Lista de Livros</h1>
            <table>
                <thead>
                    <tr>
                        <th>Ações</th>
                        <th>Título</th>
                        <th>Resumo</th>
                        <th>Editora</th>
                        <th>Autores</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map(livro => (
                        <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
                    ))}
                </tbody>
            </table>
        </main>
    );
};
export default LivroLista;