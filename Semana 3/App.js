import React from 'react';
import { Gallery, Profile } from './Gallery';
import PackingList from './PackingList';

export default function App() {
  return (
    <div>
      <h1>Exemplo Aula React</h1>
      <Gallery />
      <PackingList />
      <h2>Componente Individual</h2>
      <Profile />
    </div>
  );
}
