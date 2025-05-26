import React, { useState } from 'react';

const sculptureList = [
  {
    name: 'Homenaje a la Neurocirugía',
    artist: 'Marta Colvin Andrade',
    description:
      'Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture is an homage to neurosurgery.',
    url: 'https://i.imgur.com/Mx7dA2Y.jpg',
    alt: 'A bronze statue of two crossed hands delicately holding a human brain in their fingertips.'
  },
  {
    name: 'Floralis Genérica',
    artist: 'Eduardo Catalano',
    description:
      'This enormous silver flower is located in Buenos Aires. It closes its petals at night and opens them in the morning.',
    url: 'https://i.imgur.com/ZF6s192m.jpg',
    alt: 'A gigantic metallic flower sculpture with reflective petals.'
  },
  {
    name: 'Eternal Presence',
    artist: 'John Woodrow Wilson',
    description:
      'This massive bronze head represents a symbolic Black presence infused with a sense of universal humanity.',
    url: 'https://i.imgur.com/aTtVpES.jpg',
    alt: 'The sculpture depicts a large solemn human head.'
  }
];

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const sculpture = sculptureList[index];

  function handleNextClick() {
    setIndex((index + 1) % sculptureList.length);
  }

  function toggleDetails() {
    setShowMore(!showMore);
  }

  return (
    <>
      <button onClick={handleNextClick}>Next</button>
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img
        src={sculpture.url}
        alt={sculpture.alt}
        style={{ width: '300px', height: 'auto' }}
      />
      <button onClick={toggleDetails}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
    </>
  );
}
