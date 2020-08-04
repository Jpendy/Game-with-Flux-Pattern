import React from 'react';
import PropTypes from 'prop-types';
import CharacterImage from '../characterImage/CharacterImage';
import CharacterStats from '../App/characterStats/CharacterStats';

export default function Character({ character }) {
  return (
    <div>
      <p>{character.name}</p>
      <CharacterImage image={character.image} />
      <CharacterStats {...character} />        
    </div>
  );
}

Character.propTypes = {
  character: PropTypes.object.isRequired
};
