import '../App.css';
import axios from 'axios';
import { Await, Link } from 'react-router-dom';
import ListaAluno from '../components/ListaAluno.jsx';
import { useEffect, useState } from 'react';

export default function alunos() {

    const [alunos, setalunos] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/aluno').then((e) => setalunos(e.data))
    }, [])

    const [getalunoId, setGetalunoId] = useState([]);
    useEffect(() => {
       axios.get(`http://localhost:3000/aluno/${alunoId}`).then((e) => setGetalunoId(e.data));
    }, []);
    
    const [busca, setBusca] = useState(false);
    const [alunoId, setalunoId] = useState('')

    const buscar = (e) => {
        e.preventDefault()
        setBusca(true);
    }

    return (
        <div className='listagem'>
            <h1>Nossos alunos</h1>
            <p>A instituição de ensino FiqueRico oferece os melhores alunos na área de tecnologia.<br />Se capacite e construa sua carreira nesse mercado em constante expansão!</p>
            <div>
                <button> <Link to='/cadastrodealuno'>Adicionar alunos</Link></button>
                <form action="" onSubmit={buscar}>
                    <input type='text' name='busca' required placeholder='Digite o ID do aluno...' value={alunoId} onChange={e => setalunoId(e.target.value)} />
                    <input type="submit" value="Buscar" />
                </form>
            </div>
            <p className='listaMap'>
                {busca === false ? alunos.map((e) => (<ListaAluno id={e.id} nome={e.nome} modulos={e.modulos} turmas={e.qtdDeTurmas} cargaHoraria={e.cargaHoraria} descricao={e.descricao} />)) : <ListaAluno id={getalunoId.id} nome={getalunoId.nome} modulos={getalunoId.modulos} turmas={getalunoId.qtdDeTurmas} cargaHoraria={getalunoId.cargaHoraria} descricao={getalunoId.descricao} />}
            </p>
            
        </div>
    )
}