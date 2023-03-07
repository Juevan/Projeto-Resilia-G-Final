import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import ListaCursos from "../components/ListaCursos.jsx";
import { useEffect, useState } from "react";
import x from '../../view/x.png'
import Modal from "react-modal";

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

  const msgErro = (
    <div className="msgErro">
      <img className="imgErr" src={x} alt="" />
      <p className="pError">O número de id informado não existe!</p>
      
    </div>
  )

  const cursoIdRender = (
    <div className="listaMapId">
      <button className="btn rota btnLista" onClick={() => setBusca(false)}>Lista de Cursos</button>
      {getCursoId.length == 0 ? msgErro : <ListaCursos
        id={getCursoId.id}
        nome={getCursoId.nome}
        modulos={getCursoId.modulos}
        turmas={getCursoId.qtdDeTurmas}
        cargaHoraria={getCursoId.cargaHoraria}
        descricao={getCursoId.descricao}
      />}
    </div>
  );

  // MODAL PARA REGISTRAR CURSOS

  const [modalEditar, setModalEditar] = useState(false);
  function modalEditarOpen() {
      setModalEditar(true);
  }
  function modalEditarClosed() {
      setModalEditar(false);
  }

  const [nome, setNome] = useState();
    const [modulos, setModulos] = useState();
    const [turmas, setTurmas] = useState();
    const [cargaHoraria, setCargaHoraria] = useState();
    const [descricao, setDescricao] = useState();


    const postAPI = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3000/curso', {
            "nome": nome,
            "modulos": modulos,
            "qtdDeTurmas": turmas,
            "cargaHoraria": cargaHoraria,
            "descricao": descricao
        })
        setTimeout(() => {
            window.location.href = '/cursos'
        }, 1000)

        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Cadastrado com Sucesso',
            showConfirmButton: true,
            timer: 1500
        })
    }

  // FIM DO MODAL PARA REGISTRO DE CURSOS

  return (
    <div>
      <div className="listagem">
        <h1>Cursos</h1>
        <p className="pDescricao">Alguns dos cursos que nossa instituição oferece:</p>
        <div>
          <button className="btn adicionar" onClick={modalEditarOpen}>Adicionar cursos</button>
          <Modal
            isOpen={modalEditar}
            onRequestClose={modalEditarClosed}
            contentLabel="Example Modal"
            overlayClassName="modal-overlay"
            className="modal-content"
          >
            <div className='formAPI'>
            <h1>Cadastro de Cursos</h1>
            <form onSubmit={postAPI} >
                <input type="text" name='nome' required placeholder='Digite o nome do curso' onChange={e => setNome(e.target.value)} />
                <input type="text" name='modulos' required placeholder='Digite a quantidade de modulos' onChange={e => setModulos(e.target.value)} />
                <input type="text" name="turmas" required placeholder='Digite a quantidade de turmas' onChange={e => setTurmas(e.target.value)} />
                <input type="text" name='cargaHoraria' required placeholder='Digite a carga horária do curso' onChange={e => setCargaHoraria(e.target.value)} />
                <textarea name="descricao" required placeholder='Digite a descrição do curso' onChange={e => setDescricao(e.target.value)}></textarea>
                <input type="submit" value="Adicionar" />
            </form>
        </div>
          </Modal>
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
