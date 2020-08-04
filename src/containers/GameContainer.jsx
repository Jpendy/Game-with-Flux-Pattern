import React, { useEffect } from 'react';
import Character from '../components/character/Character';
import styles from './GameContainer.css';
import GameControls from '../components/gameControls/GameControls';
import { useDispatch, useCharacter, useEnemy } from '../hooks/gameContext';

export default function GameContainer() {

  const character = useCharacter();
  const enemy = useEnemy();
  const dispatch = useDispatch();

  useEffect(() => {
    if(enemy.health > 0) return;
    dispatch({ type: 'SET_NEW_ENEMY', payload: 80 });
    dispatch({ type: 'SET_EXPERIENCE' });  
  }, [enemy.health]);


  if(character.health <= 0) return  <p>Game Over</p>;
 
  return (
    <section className={styles.gameSection} >
      <Character character={character} />
      <GameControls />
      <Character character={enemy} />            
    </section>
  );
}
