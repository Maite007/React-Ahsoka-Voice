
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { PaginaLogin } from './Components/PaginaLogin';
import PaginaRegistro from './Components/PaginaRegistro';
import { PaginaAterrizaje } from './Components/PaginaAterrizaje';
import { PaginaPrincipal } from './Components/PaginaPrincipal';
import PaginaPerfil from './Components/PaginaPerfil';

function App() {

  return (
    <>
        <Router>
      <Routes>
        <Route path="/" element={<PaginaAterrizaje/>} />
        <Route path="/paginaLogin" element={<PaginaLogin/>} />
        <Route path="/paginaRegistro" element={<PaginaRegistro/>} />
        <Route path="/paginaAterrizaje" element={<PaginaAterrizaje/>} />
        <Route path='/paginaPrincipal' element={<PaginaPrincipal/>}/>
        <Route path='/paginaPerfil' element={<PaginaPerfil/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
