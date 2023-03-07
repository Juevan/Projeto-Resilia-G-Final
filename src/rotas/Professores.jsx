import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import ListaProfessor from "../components/ListaProfessor.jsx";
import { useEffect, useState } from "react";
import Modal from 'react-modal';

export default function professors() {
  const [professors, setprofessors] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/professor").then((res) => setprofessors(res.data));
  }, []);

  const [getprofessorId, setGetprofessorId] = useState({});
  const [busca, setBusca] = useState(false);
  const [professorId, setprofessorId] = useState("");

  const professorsRender = professors.map((professor) => (
    <ListaProfessor
      id={professor.id}
      nome={professor.nome}
      matricula={professor.matricula}
      telefone={professor.telefone}
      endereco={professor.endereco}
    />
  ));

  const buscar = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:3000/professor/${professorId}`).then((res) => {
      setGetprofessorId(res.data);
      setBusca(true);
    });
  };

  const professorIdRender = (
    <div className="listaMapId">
      <button className="btn rota btnLista" onClick={() => setBusca(false)}>Lista de Professores</button>
      {getprofessorId.length == 0 ? <p className="pError">O número de id informado não existe!</p> : <ListaProfessor
        id={getprofessorId.id}
        nome={getprofessorId.nome}
        matricula={getprofessorId.matricula}
        telefone={getprofessorId.telefone}
        endereco={getprofessorId.endereco}
      />}
    </div>
  );

  // MODAL PARA REGISTRO DE PROFESSORES

  const [modalEditar, setModalEditar] = useState(false);
  function modalEditarOpen() {
      setModalEditar(true);
  }
  function modalEditarClosed() {
      setModalEditar(false);
  }

  const [nome, setNome] = useState();
    const [matricula, setMatricula] = useState();
    const [telefone, setTelefone] = useState();
    const [endereco, setEndereco] = useState();


    const postAPI = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3000/professor', {
            "nome": nome,
            "matricula": matricula,
            "telefone": telefone,
            "endereco": endereco
        })
        setTimeout(() => {
            window.location.href = '/professor';
        }, 1000)

        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Cadastrado com Sucesso',
            showConfirmButton: true,
            timer: 1500
        })
    }

  // FIM DO MODAL PARA REGISTRO DE PROFESSORES

  return (
    <div>
      <div className="listagem">
        <h1>Professores</h1>
        <p className="pDescricao">O time de professores que fazem parte do nosso time:</p>
        <div>
        <button className="btn adicionar" onClick={modalEditarOpen}>Adicionar professores</button>
        <Modal
            isOpen={modalEditar}
            onRequestClose={modalEditarClosed}
            contentLabel="Example Modal"
            overlayClassName="modal-overlay"
            className="modal-content"
          >
            <div className='formAPI'>
            <h1>Cadastro de Professores</h1>
            <form onSubmit={postAPI} >
                <input type="text" name='nome' required placeholder='Digite o nome do professor' onChange={e => setNome(e.target.value)} />
                <input type="text" name='matricula' required placeholder='Digite sua matrícula' onChange={e => setMatricula(e.target.value)} />
                <input type="text" name="telefone" required placeholder='Digite seu telefone' onChange={e => setTelefone(e.target.value)} />
                <input type="text" name='endereco' required placeholder='Digite o endereço' onChange={e => setEndereco(e.target.value)} />
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
              placeholder="Digite o ID do professor..."
              value={professorId}
              onChange={(e) => setprofessorId(e.target.value)}
            />
            <input className="button-buscar " type="submit" value="Buscar" />
          </form>
        </div>
        <p className="listaMap">{busca ? professorIdRender : professorsRender}</p>
      </div>
    </div>
  );
}
