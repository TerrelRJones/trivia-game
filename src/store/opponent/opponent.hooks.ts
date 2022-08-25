import { ActionStateType, DifficultyType } from 'models';
import { useCallback, useMemo } from 'react';
import { useGameRound } from 'store/game/game.hooks';
import {
  gameActionSelector,
  gameDifficultySelector,
} from 'store/game/game.selectors';
import {
  heroCurrentHealthSelector,
  heroMaxHealthSelector,
} from 'store/hero/hero.selectors';
import { setHeroCurrentHealth } from 'store/hero/hero.slice';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import {
  setOpponentAttackValue,
  setOpponentDifficulty,
  setOpponentMaxHealth,
} from './opponent.slice';

import { opponentAttackValueSelector } from './opponent.selectors';

interface OpponentDetails {
  displayName: string;
  name: string;
  avatar: string;
}

type UseOpponentDetailsResult = [OpponentDetails, () => void];

enum MinOppenentAttackPower {
  LIGHT = 1,
  MEDIUM = 5,
  SETH = 10,
}

const BLOCK_HEALTH_BOOST = 10;

const getRandomAttackValue = () => {
  return Math.floor(Math.random() * 5);
};

export const useOpponentAttack = () => {
  const gameAction = useAppSelector(gameActionSelector);
  const heroCurrentHealth = useAppSelector(heroCurrentHealthSelector);
  const heroMaxHealth = useAppSelector(heroMaxHealthSelector);
  const difficulty = useAppSelector(gameDifficultySelector);
  const opponentAttackValue = useAppSelector(opponentAttackValueSelector);
  const [, { incrementRound }] = useGameRound();
  const dispatch = useAppDispatch();

  const getOpponentAttackPower = useCallback((): number => {
    switch (difficulty) {
      case DifficultyType.MEDIUM:
        return getRandomAttackValue() * 2 + MinOppenentAttackPower.MEDIUM;
      case DifficultyType.SETH:
        return getRandomAttackValue() * 3 + MinOppenentAttackPower.SETH;
      default:
        return getRandomAttackValue() + MinOppenentAttackPower.LIGHT;
    }
  }, [difficulty]);

  const opponentAttackPower = getOpponentAttackPower();

  const opponentAttack = useCallback(
    (userAnswer: boolean) => {
      if (
        !userAnswer &&
        [ActionStateType.ATTACK, ActionStateType.BLOCK].includes(gameAction)
      ) {
        dispatch(setOpponentAttackValue(opponentAttackPower));
        dispatch(setHeroCurrentHealth(heroCurrentHealth - opponentAttackValue));
        return incrementRound();
      }

      if (gameAction === ActionStateType.BLOCK && userAnswer) {
        // dispatch(setOpponentAttackValue(opponentAttackPower));
        if (heroCurrentHealth > 90) {
          dispatch(setHeroCurrentHealth(heroMaxHealth));
          return incrementRound();
        }

        dispatch(setHeroCurrentHealth(heroCurrentHealth + BLOCK_HEALTH_BOOST));
        return incrementRound();
      }
    },
    [
      gameAction,
      dispatch,
      opponentAttackPower,
      heroCurrentHealth,
      opponentAttackValue,
      incrementRound,
      heroMaxHealth,
    ]
  );

  return opponentAttack;
};

export const useOpponentDetails = (): UseOpponentDetailsResult => {
  const difficulty = useAppSelector(gameDifficultySelector);
  const dispatch = useAppDispatch();

  const opponentDetails: OpponentDetails = useMemo(() => {
    switch (difficulty) {
      case DifficultyType.EASY:
        return {
          name: 'Wizard Pig',
          displayName: 'Easy',
          avatar: 'wizard',
        };
      case DifficultyType.MEDIUM:
        return {
          name: 'Barbarian Bunny',
          displayName: 'Medium',
          avatar: 'bunny',
        };
      default:
        return {
          name: 'Dragon Seth',
          displayName: 'Seth',
          avatar: 'seth',
        };
    }
  }, [difficulty]);

  const setOpponent = () => {
    if (difficulty === DifficultyType.EASY) {
      dispatch(setOpponentDifficulty(DifficultyType.EASY));
      dispatch(setOpponentMaxHealth(100));
      return;
    }
    if (difficulty === DifficultyType.MEDIUM) {
      dispatch(setOpponentDifficulty(DifficultyType.MEDIUM));
      dispatch(setOpponentMaxHealth(150));
      return;
    }

    if (difficulty === DifficultyType.SETH) {
      dispatch(setOpponentDifficulty(DifficultyType.SETH));
      dispatch(setOpponentMaxHealth(200));
      return;
    }
  };

  return [opponentDetails, setOpponent];
};
