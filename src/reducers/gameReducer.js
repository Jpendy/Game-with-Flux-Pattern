import { nameAndImages, randomNum } from '../enemies';

export const initialState = {
  character: {
    image: 'https://vignette.wikia.nocookie.net/dbzff/images/e/ea/Goku_Artwork.png/revision/latest?cb=20200217144506',
    name: 'Goku',
    health: 100,
    attack: 10,
    experience: 0,
    status: 'ALIVE',
    hitting: false
  },
  enemy: {
    ...nameAndImages[Math.floor(Math.random() * 5)],
    health: randomNum(100),
    attack: randomNum(10),
    experience: randomNum(20),
    status: 'ALIVE'
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
    case 'SET_EXPERIENCE':
      return { ...state, character: { ...state.character, experience: state.character.experience + state.enemy.experience } };
    case 'ENEMY_DEATH':
      return { ...state, enemy: { ...state.enemy, status: 'DEAD' } };
    case 'CHARACTER_DEATH':
      return { ...state, character: { ...state.character, status: 'DEAD' } };
    case 'CHAR_HITTING':
      return { ...state, character: { ...state.character, hitting: true } };
    case 'SET_NEW_ENEMY':
      return { ...state, enemy: {
        ...nameAndImages[randomNum(5)],
        health: randomNum(100),
        attack: randomNum(10),
        experience: randomNum(20)
      } };
    default:
      return state;
  }
}
