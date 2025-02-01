import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ControleLivro } from "./ControleLivros";
import { ControleEditora } from "./ControleEditora";

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

const LivroDados = () => {
    const opcoes = controleEditora.getEditoras().map(editora => ({
        value: editora.codEditora,
        text: editora.nome,
    }));

    const [titulo, setTitulo] = useState("");
    const [resumo, setResumo] = useState("");
    const [autores, setAutores] = useState("");
    const [codEditora, setCodEditora] = useState(opcoes[0].value);
    const navigate = useNavigate();

    const tratarCombo = (event) => {
        setCodEditora(Number(event.target.value));
    };

    const incluir = (event) => {
        event.preventDefault();
        const novoLivro = {
            codigo: 0,
            codEditora,
            titulo,
            resumo,
            autores: autores.split("\n"),
        };
        controleLivro.incluir(novoLivro);
        navigate("/");
    };

    return (
        <main>
            <h1>Dados do Livro</h1>
            <form onSubmit={incluir}>
                <div>
                    <label>Título</label>
                    <input
                        type="text"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                </div>
                <div>
                    <label>Resumo</label>
                    <textarea
                        value={resumo}
                        onChange={(e) => setResumo(e.target.value)}
                    ></textarea>
                </div>
                <div>
                    <label>Editora</label>
                    <select value={codEditora} onChange={tratarCombo}>
                        {opcoes.map((opcao) => (
                            <option key={opcao.value} value={opcao.value}>
                                {opcao.text}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Autores (1 por linha)</label>
                    <textarea
                        value={autores}
                        onChange={(e) => setAutores(e.target.value)}
                    ></textarea>
                </div>
                <button type="submit">Salvar Dados</button>
            </form>
        </main>
    );
};

export default LivroDados;
