import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import ListaCursos from "../components/ListaCursos.jsx";
import { useEffect, useState } from "react";

export default function Cursos() {
  const [cursos, setCursos] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/curso").then((res) => setCursos(res.data));
  }, []);

  const [getCursoId, setGetCursoId] = useState({});
  const [busca, setBusca] = useState(false);
  const [cursoId, setCursoId] = useState("");

  const cursosRender = cursos.map((curso) => (
    <ListaCursos
      id={curso.id}
      nome={curso.nome}
      modulos={curso.modulos}
      turmas={curso.qtdDeTurmas}
      cargaHoraria={curso.cargaHoraria}
      descricao={curso.descricao}
    />
  ));

  const buscar = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:3000/curso/${cursoId}`).then((res) => {
      setGetCursoId(res.data);
      setBusca(true);
    });
  };

  const cursoIdRender = (
    <div className="listaMapId">
      <button className="btn rota btnLista" onClick={() => setBusca(false)}>Lista de Cursos</button>
      <ListaCursos
        id={getCursoId.id}
        nome={getCursoId.nome}
        modulos={getCursoId.modulos}
        turmas={getCursoId.qtdDeTurmas}
        cargaHoraria={getCursoId.cargaHoraria}
        descricao={getCursoId.descricao}
      />
    </div>
  );

  return (
    <div>
      <div className="listagem">
        <h1>Cursos</h1>
        <p>Alguns dos cursos que nossa instituição oferece:</p>
        <div>
          <button className="btn adicionar">
            <Link to="/cadastrodecurso">Adicionar cursos</Link>
          </button>
          <form className="caixa-busca" action="" onSubmit={buscar}>
            <input
              className="caixa-pesquisa"
              type="text"
              name="busca"
              required
              placeholder="Digite o ID do curso..."
              value={cursoId}
              onChange={(e) => setCursoId(e.target.value)}
            />
            <input className="button-buscar " type="submit" value="Buscar" />
          </form>
        </div>
        <p className="listaMap">{busca ? cursoIdRender : cursosRender}</p>
      </div>
    </div>
  );
}
