import '../App.css';
import axios from 'axios';
import { Await, Link } from 'react-router-dom';
import ListaTurma from '../components/ListaTurma.jsx';
import { useEffect, useState } from 'react';
import Navbar from '../../view/components/Navbar'

export default function turmas() {

    const [turmas, setTurmas] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/turma').then((e) => setTurmas(e.data))
    }, [])

    const [getTurmaId, setGetTurmaId] = useState([]);
    useEffect(() => {
       axios.get(`http://localhost:3000/turma/${getTurmaId}`).then((e) => setGetTurmaId(e.data));
    }, []);
    
    const [busca, setBusca] = useState(false);
    const [turmaId, setTurmaId] = useState('')

    const buscar = (e) => {
        e.preventDefault()
        setBusca(true);
    }

    return (
        <div>
            <Navbar/>
            <div className='listagem'>
            <h1>Turmas</h1>
            <p>Algumas de nossas turmas:</p>
            <div>
                <button className='btn rota'><Link to='/'>Rotas</Link></button>
                <button className='btn adicionar'> <Link to='/cadastrodeturma'>Adicionar turmas</Link></button>
                <form className='caixa-busca' action="" onSubmit={buscar}>
                    <input className='caixa-pesquisa' type='text' name='busca' required placeholder='Digite o ID do turma...' value={turmaId} onChange={e => setTurmaId(e.target.value)} />
                    <input className='button-buscar ' type="submit" value="Buscar" />
                </form>
            </div>
            <p className='listaMap'>
                {busca === false ? turmas.map((e) => (<ListaTurma id={e.id} alunos={e.alunos} turno={e.turno} professor={e.professor} />)) : <ListaTurma id={getTurmaId.id} alunos={getTurmaId.alunos} turno={getTurmaId.turno} professor={getTurmaId.professor}/>}
            </p>
            
        </div>
        </div>
        
    )
}