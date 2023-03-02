import '../App.css';
import Navbar from '../../view/components/Navbar'
import axios from 'axios';
import { Link } from 'react-router-dom';
import ListaCursos from '../components/ListaCursos.jsx';
import { useEffect, useState } from 'react';

export default function Cursos() {

    const [cursos, setCursos] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/curso').then((e) => setCursos(e.data))
    }, [])

    const [getCursoId, setGetCursoId] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3000/curso/${idCurso}`).then((e) => setGetCursoId(e.data));
    }, []);

    const [busca, setBusca] = useState(false);
    const [cursoId, setCursoId] = useState();
    const [idCurso, setIdCurso] = useState();

    const buscar = (e) => {
        e.preventDefault();
        setBusca(true);
        setIdCurso(cursoId);
    }

    return (
        <div>
            <Navbar/>
           <div className='listagem'>
            <h1>Cursos</h1>
            <p>Alguns dos cursos que nossa instituição oferece:</p>
            <div>
                <button className='btn rota'><Link to='/'>Rotas</Link></button>
                <button className='btn adicionar'> <Link to='/cadastrodecurso'>Adicionar cursos</Link></button>
                <form className='caixa-busca'  action="" onSubmit={buscar}>
                    <input className='caixa-pesquisa' type='text' name='busca' required placeholder='Digite o ID do curso...' value={cursoId} onChange={e => setCursoId(e.target.value)} />
                    <input className='button-buscar ' type="submit" value="Buscar" />
                </form>
            </div>
            <p className='listaMap'>
                {busca === false ? cursos.map((e) => (<ListaCursos id={e.id} nome={e.nome} modulos={e.modulos} turmas={e.qtdDeTurmas} cargaHoraria={e.cargaHoraria} descricao={e.descricao} />)) : <ListaCursos id={getCursoId.id} nome={getCursoId.nome} modulos={getCursoId.modulos} turmas={getCursoId.qtdDeTurmas} cargaHoraria={getCursoId.cargaHoraria} descricao={getCursoId.descricao} />}
            </p>

        </div> 
        </div>
        
    )
}