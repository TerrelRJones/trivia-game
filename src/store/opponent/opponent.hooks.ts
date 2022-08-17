import { ActionStateType } from 'models';
import { useCallback } from 'react';
import { useGameRound } from 'store/game/game.hooks';
import { gameActionSelector } from 'store/game/game.selectors';
import { heroCurrentHealthSelector } from 'store/hero/hero.selectors';
import { setHeroCurrentHealth } from 'store/hero/hero.slice';
import { useAppDispatch, useAppSelector } from 'store/hooks';

export const useOpponentAttack = () => {
  const gameAction = useAppSelector(gameActionSelector);
  const heroCurrentHealth = useAppSelector(heroCurrentHealthSelector);
  const [gameRound, { incrementRound }] = useGameRound();
  const dispatch = useAppDispatch();

  const opponentAttack = useCallback(
    (userAnswer: boolean) => {
      if (
        (gameAction === ActionStateType.ATTACK && !userAnswer) ||
        (gameAction === ActionStateType.BLOCK && !userAnswer)
      ) {
        dispatch(setHeroCurrentHealth(heroCurrentHealth - 5));
        incrementRound();
      }

      if (gameAction === ActionStateType.BLOCK && userAnswer) {
        if (heroCurrentHealth > 90) {
          return dispatch(setHeroCurrentHealth(100));
        }
        dispatch(setHeroCurrentHealth(heroCurrentHealth + 10));

        incrementRound();
      }
    },
    [dispatch, gameAction, heroCurrentHealth, incrementRound]
  );

  return opponentAttack;
};
