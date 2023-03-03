import "../App.css";
import Navbar from "../../view/components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import ListaMateria from "../components/ListaMateria.jsx";
import { useEffect, useState } from "react";

export default function materias() {
  const [materias, setmaterias] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/materia").then((res) => setmaterias(res.data));
  }, []);

  const [getmateriaId, setGetmateriaId] = useState({});
  const [busca, setBusca] = useState(false);
  const [materiaId, setmateriaId] = useState("");

  const materiasRender = materias.map((materia) => (
    <ListaMateria
      id={materia.id}
      nome={materia.nome}
      cargaHoraria={materia.cargaHoraria}
      tempos={materia.tempos}
    />
  ));

  const buscar = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:3000/materia/${materiaId}`).then((res) => {
      setGetmateriaId(res.data);
      setBusca(true);
    });
  };

  const materiaIdRender = (
    <ListaMateria
      id={getmateriaId.id}
      nome={getmateriaId.nome}
      cargaHoraria={getmateriaId.cargaHoraria}
      tempos={getmateriaId.tempos}
    />
  );

  return (
    <div>
      <Navbar />
      <div className="listagem">
        <h1>Materias</h1>
        <p>Alguns dos matérias que nossa instituição oferece:</p>
        <div>
          <button className="btn rota">
            <Link to="/">Rotas</Link>
          </button>
          <button className="btn adicionar">
            <Link to="/cadastrodemateria">Adicionar materias</Link>
          </button>
          <form className="caixa-busca" action="" onSubmit={buscar}>
            <input
              className="caixa-pesquisa"
              type="text"
              name="busca"
              required
              placeholder="Digite o ID do materia..."
              value={materiaId}
              onChange={(e) => setmateriaId(e.target.value)}
            />
            <input className="button-buscar " type="submit" value="Buscar" />
          </form>
        </div>
        <p className="listaMap">{busca ? materiaIdRender : materiasRender}</p>
      </div>
    </div>
  );
}
