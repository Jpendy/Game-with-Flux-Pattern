import React from 'react';
import PropTypes from 'prop-types';

export default function CharacterStats({ health, attack, experience }) {
  return (
    <div>
      <dl>
        <dt>Health</dt>
        <dd>{health}</dd>
        <dt>Attack</dt>
        <dd>{attack}</dd>
        <dt>Experience</dt>
        <dd>{experience}</dd>
      </dl>
    </div>
  );
}

CharacterStats.propTypes = {
  health: PropTypes.number.isRequired,
  attack: PropTypes.number.isRequired,
  experience: PropTypes.number.isRequired
};
