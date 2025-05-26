import React, { useState } from 'react';

const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true }
];

export default function List4() {
  const [myList, setMyList] = useState(initialList);

  function handleToggle(artworkId, nextSeen) {
    setMyList(myList.map(artwork => {
      if (artwork.id === artworkId) {
        return { ...artwork, seen: nextSeen };
      } else {
        return artwork;
      }
    }));
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <ul>
        {myList.map(artwork => (
          <li key={artwork.id}>
            <label>
              <input
                type="checkbox"
                checked={artwork.seen}
                onChange={e => handleToggle(artwork.id, e.target.checked)}
              />
              {artwork.title}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}
