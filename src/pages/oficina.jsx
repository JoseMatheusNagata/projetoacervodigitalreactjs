import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Oficina() {
  const [count, setCount] = useState(0);

  return (
    <main style={{ padding: '24px' }}>
      <h2>Oficina de Aprendizado</h2>
      <p>Bem-vindo à página de oficina! Este é um exemplo simples de componente React.</p>
      <button
        type="button"
        onClick={() => setCount((current) => current + 1)}
        style={{ padding: '10px 16px', fontSize: '16px', cursor: 'pointer' }}
      >
        Clique aqui
      </button>
      <p>Você clicou {count} vezes.</p>
      <p>
        Use o menu para navegar para outras páginas ou voltar ao início.
      </p>
      <Link to="/" style={{ color: '#0366d6', textDecoration: 'none' }}>
        Voltar para Início
      </Link>
    </main>
  );
}
