import React, { useContext } from 'react';

export const GameContext = React.createContext();

export const useState = () => {
  const { state } = useContext(GameContext);
  return state;
};

export const useDispatch = () => {
  const { dispatch } = useContext(GameContext);
  return dispatch;
};

export const useCharacter = () => {
  const { character } = useState();
  return character;
};

export const useEnemy = () => {
  const { enemy } = useState();
  return enemy;
};

export const useTurn = () => {
  const dispatch = useDispatch();
  return action => {
    dispatch({ type: action });

    dispatch({ type: 'ATTACK_CHARACTER' });
  };
};

