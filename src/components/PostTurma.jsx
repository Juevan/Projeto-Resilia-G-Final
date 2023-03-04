import { useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import axios from "axios";

export default function Postturma() {
    const [alunos, setAlunos] = useState();
    const [turno, setTurno] = useState();
    const [professor, setProfessor] = useState();


    const postAPI = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3000/turma', {
            "alunos": alunos,
            "turno": turno,
            "professor": professor
        })
        setTimeout(() => {
            window.location.href = '/turma'
        }, 150)
    }

    return (

        <div className='formAPI'>
            <h1>Cadastro de Turmas</h1>
            <form onSubmit={postAPI} >
                <input type="text" name='alunos' required placeholder='Digite a quantidade de alunos' onChange={e => setAlunos(e.target.value)} />
                <input type="text" name='turno' required placeholder='Digite o turno' onChange={e => setTurno(e.target.value)} />
                <input type="text" name="professor" required placeholder='Digite o professor da turma' onChange={e => setProfessor(e.target.value)} />
                <input type="submit" value="Adicionar" />
            </form>
            <button><Link to='/turma'>Turmas</Link></button>

        </div>


    )
}