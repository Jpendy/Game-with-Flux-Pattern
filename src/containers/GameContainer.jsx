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
    dispatch({ type: 'ENEMY_DEATH' });
    setTimeout(()=> dispatch({ type: 'SET_NEW_ENEMY', payload: 80 }), 2000) ;
    dispatch({ type: 'SET_EXPERIENCE' });  
  }, [enemy.health]);

  const className = () => {
    if(character.hitting) return styles.Hitting;
    if(character.status === 'DEAD') return styles.CharacterDead;
    return;
  };

  if(character.health <= 0) return <p>Game Over</p>;
 
  return (
    <section className={styles.gameSection} >
      <section className={className()}  >
        <Character character={character} />
      </section>
      <GameControls />
      <section className={enemy.status === 'DEAD' ? styles.CharacterDead : ''}  >
        <Character character={enemy} />
      </section>
    </section>
  );
}
