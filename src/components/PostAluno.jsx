import { useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import axios from "axios";

export default function Postaluno() {
    const [nome, setNome] = useState();
    const [turma, setTurma] = useState();
    const [media, setMedia] = useState();
    const [telefone, setTelefone] = useState();


    const postAPI = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3000/aluno', {
            "nome": nome,
            "turma": turma,
            "media": media,
            "telefone": telefone,
        })
        setTimeout(() => {
            window.location.href = '/aluno'
        }, 150)
    }

    return (

        <div className='formAPI'>
            <h1>Cadastro de Alunos</h1>
            <form onSubmit={postAPI} >
                <input type="text" name='nome' required placeholder='Digite o nome do aluno' onChange={e => setNome(e.target.value)} />
                <input type="text" name='turma' required placeholder='Digite sua turma' onChange={e => setTurma(e.target.value)} />
                <input type="text" name="media" required placeholder='Digite sua média' onChange={e => setMedia(e.target.value)} />
                <input type="text" name='telefone' required placeholder='Digite seu telefone' onChange={e => setTelefone(e.target.value)} />
                <input type="submit" value="Adicionar" />
            </form>
            <button><Link to='/aluno'>Alunos</Link></button>

        </div>


    )
}