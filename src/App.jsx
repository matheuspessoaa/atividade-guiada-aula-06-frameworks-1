import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Menu from './components/Menu';
import Produtos from './pages/Produtos'; // <-- Importar
import ProdutoDetalhe from './pages/ProdutoDetalhe'; // <-- Importar

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/produtos" element={<Produtos />} /> {/* <-- Nova Rota */}
        <Route path="/produtos/:id" element={<ProdutoDetalhe />} /> {/* <-- Rota Dinâmica */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;