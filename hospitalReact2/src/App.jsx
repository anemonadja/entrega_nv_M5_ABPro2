import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Doctores from './views/Doctores';
import Contacto from './views/Contacto';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarReact from './components/Navbar';
import FooterReact from './components/Footer';



function App() {

  return (
    <Router>
      <NavbarReact />
      <Routes>
        <Route path="/home" element={ <Home/> } />
        <Route path="/doctores" element={<Doctores/>} />
        <Route path="/contacto" element={<Contacto/>} />
      </Routes>
      <FooterReact />

    </Router>
  )
}

export default App
