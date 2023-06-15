import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'

import Container from './components/layout/Conteiner'

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Ínicio</Link>
        <Link to="/company">Sobre</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/newproject">Novo Projeto</Link>
      </div>
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} > </Route>
          <Route path="company" element={<Company />} > </Route>
          <Route path="contact" element={<Contact />} > </Route>
          <Route path="newproject" element={<NewProject />} > </Route>
        </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  );
}

export default App;