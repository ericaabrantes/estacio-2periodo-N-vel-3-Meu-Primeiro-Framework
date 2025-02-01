import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LivroLista from "./LivroLista";
import LivroDados from "./LivroDados";
import "./App.css";

function App() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        Catálogo
                    </Link>
                    <Link className="navbar-brand" to="/dados">
                        Novo
                    </Link>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<LivroLista />} />
                <Route path="/dados" element={<LivroDados />} />
            </Routes>
        </Router>
    );
}

export default App;
