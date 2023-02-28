import '../App.css';
import axios from 'axios';
import { Await, Link } from 'react-router-dom';
import ListaMateria from '../components/ListaMateria.jsx';
import { useEffect, useState } from 'react';

export default function Materias() {

    const [materias, setmaterias] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/materia').then((e) => setmaterias(e.data))
    }, [])

    const [getmateriaId, setGetmateriaId] = useState([]);
    useEffect(() => {
       axios.get(`http://localhost:3000/materia/${materiaId}`).then((e) => setGetmateriaId(e.data));
    }, []);
    
    const [busca, setBusca] = useState(false);
    const [materiaId, setmateriaId] = useState('')

    const buscar = (e) => {
        e.preventDefault()
        setBusca(true);
    }

    return (
        <div className='listagem'>
            <h1>Nossos materias</h1>
            <p>A instituição de ensino FiqueRico oferece os melhores materias na área de tecnologia.<br />Se capacite e construa sua carreira nesse mercado em constante expansão!</p>
            <div>
                <button> <Link to='/cadastrodemateria'>Adicionar materias</Link></button>
                <form action="" onSubmit={buscar}>
                    <input type='text' name='busca' required placeholder='Digite o ID do materia...' value={materiaId} onChange={e => setmateriaId(e.target.value)} />
                    <input type="submit" value="Buscar" />
                </form>
            </div>
            <p className='listaMap'>
                {busca === false ? materias.map((e) => (<ListaMateria id={e.id} nome={e.nome} cargaHoraria={e.cargaHoraria} tempos={e.tempos} />)) : <Listamaterias id={getmateriaId.id} nome={getmateriaId.nome} cargaHoraria={getmateriaId.cargaHoraria} tempos={getmateriaId.tempos} />}
            </p>
            
        </div>
    )
}