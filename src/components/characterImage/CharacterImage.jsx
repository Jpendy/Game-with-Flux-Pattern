import React from 'react';
import PropTypes from 'prop-types';

export default function CharacterImage({ image }) {
  return (   
    <figure>
      <img style={{ height: '300px' }} src={image} />
    </figure>
  );
}

CharacterImage.propTypes = {
  image: PropTypes.string.isRequired
};
