import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import Navbar from '../view/components/Navbar.jsx';
import Cursos from './rotas/Cursos.jsx';
import Alunos from './rotas/Alunos.jsx';
import Professores from './rotas/Professores.jsx';
import Turmas from './rotas/Turmas.jsx';
import Materias from './rotas/Materias.jsx';
import Rotas from './rotas/Rotas.jsx';
import Equipe from './rotas/Equipe.jsx';
import './App.css'


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Rotas />} />
        <Route path='/cursos' element={<Cursos />} />
        <Route path='/materia' element={<Materias />} />
        <Route path='/professor' element={<Professores />} />
        <Route path='/aluno' element={<Alunos />} />
        <Route path='/turma' element={<Turmas />} />
        <Route path='/equipe' element={<Equipe/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
