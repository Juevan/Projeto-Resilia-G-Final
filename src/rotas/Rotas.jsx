import { Link } from "react-router-dom";
import '../App.css';
import Navbar from "../../view/components/Navbar";

export default function Rotas() {

    return (
        <div className=''>
        
        <Navbar />

        <div className="rotas">
            

            <h1>ENTIDADES</h1>
            <ul>
                <li>
                    <Link to='/cursos'>Cursos</Link>
                </li>
                <li>
                    <Link>Matéria</Link>
                </li>
                <li>
                    <Link>Professor</Link>
                </li>
                <li>
                    <Link>Turma</Link>
                </li>
                <li>
                    <Link>Aluno</Link>
                </li>
            </ul>
        </div>
          
        
            
        </div>
    )
}