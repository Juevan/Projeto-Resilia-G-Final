import '../App.css';
import axios from 'axios';
import { Await, Link } from 'react-router-dom';
import ListaProfessor from '../components/ListaProfessor.jsx';
import { useEffect, useState } from 'react';
import Navbar from '../../view/components/Navbar'

export default function professors() {

    const [professores, setprofessores] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/professor').then((e) => setprofessores(e.data))
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
        <div>
            <Navbar/>
            <div className='listagem'>
            <h1>Professores</h1>
            <p>Nosso time de professores:</p>
            <div>
                <button className='btn rota'><Link to='/'>Rotas</Link></button>
                <button className='btn adicionar'> <Link to='/cadastrodeprofessor'>Adicionar professor</Link></button>
                <form className='caixa-busca' action="" onSubmit={buscar}>
                    <input className='caixa-pesquisa' type='text' name='busca' required placeholder='Digite o ID do professor...' value={professorId} onChange={e => setprofessorId(e.target.value)} />
                    <input className='button-buscar ' type="submit" value="Buscar" />
                </form>
            </div>
            <p className='listaMap'>
                {busca === false ? professores.map((e) => (<ListaProfessor id={e.id} nome={e.nome} matricula={e.matricula} telefone={e.telefone} endereco={e.endereco} />)) : <ListaProfessor id={getprofessorId.id} nome={getprofessorId.nome} matricula={getprofessorId.matricula} telefone={getprofessorId.telefone} endereco={getprofessorId.endereco} />}
            </p>
            
        </div>
        </div>
        
    )
}