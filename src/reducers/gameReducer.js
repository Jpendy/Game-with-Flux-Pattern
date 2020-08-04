
export const initialState = {
  character: {
    image: 'https://vignette.wikia.nocookie.net/dbzff/images/e/ea/Goku_Artwork.png/revision/latest?cb=20200217144506',
    name: 'Goku',
    health: 100,
    attack: 10,
    experience: 0
  },
  enemy: {
    image: 'https://www.pngitem.com/pimgs/m/156-1560477_golden-frieza-png-transparent-png.png',
    name: 'Frieza',
    health: 80,
    attack: 5,
    experience: 20
  }
};

export default function reducer(state, action) {
  switch(action.type) {
    case 'ATTACK_ENEMY':
      return { ...state, enemy:{ ...state.enemy, health: state.enemy.health - state.character.attack } }; 
    case 'HEAL':
      return { ...state, character: { ...state.character, health: state.character.health + 5 } };
    case 'ATTACK_CHARACTER':
      return { ...state, character: { ...state.character, health: state.character.health - state.enemy.attack } };

    default:
      return state;
  }
}
