import { useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import axios from "axios";

export default function Postmateria() {
    const [nome, setNome] = useState();
    const [cargaHoraria, setCargaHoraria] = useState();
    const [tempos, setTempos] = useState();


    const postAPI = async (e) => {
        await axios.post('http://localhost:3000/materia', {
            "nome": nome,
            "cargaHoraria": cargaHoraria,
            "tempos": tempos
        })
    }

    return (

        <div className='formAPI'>
            <h1>Cadastro de Matérias</h1>
            <form onSubmit={postAPI} >
                <input type="text" name='nome' required placeholder='Digite o nome do matéria' onChange={e => setNome(e.target.value)} />
                <input type="text" name='cargaHoraria' required placeholder='Digite a carga horária do matéria' onChange={e => setCargaHoraria(e.target.value)} />
                <input type="text" name="tempos" required placeholder='Digite quantos tempos tem a matéria' onChange={e => setTempos(e.target.value)} />
                <input type="submit" value="Adicionar" />
            </form>
            <button><Link to='/materia'>Matérias</Link></button>

        </div>


    )
}