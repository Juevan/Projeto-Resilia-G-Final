import { Link } from "react-router-dom";
import '../App.css';

export default function Rotas() {

    return (
        <div className='rotas'>
            <h1>ENTIDADES</h1>
            <ul>
                <li>
                    <Link to='/cursos'>Cursos</Link>
                </li>
                <li>
                    <Link to='/materia'>Matéria</Link>
                </li>
                <li>
                    <Link to='/professor'>Professor</Link>
                </li>
                <li>
                    <Link to='/turma'>Turma</Link>
                </li>
                <li>
                    <Link to='aluno'>Aluno</Link>
                </li>
            </ul>
        </div>
    )
}