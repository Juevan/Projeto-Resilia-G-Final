import { useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import axios from "axios";

export default function Postprofessor() {
    const [nome, setNome] = useState();
    const [modulos, setModulos] = useState();
    const [turmas, setTurmas] = useState();
    const [cargaHoraria, setCargaHoraria] = useState();
    const [descricao, setDescricao] = useState();


    const postAPI = async (e) => {
        await axios.post('http://localhost:3000/professor', {
            "nome": nome,
            "modulos": modulos,
            "qtdDeTurmas": turmas,
            "cargaHoraria": cargaHoraria,
            "descricao": descricao
        })
    }

    return (

        <div className='formAPI'>
            <h1>Cadastro de professors</h1>
            <form onSubmit={postAPI} >
                <input type="text" name='nome' required placeholder='Digite o nome do professor' onChange={e => setNome(e.target.value)} />
                <input type="text" name='modulos' required placeholder='Digite a quantidade de modulos' onChange={e => setModulos(e.target.value)} />
                <input type="text" name="turmas" required placeholder='Digite a quantidade de turmas' onChange={e => setTurmas(e.target.value)} />
                <input type="text" name='cargaHoraria' required placeholder='Digite a carga horária do professor' onChange={e => setCargaHoraria(e.target.value)} />
                <textarea name="descricao" required placeholder='Digite a descrição do professor' onChange={e => setDescricao(e.target.value)}></textarea>
                <input type="submit" value="Adicionar" />
            </form>
            <button><Link to='/professors'>professors</Link></button>

        </div>


    )
}