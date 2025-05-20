import React from 'react';

function Profile({ name = "Gregorio Y. Zara", imageUrl = "https://i.imgur.com/7vQD0fPs.jpg", size = 100 }) {
  return (
    <img
      className="avatar"
      src={imageUrl}
      alt={name}
      width={size}
      height={size}
    />
  );
}

function Gallery() {
  return (
    <section>
      <h2>Galeria de Perfis</h2>
      <Profile name="Maria" imageUrl="https://i.imgur.com/MK3eW3As.jpg" size={80} />
      <Profile name="Carlos" imageUrl="https://i.imgur.com/7vQD0fPs.jpg" size={100} />
      <Profile name="Joana" imageUrl="https://i.imgur.com/kXzXhzPs.jpg" size={120} />
    </section>
  );
}

export { Gallery, Profile };
