import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import PostCurso from './components/PostCurso.jsx';
import Cursos from './rotas/Cursos.jsx';
import Rotas from './rotas/Rotas.jsx';
import './App.css'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Rotas />} />
        <Route path='/cadastrodecurso' element={<PostCurso />} />
        <Route path='/cursos' element={<Cursos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
