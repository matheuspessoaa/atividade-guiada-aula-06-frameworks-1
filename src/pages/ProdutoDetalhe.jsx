import { useParams, Link } from 'react-router-dom';
import { produtos } from './Produtos';

export default function ProdutoDetalhe() {
  const { id } = useParams();
  
  const produtoEncontrado = produtos.find(
    (prod) => prod.id === parseInt(id)
  );

  if (!produtoEncontrado) {
    return (
      <div className="page-container">
        <h2>Produto não encontrado!</h2>
        <Link className="back-link" to="/produtos">Voltar para a lista</Link>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h1>Detalhes do Produto</h1>
      <h2>{produtoEncontrado.nome}</h2>
      <p>Preço: {produtoEncontrado.preco}</p>
      <Link className="back-link" to="/produtos">Voltar para a lista</Link>
    </div>
  );
}