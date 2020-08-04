import React from 'react';
import Character from '../components/character/Character';
import styles from './GameContainer.css';
import GameControls from '../components/gameControls/GameControls';

export default function GameContainer() {

  const character = {
    image: 'https://vignette.wikia.nocookie.net/dbzff/images/e/ea/Goku_Artwork.png/revision/latest?cb=20200217144506',
    name: 'Goku',
    health: 100,
    attack: 10,
    experience: 0
  };

  const enemy = {
    image: 'https://image.pngaaa.com/353/31353-middle.png',
    name: 'Frieza',
    health: 80,
    attack: 5,
    experience: 20
  };

  return (
    <section className={styles.gameSection} >
      <Character character={character} />
      <GameControls />
      <Character character={enemy} />            
    </section>
  );
}
