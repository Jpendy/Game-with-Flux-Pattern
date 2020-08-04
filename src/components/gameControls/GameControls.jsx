import React from 'react';
import PropTypes from 'prop-types';
import styles from './GameControls.css';

export default function GameControls() {
  return (
    <section className={styles.controlsSection} >
      <button>Attack</button>
      <button>Heal</button>
      <button>Run</button>
    </section>
  );
}
