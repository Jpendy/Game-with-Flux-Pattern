import React from 'react';
import styles from './GameControls.css';
import { useTurn } from '../../hooks/gameContext';

export default function GameControls() {

  const turn = useTurn();
  return (
    <section className={styles.controlsSection} >
      <button onClick={() => turn('ATTACK_ENEMY')} >Attack</button>
      <button onClick={() => turn('HEAL')} >Heal</button>
      <button onClick={() => turn('ATTACK_ENEMY')} >Run</button>
    </section>
  );
}
