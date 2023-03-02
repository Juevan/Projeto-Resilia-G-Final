import '../App.css';
import axios from 'axios';
import { Await, Link } from 'react-router-dom';
import ListaAluno from '../components/ListaAluno.jsx';
import { useEffect, useState } from 'react';
import Navbar from '../../view/components/Navbar'

export default function alunos() {

    const [alunos, setAlunos] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/aluno').then((e) => setAlunos(e.data))
    }, [])

    const [getAlunoId, setGetAlunoId] = useState([]);
    useEffect(() => {
       axios.get(`http://localhost:3000/aluno/${alunoId}`).then((e) => setGetAlunoId(e.data));
    }, []);
    
    const [busca, setBusca] = useState(false);
    const [alunoId, setAlunoId] = useState('')

    const buscar = (e) => {
        e.preventDefault()
        setBusca(true);
    }

    return (
        <div>
            <Navbar/>
            <div className='listagem'>
            <h1>Alunos</h1>
            <p>Os alunos de nossa unidade:</p>
            <div>
                <button className='btn rota'><Link to='/'>Rotas</Link></button>
                <button className='btn adicionar'> <Link to='/cadastrodealuno'>Adicionar alunos</Link></button>
                <form className='caixa-busca' action="" onSubmit={buscar}>
                    <input className='caixa-pesquisa' type='text' name='busca' required placeholder='Digite o ID do aluno...' value={alunoId} onChange={e => setAlunoId(e.target.value)} />
                    <input className='button-buscar '  type="submit" value="Buscar" />
                </form>
            </div>
            <p className='listaMap'>
                {busca === false ? alunos.map((e) => (<ListaAluno id={e.id} nome={e.nome} turma={e.turma} media={e.media} telefone={e.telefone} />)) : <ListaAluno id={getAlunoId.id} nome={getAlunoId.nome} turma={getAlunoId.turma} media={getAlunoId.media} telefone={getAlunoId.telefone} />}
            </p>
            
        </div>
        </div>
        
    )
}