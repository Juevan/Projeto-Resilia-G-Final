import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import ListaTurma from "../components/ListaTurma.jsx";
import { useEffect, useState } from "react";
import x from '../../view/x.png'
import Modal from 'react-modal';

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

  const msgErro = (
    <div className="msgErro">
      <img className="imgErr" src={x} alt="" />
      <p className="pError">O número de id informado não existe!</p>
      
    </div>
  )

  const turmaIdRender = (
    <div className="listaMapId">
      <button className="btn rota btnLista" onClick={() => setBusca(false)}>Lista de Turmas</button>
      {getturmaId.length == 0 ? msgErro : <ListaTurma
        id={getturmaId.id}
        alunos={getturmaId.alunos}
        turno={getturmaId.turno}
        professor={getturmaId.professor}
        />}
    </div>
  );

  // MODAL PARA CADASTRO DE TURMAS 

  const [modalEditar, setModalEditar] = useState(false);
  function modalEditarOpen() {
      setModalEditar(true);
  }
  function modalEditarClosed() {
      setModalEditar(false);
  }

  const [alunos, setAlunos] = useState();
    const [turno, setTurno] = useState();
    const [professor, setProfessor] = useState();


    const postAPI = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3000/turma', {
            "alunos": alunos,
            "turno": turno,
            "professor": professor
        })
        setTimeout(() => {
            window.location.href = '/turma'
        }, 150)

        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Cadastrado com Sucesso',
            showConfirmButton: true,
            timer: 1000
        })
    }

  // FIM DO MODAL PARA CADASTRO DE TURMAS

  return (
    <div>
      <div className="listagem">
        <h1>Turmas</h1>
        <p className="pDescricao">Turmas ativas em nossa instituição:</p>
        <div>
        <button className="btn adicionar" onClick={modalEditarOpen}>Adicionar turmas</button>
        <Modal
            isOpen={modalEditar}
            onRequestClose={modalEditarClosed}
            contentLabel="Example Modal"
            overlayClassName="modal-overlay"
            className="modal-content"
          >
            <div className='formAPI'>
            <h1>Cadastro de Turmas</h1>
            <form onSubmit={postAPI} >
                <input type="text" name='alunos' required placeholder='Digite a quantidade de alunos' onChange={e => setAlunos(e.target.value)} />
                <input type="text" name='turno' required placeholder='Digite o turno' onChange={e => setTurno(e.target.value)} />
                <input type="text" name="professor" required placeholder='Digite o professor da turma' onChange={e => setProfessor(e.target.value)} />
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
