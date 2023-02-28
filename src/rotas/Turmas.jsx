import '../App.css';
import axios from 'axios';
import { Await, Link } from 'react-router-dom';
import ListaTurma from '../components/ListaTurma.jsx';
import { useEffect, useState } from 'react';

export default function turmas() {

    const [turmas, setturmas] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/turma').then((e) => setturmas(e.data))
    }, [])

    const [getturmaId, setGetturmaId] = useState([]);
    useEffect(() => {
       axios.get(`http://localhost:3000/turma/${turmaId}`).then((e) => setGetturmaId(e.data));
    }, []);
    
    const [busca, setBusca] = useState(false);
    const [turmaId, setturmaId] = useState('')

    const buscar = (e) => {
        e.preventDefault()
        setBusca(true);
    }

    return (
        <div className='listagem'>
            <h1>Nossos turmas</h1>
            <p>A instituição de ensino FiqueRico oferece os melhores turmas na área de tecnologia.<br />Se capacite e construa sua carreira nesse mercado em constante expansão!</p>
            <div>
                <button> <Link to='/cadastrodeturma'>Adicionar turmas</Link></button>
                <form action="" onSubmit={buscar}>
                    <input type='text' name='busca' required placeholder='Digite o ID do turma...' value={turmaId} onChange={e => setturmaId(e.target.value)} />
                    <input type="submit" value="Buscar" />
                </form>
            </div>
            <p className='listaMap'>
                {busca === false ? turmas.map((e) => (<ListaTurma id={e.id} nome={e.nome} modulos={e.modulos} turmas={e.qtdDeTurmas} cargaHoraria={e.cargaHoraria} descricao={e.descricao} />)) : <ListaTurma id={getturmaId.id} nome={getturmaId.nome} modulos={getturmaId.modulos} turmas={getturmaId.qtdDeTurmas} cargaHoraria={getturmaId.cargaHoraria} descricao={getturmaId.descricao} />}
            </p>
            
        </div>
    )
}