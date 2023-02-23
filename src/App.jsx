import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import PostCurso from './components/PostCurso.jsx';
import Cursos from './components/Cursos.jsx';
import './App.css'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<PostCurso />} />
        <Route path='/cursos' element={<Cursos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
