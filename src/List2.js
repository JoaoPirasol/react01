import React, { useState } from 'react';

let nextId = 3;
const initialList = [
  { id: 0, title: 'Big Bellies' },
  { id: 1, title: 'Lunar Landscape' },
  { id: 2, title: 'Terracotta Army' }
];

export default function List2() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState(initialList);

  function handleClick(id) {
    setArtists(artists.filter(artist => artist.id !== id));
  }

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.title}{' '}
            <button onClick={() => handleClick(artist.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
