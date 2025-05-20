import React from 'react';

function Item({ name, isPacked }) {
  return (
    <li className="item">
      {isPacked ? <del>{name} ✔</del> : name}
    </li>
  );
}

export default function PackingList() {
  const items = [
    { id: 1, name: "Escova de dentes", isPacked: true },
    { id: 2, name: "Carregador de celular", isPacked: false },
    { id: 3, name: "Camisas", isPacked: true },
  ];

  return (
    <section>
      <h2>Lista de Viagem</h2>
      <ul>
        {items.map(item =>
          <Item
            key={item.id}
            name={item.name}
            isPacked={item.isPacked}
          />
        )}
      </ul>
    </section>
  );
}
