import '../App.css';
import axios from 'axios';
import { Await, Link } from 'react-router-dom';
import ListaCursos from './ListaCursos.jsx';
import { useEffect, useState } from 'react';

export default function Cursos() {

    const [cursos, setCursos] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/curso').then((e) => setCursos(e.data))
    }, [])

    const [getCursoId, setGetCursoId] = useState([]);
    useEffect(() => {
       axios.get(`http://localhost:3000/curso/${cursoId}`).then((e) => setGetCursoId(e.data));
    }, []);
    
    const [busca, setBusca] = useState(false);
    const [cursoId, setCursoId] = useState('')

    const buscar = (e) => {
        e.preventDefault()
        setBusca(true);
    }

    return (
        <div className='listagem'>
            <h1>Nossos Cursos</h1>
            <p>A instituição de ensino FiqueRico oferece os melhores cursos na área de tecnologia.<br />Se capacite e construa sua carreira nesse mercado em constante expansão!</p>
            <div>
                <button> <Link to='/'>Adicionar cursos</Link></button>
                <form action="" onSubmit={buscar}>
                    <input type='text' name='busca' required placeholder='Digite o ID do curso...' value={cursoId} onChange={e => setCursoId(e.target.value)} />
                    <input type="submit" value="Buscar" />
                </form>
            </div>
            <p className='listaMap'>
                {busca === false ? cursos.map((e) => (<ListaCursos id={e.id} nome={e.nome} modulos={e.modulos} turmas={e.qtdDeTurmas} cargaHoraria={e.cargaHoraria} descricao={e.descricao} />)) : <ListaCursos id={getCursoId.id} nome={getCursoId.nome} modulos={getCursoId.modulos} turmas={getCursoId.qtdDeTurmas} cargaHoraria={getCursoId.cargaHoraria} descricao={getCursoId.descricao} />}
            </p>
            
        </div>
    )
}