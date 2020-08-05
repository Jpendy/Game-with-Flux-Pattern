import reducer from './gameReducer';

describe('game reducer', () => {

  let state;
  beforeEach(() => {
    state = {
      character: {
        health: 100,
        attack: 10,
        experience: 0,
        status: 'ALIVE',
      },
      enemy: {
        health: 100,
        attack: 10,
        experience: 20,
        status: 'ALIVE'
      }
    };
  });

  it('it attacks enemy with ATTACK_ENEMY', () => {
    const action = {
      type: 'ATTACK_ENEMY'
    };

    const newState = reducer(state, action);
    expect(newState).toEqual({
      character: {
        health: 100,
        attack: 10,
        experience: 0,
        status: 'ALIVE',
      },
      enemy: {
        health: 90,
        attack: 10,
        experience: 20,
        status: 'ALIVE'
      }
    });
  });

  it('it heals with HEAL', () => {
    const action = { type: 'HEAL' };

    const newState = reducer(state, action);
    
    expect(newState).toEqual({
      character: {
        health: 105,
        attack: 10,
        experience: 0,
        status: 'ALIVE',
      },
      enemy: {
        health: 100,
        attack: 10,
        experience: 20,
        status: 'ALIVE'
      }
    });
  });

  it('it attacks the character with ATTACK_CHARACTER', () => {
    const action = { type: 'ATTACK_CHARACTER' };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      character: {
        health: 90,
        attack: 10,
        experience: 0,
        status: 'ALIVE',
      },
      enemy: {
        health: 100,
        attack: 10,
        experience: 20,
        status: 'ALIVE'
      }
    });
  });

  it('it sets the characters experience with SET_EXPERIENCE', () => {
    const action = { type: 'SET_EXPERIENCE' };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      character: {
        health: 100,
        attack: 10,
        experience: 20,
        status: 'ALIVE',
      },
      enemy: {
        health: 100,
        attack: 10,
        experience: 20,
        status: 'ALIVE'
      }
    });
  });

  it('it changes the enemy status to dead with ENEMY_DEATH', () => {
    const action = { type: 'ENEMY_DEATH' };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      character: {
        health: 100,
        attack: 10,
        experience: 0,
        status: 'ALIVE',
      },
      enemy: {
        health: 100,
        attack: 10,
        experience: 20,
        status: 'DEAD'
      }
    });
  });

  it('it changes characters status to dead with CHARACTER_DEATH', () => {
    const action = { type: 'CHARACTER_DEATH' };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      character: {
        health: 100,
        attack: 10,
        experience: 0,
        status: 'DEAD',
      },
      enemy: {
        health: 100,
        attack: 10,
        experience: 20,
        status: 'ALIVE'
      }
    });
  });

  it('it sets a new enemy with SET_NEW_ENEMY', () => {
    const action = { type: 'SET_NEW_ENEMY' };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      character: {
        health: 100,
        attack: 10,
        experience: 0,
        status: 'ALIVE',
      },
      enemy: {
        name: expect.anything(),
        health: expect.anything(),
        attack: expect.anything(),
        experience:expect.anything(),
        image: expect.anything()
      }
    });
  });
});
