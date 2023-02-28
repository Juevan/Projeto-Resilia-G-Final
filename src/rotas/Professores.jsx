import '../App.css';
import axios from 'axios';
import { Await, Link } from 'react-router-dom';
import ListaProfessor from '../components/ListaProfessor.jsx';
import { useEffect, useState } from 'react';

export default function professors() {

    const [professors, setprofessors] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/professor').then((e) => setprofessors(e.data))
    }, [])

    const [getprofessorId, setGetprofessorId] = useState([]);
    useEffect(() => {
       axios.get(`http://localhost:3000/professor/${professorId}`).then((e) => setGetprofessorId(e.data));
    }, []);
    
    const [busca, setBusca] = useState(false);
    const [professorId, setprofessorId] = useState('')

    const buscar = (e) => {
        e.preventDefault()
        setBusca(true);
    }

    return (
        <div className='listagem'>
            <h1>Nossos professors</h1>
            <p>A instituição de ensino FiqueRico oferece os melhores professors na área de tecnologia.<br />Se capacite e construa sua carreira nesse mercado em constante expansão!</p>
            <div>
                <button> <Link to='/cadastrodeprofessor'>Adicionar professors</Link></button>
                <form action="" onSubmit={buscar}>
                    <input type='text' name='busca' required placeholder='Digite o ID do professor...' value={professorId} onChange={e => setprofessorId(e.target.value)} />
                    <input type="submit" value="Buscar" />
                </form>
            </div>
            <p className='listaMap'>
                {busca === false ? professors.map((e) => (<ListaProfessor id={e.id} nome={e.nome} modulos={e.modulos} turmas={e.qtdDeTurmas} cargaHoraria={e.cargaHoraria} descricao={e.descricao} />)) : <Listaprofessors id={getprofessorId.id} nome={getprofessorId.nome} modulos={getprofessorId.modulos} turmas={getprofessorId.qtdDeTurmas} cargaHoraria={getprofessorId.cargaHoraria} descricao={getprofessorId.descricao} />}
            </p>
            
        </div>
    )
}