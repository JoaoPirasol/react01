import React, { useState } from 'react';

let nextId = 3;
const initialList = [
  { id: 0, title: 'Big Bellies' },
  { id: 1, title: 'Lunar Landscape' },
  { id: 2, title: 'Terracotta Army' }
];

export default function List3() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState(initialList);

  function handleClick(id) {
    const updatedArtists = artists.map(artist => {
      if (artist.id === id) {
        return { ...artist, title: name };
      } else {
        return artist;
      }
    });
    setArtists(updatedArtists);
  }

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.title}{' '}
            <button onClick={() => handleClick(artist.id)}>
              Rename
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
