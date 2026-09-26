import { Link } from 'react-router-dom';

export const produtos = [
  { id: 1, nome: 'Notebook Gamer', preco: 'R$ 5.000' },
  { id: 2, nome: 'Mouse sem fio', preco: 'R$ 150' },
  { id: 3, nome: 'Teclado Mecânico', preco: 'R$ 350' },
];

export default function Produtos() {
  return (
    <>
      <h1>Nossos Produtos</h1>
      <ul>
        {produtos.map((prod) => (
          <li key={prod.id}>
            <Link to={`/produtos/${prod.id}`}>{prod.nome}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}