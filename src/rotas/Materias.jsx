import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import ListaMateria from "../components/ListaMateria.jsx";
import { useEffect, useState } from "react";
import x from '../../view/x.png'
import Modal from 'react-modal';

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

  const msgErro = (
    <div className="msgErro">
      <img className="imgErr" src={x} alt="" />
      <p className="pError">O número de id informado não existe!</p>
      
    </div>
  )

  const materiaIdRender = (
    <div className="listaMapId">
      <button className="btn rota btnLista" onClick={() => setBusca(false)}>Lista de Matérias</button>
      {getmateriaId.length == 0 ? msgErro : <ListaMateria
        id={getmateriaId.id}
        nome={getmateriaId.nome}
        cargaHoraria={getmateriaId.cargaHoraria}
        tempos={getmateriaId.tempos}
      />}
    </div>
  );

// MODAL PARA REGISTRO DE MATÉRIAS

  const [modalEditar, setModalEditar] = useState(false);
  function modalEditarOpen() {
      setModalEditar(true);
  }
  function modalEditarClosed() {
      setModalEditar(false);
  }

  const [nome, setNome] = useState();
  const [cargaHoraria, setCargaHoraria] = useState();
  const [tempos, setTempos] = useState();


  const postAPI = async (e) => {
      e.preventDefault();
      await axios.post('http://localhost:3000/materia', {
          "nome": nome,
          "cargaHoraria": cargaHoraria,
          "tempos": tempos
      })
      setTimeout(() => {
          window.location.href = '/materia';
      }, 1000)

      Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Cadastrado com Sucesso',
          showConfirmButton: true,
          timer: 1500
      })
  }

//  FIM DO MODAL PARA REGISTRAR MATÉRIAS

  return (
    <div>
      <div className="listagem">
        <h1>Matérias</h1>
        <p className="pDescricao">Algumas das matérias que nossa instituição oferece:</p>
        <div>
        <button className="btn adicionar" onClick={modalEditarOpen}>Adicionar matéria</button>
          <Modal
            isOpen={modalEditar}
            onRequestClose={modalEditarClosed}
            contentLabel="Example Modal"
            overlayClassName="modal-overlay"
            className="modal-content"
          >
            <div className='formAPI'>
            <h1>Cadastro de Matérias</h1>
            <form onSubmit={postAPI} >
                <input type="text" name='nome' required placeholder='Digite o nome do matéria' onChange={e => setNome(e.target.value)} />
                <input type="text" name='cargaHoraria' required placeholder='Digite a carga horária do matéria' onChange={e => setCargaHoraria(e.target.value)} />
                <input type="text" name="tempos" required placeholder='Digite quantos tempos tem a matéria' onChange={e => setTempos(e.target.value)} />
                <input id="btnPost" type="submit" value="Adicionar" />
            </form>
        </div>
          </Modal>
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
