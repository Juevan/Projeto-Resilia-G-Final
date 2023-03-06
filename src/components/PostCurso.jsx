import { useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import axios from "axios";

export default function PostCurso() {
    const [nome, setNome] = useState();
    const [modulos, setModulos] = useState();
    const [turmas, setTurmas] = useState();
    const [cargaHoraria, setCargaHoraria] = useState();
    const [descricao, setDescricao] = useState();


    const postAPI = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3000/curso', {
            "nome": nome,
            "modulos": modulos,
            "qtdDeTurmas": turmas,
            "cargaHoraria": cargaHoraria,
            "descricao": descricao
        })
        setTimeout(() => {
            window.location.href = '/cursos'
        }, 1000)

        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Cadastrado com Sucesso',
            showConfirmButton: true,
            timer: 1500
        })
    }

    return (

        <div className='formAPI'>
            <h1>Cadastro de Cursos</h1>
            <form onSubmit={postAPI} >
                <input type="text" name='nome' required placeholder='Digite o nome do curso' onChange={e => setNome(e.target.value)} />
                <input type="text" name='modulos' required placeholder='Digite a quantidade de modulos' onChange={e => setModulos(e.target.value)} />
                <input type="text" name="turmas" required placeholder='Digite a quantidade de turmas' onChange={e => setTurmas(e.target.value)} />
                <input type="text" name='cargaHoraria' required placeholder='Digite a carga horária do curso' onChange={e => setCargaHoraria(e.target.value)} />
                <textarea name="descricao" required placeholder='Digite a descrição do curso' onChange={e => setDescricao(e.target.value)}></textarea>
                <input type="submit" value="Adicionar" />
            </form>
            <button><Link to='/cursos'>Cursos</Link></button>

        </div>


    )
}