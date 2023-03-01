import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import PostCurso from './components/PostCurso.jsx';
import PostAluno from './components/PostAluno.jsx';
import PostProfessor from './components/PostProfessor.jsx';
import PostTurma from './components/PostTurma.jsx';
import PostMateria from './components/PostMateria';
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
      <Routes>
        <Route exact path='/' element={<Rotas />} />
        <Route path='/cadastrodecurso' element={<PostCurso />} />
        <Route path='/cursos' element={<Cursos />} />
        <Route path='/cadastrodemateria' element={<PostMateria />} />
        <Route path='/materia' element={<Materias />} />
        <Route path='/cadastrodeprofessor' element={<PostProfessor />} />
        <Route path='/professor' element={<Professores />} />
        <Route path='/cadastrodealuno' element={<PostAluno />} />
        <Route path='/aluno' element={<Alunos />} />
        <Route path='/cadastrodeturma' element={<PostTurma />} />
        <Route path='/turma' element={<Turmas />} />
        <Route path='/equipe' element={<Equipe/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
