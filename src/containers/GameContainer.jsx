import React from 'react';
import Character from '../components/character/Character';

export default function GameContainer() {

  const character = {
    image: 'https://vignette.wikia.nocookie.net/dbzff/images/e/ea/Goku_Artwork.png/revision/latest?cb=20200217144506',
    name: 'Goku',
    health: 100,
    attack: 10,
    experience: 0
  };

  return (
    <section>
      <Character character={character} />
      {/* <Character character={character} />             */}
    </section>
  );
}
