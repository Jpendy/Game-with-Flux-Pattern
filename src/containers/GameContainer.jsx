import React from 'react';
import Character from '../components/character/Character';
import styles from './GameContainer.css';
import GameControls from '../components/gameControls/GameControls';
import { useCharacter, useEnemy } from '../hooks/gameContext';

export default function GameContainer() {

  const character = useCharacter();
  const enemy = useEnemy();

  if(character.health <= 0) return <p>Game Over</p>;

  return (
    <section className={styles.gameSection} >
      <Character character={character} />
      <GameControls />
      <Character character={enemy} />            
    </section>
  );
}
