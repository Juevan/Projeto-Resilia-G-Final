import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import ListaTurma from "../components/ListaTurma.jsx";
import { useEffect, useState } from "react";

export default function turma() {
  const [turma, setturma] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/turma").then((res) => setturma(res.data));
  }, []);

  const [getturmaId, setGetturmaId] = useState({});
  const [busca, setBusca] = useState(false);
  const [turmaId, setturmaId] = useState("");

  const turmaRender = turma.map((turma) => (
    <ListaTurma
      id={turma.id}
      alunos={turma.alunos}
      turno={turma.turno}
      professor={turma.professor}
    />
  ));

  const buscar = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:3000/turma/${turmaId}`).then((res) => {
      setGetturmaId(res.data);
      setBusca(true);
    });
  };

  const turmaIdRender = (
    <div className="listaMapId">
      <button className="btn rota btnLista" onClick={() => setBusca(false)}>Lista de Turmas</button>
      <ListaTurma
        id={getturmaId.id}
        alunos={getturmaId.alunos}
        turno={getturmaId.turno}
        professor={getturmaId.professor}
        />
    </div>
  );

  return (
    <div>
      <div className="listagem">
        <h1>Turmas</h1>
        <p>Turmas ativas em nossa instituição:</p>
        <div>
          <button className="btn adicionar">
            <Link to="/cadastrodeturma">Adicionar turma</Link>
          </button>
          <form className="caixa-busca" action="" onSubmit={buscar}>
            <input
              className="caixa-pesquisa"
              type="text"
              name="busca"
              required
              placeholder="Digite o ID do turma..."
              value={turmaId}
              onChange={(e) => setturmaId(e.target.value)}
            />
            <input className="button-buscar " type="submit" value="Buscar" />
          </form>
        </div>
        <p className="listaMap">{busca ? turmaIdRender : turmaRender}</p>
      </div>
    </div>
  );
}
