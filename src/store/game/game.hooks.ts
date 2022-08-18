import { useCallback } from 'react';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { gameRoundSelector } from 'store/game/game.selectors';
import {
  setRound,
  attack,
  block,
  attackStrength,
  getQuestion,
  answered,
  attackPower,
  setDifficulty,
  userAnswer,
  answeredVerify,
  setGameStatus,
  resetGameState,
} from 'store/game/game.slice';
import {
  AttackPower,
  AttackStrengthType,
  DifficultyType,
  GameStatus,
} from 'models';
import { opponentCurrentHealthSelector } from 'store/opponent/opponent.selectors';
import { heroCurrentHealthSelector } from 'store/hero/hero.selectors';
import { resetHeroState } from 'store/hero/hero.slice';
import { resetOpponentState } from 'store/opponent/opponent.slice';

export type UseGameRoundResult = [number, { incrementRound: () => void }];

export const useGameRound = (): UseGameRoundResult => {
  const currentRound = useAppSelector(gameRoundSelector);
  const dispatch = useAppDispatch();

  const incrementRound = useCallback(() => {
    dispatch(setRound(currentRound + 1));
  }, [currentRound, dispatch]);

  return [currentRound, { incrementRound }];
};

export const useAttack = () => {
  const dispatch = useAppDispatch();
  return () => dispatch(attack());
};

export const useBlock = () => {
  const dispatch = useAppDispatch();
  return () => dispatch(block());
};

export const useAttackStrength = () => {
  const dispatch = useAppDispatch();
  return (strength: AttackStrengthType) => dispatch(attackStrength(strength));
};

export const useAttackPower = () => {
  const dispatch = useAppDispatch();
  return (power: AttackPower) => dispatch(attackPower(power));
};

export const useGetQuestion = () => {
  const dispatch = useAppDispatch();
  return (difficulty: AttackStrengthType) =>
    dispatch(getQuestion({ difficulty }));
};

export const useAnswered = () => {
  const dispatch = useAppDispatch();
  return () => dispatch(answered());
};

export const useUserAnswer = () => {
  const dispatch = useAppDispatch();
  return (userAanswer: string) => dispatch(userAnswer(userAanswer));
};

export const useAnsweredVerify = () => {
  const dispatch = useAppDispatch();
  return (answer: boolean) => dispatch(answeredVerify(answer));
};

export const useSetDifficulty = () => {
  const dispatch = useAppDispatch();
  return (difficulty: DifficultyType) => dispatch(setDifficulty(difficulty));
};

export const useGameStatus = () => {
  const opponentCurrentHealth = useAppSelector(opponentCurrentHealthSelector);
  const heroCurrentHealth = useAppSelector(heroCurrentHealthSelector);
  const dispatch = useAppDispatch();

  const getGameStatus = () => {
    if (opponentCurrentHealth <= 0) {
      dispatch(setGameStatus(GameStatus.VICTORY));
      return GameStatus.VICTORY;
    }

    if (heroCurrentHealth <= 0) {
      dispatch(setGameStatus(GameStatus.DEFEAT));
      return GameStatus.DEFEAT;
    }

    dispatch(setGameStatus(GameStatus.PLAYING));
    return GameStatus.PLAYING;
  };

  return getGameStatus;
};

export const useGameReset = () => {
  const dispatch = useAppDispatch();

  const resetGame = () => {
    dispatch(resetHeroState());
    dispatch(resetOpponentState());
    dispatch(resetGameState());
  };

  return resetGame;
};
