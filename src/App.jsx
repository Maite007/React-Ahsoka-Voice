
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { PaginaLogin } from './Components/PaginaLogin';
import PaginaRegistro from './Components/PaginaRegistro';
import { PaginaAterrizaje } from './Components/PaginaAterrizaje';

function App() {

  return (
    <>
        <Router>
      <Routes>
        <Route path="/" element={<PaginaAterrizaje/>} />
        <Route path="/paginaLogin" element={<PaginaLogin/>} />
        <Route path="/paginaRegistro" element={<PaginaRegistro/>} />
        <Route path="/paginaAterrizaje" element={<PaginaAterrizaje/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
