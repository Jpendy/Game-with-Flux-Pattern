import React from 'react';
import { GameContext } from '../hooks/gameContext';
import { useReducer } from 'react';
import reducer, { initialState } from '../reducers/gameReducer';

// eslint-disable-next-line
export default function GameProvider({ children}) {
  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <GameContext.Provider value={{ state, dispatch }} >
      {children}
    </GameContext.Provider>
  );
}
