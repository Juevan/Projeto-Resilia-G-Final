import { useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import axios from "axios";

export default function Postprofessor() {
    const [nome, setNome] = useState();
    const [matricula, setMatricula] = useState();
    const [telefone, setTelefone] = useState();
    const [endereco, setEndereco] = useState();


    const postAPI = async (e) => {
        await axios.post('http://localhost:3000/professor', {
            "nome": nome,
            "matricula": matricula,
            "telefone": telefone,
            "endereco": endereco
        })
    }

    return (

        <div className='formAPI'>
            <h1>Cadastro de Professores</h1>
            <form onSubmit={postAPI} >
                <input type="text" name='nome' required placeholder='Digite o nome do professor' onChange={e => setNome(e.target.value)} />
                <input type="text" name='matricula' required placeholder='Digite sua matrícula' onChange={e => setMatricula(e.target.value)} />
                <input type="text" name="telefone" required placeholder='Digite seu telefone' onChange={e => setTelefone(e.target.value)} />
                <input type="text" name='endereco' required placeholder='Digite o endereço' onChange={e => setEndereco(e.target.value)} />
                <input type="submit" value="Adicionar" />
            </form>
            <button><Link to='/professor'>Professores</Link></button>

        </div>


    )
}